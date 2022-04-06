// register task-definition & deploy fargate.
import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { load } from 'js-yaml';
import { execute } from './command.js';
import { TASK_DEFINITION_TEMPLATE_FILE, DEPLOY_ENV_FILE } from './constants.js';

async function getTaskDefinition(deployEnv) {
  let taskDefinition = readFileSync(TASK_DEFINITION_TEMPLATE_FILE, 'utf8');
  Object.keys(deployEnv).forEach((key) => {
    taskDefinition = taskDefinition.replace(`<${key}>`, deployEnv[key]);
  });
  return taskDefinition;
}

export async function deploy(ecrNewTag) {
  const yaml = load(readFileSync(DEPLOY_ENV_FILE, 'utf8'));
  const deployEnv = yaml.env;
  deployEnv.CONTAINER_IMAGE = ecrNewTag;
  // eslint-disable-next-line no-console
  console.log(deployEnv);
  const taskDefinition = await getTaskDefinition(deployEnv);
  const taskDefinitionFile = './tmp-task-definition.json';
  writeFileSync(taskDefinitionFile, taskDefinition, 'utf8', (err) => {
    if (err) throw err;
  });
  let cmd;

  // update taskDefinition
  cmd = `aws ecs register-task-definition --cli-input-json file://${taskDefinitionFile} --output json taskDefinition.taskDefinitionArn`;
  const taskDefinitionArn = await execute(cmd);
  // eslint-disable-next-line no-console
  console.log(taskDefinitionArn);

  // deploy fargate
  cmd = `aws ecs update-service --cluster ${deployEnv.ECS_CLUSTER_NAME} --service ${deployEnv.ECS_SERVICE_NAME} --task-definition ${taskDefinitionArn}`;
  await execute(cmd);

  // remove temporary taskDefinition file
  unlinkSync(taskDefinitionFile);
  return 0;
}

export default {
  deploy,
};
