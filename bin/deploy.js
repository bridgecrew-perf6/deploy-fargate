#!/usr/bin/env node

import { AwsProfile } from '../src/aws_profile.js';
import { AWS_PROFILE_NAME, AWS_ECR_REPOSITORY_NAME } from '../src/constants.js';

const environment = process.argv[2];
const awsProfile = new AwsProfile(AWS_PROFILE_NAME);
const awsAccountId = await awsProfile.getAccountId();
// eslint-disable-next-line no-console
console.log(`AWS Account  | ${awsAccountId}`);
console.log(`Environment  | ${environment}`);
console.log(`AWS ECR NAME | ${AWS_ECR_REPOSITORY_NAME}`);
