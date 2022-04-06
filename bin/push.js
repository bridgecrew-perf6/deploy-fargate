#!/usr/bin/env node

import { AwsProfile } from '../src/aws_profile.js';
import { AWS_PROFILE_NAME, AWS_ECR_REPOSITORY_NAME } from '../src/constants.js';
import { build } from '../src/build.js';
import { push } from '../src/push.js';

async function main(args) {
  const environment = args[2];
  const awsProfile = new AwsProfile(AWS_PROFILE_NAME);
  const awsAccountId = await awsProfile.getAccountId();

  // eslint-disable-next-line no-console
  console.log(`AWS Account  | ${awsAccountId}`);
  // eslint-disable-next-line no-console
  console.log(`Environment  | ${environment}`);
  // eslint-disable-next-line no-console
  console.log(`AWS ECR NAME | ${AWS_ECR_REPOSITORY_NAME}`);

  const ecrNewTag = await build(awsAccountId);
  // eslint-disable-next-line no-console
  console.log(ecrNewTag);

  const returnCode = await push(awsAccountId, ecrNewTag);
  // eslint-disable-next-line no-console
  console.log(returnCode);
}

main(process.argv);
