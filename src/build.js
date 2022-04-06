// build docker container image for ECR.
import { execute } from './command.js';
import { AWS_REGION, AWS_ECR_REPOSITORY_NAME, APP_PATH } from './constants.js';

export async function build(awsAccountId) {
  let cmd;
  cmd = `cd ${APP_PATH} ; git rev-parse HEAD`;
  const commitId = (await execute(cmd)).replace(/\r?\n/g, '');
  cmd = `docker build -t ${commitId} ${APP_PATH}`;
  await execute(cmd);
  const ecrNewTag = `${awsAccountId}.dkr.ecr.${AWS_REGION}.amazonaws.com/${AWS_ECR_REPOSITORY_NAME}:${commitId}`;
  cmd = `docker tag ${commitId} ${ecrNewTag}`;
  await execute(cmd);
  return ecrNewTag;
}

export default {
  build,
};
