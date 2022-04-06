// push container image into ECR.
import { execute } from './command.js';
import { AWS_REGION } from './constants.js';

export async function push(awsAccountId, ecrNewTag) {
  let cmd;
  cmd = `aws ecr get-login-password | docker login --username AWS --password-stdin https://${awsAccountId}.dkr.ecr.${AWS_REGION}.amazonaws.com`;
  await execute(cmd);
  cmd = `docker push ${ecrNewTag}`;
  await execute(cmd);
  return 0;
}

export default {
  push,
};
