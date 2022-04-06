<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Example Deploy Setting](#example-deploy-setting)
  - [Deploy Configs](#deploy-configs)
  - [AWS architecture](#aws-architecture)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Example Deploy Setting

## Deploy Configs

[Dockerfile](./Dockerfile) ... target dockerfile to push into ECR.

[task-definition.json](./task-definition.json) ... base deploy config for Fargate.

[deploy_env.yaml](./deploy_env.yaml) ... specific deploy values to override parameters on task-definition.json.

## AWS architecture

reference

<https://github.com/tomoki171923/terraform-aws/tree/dev/sample/modules/computing/fargate_alb>
