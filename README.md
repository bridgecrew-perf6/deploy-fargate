<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [deploy-fargate](#deploy-fargate)
  - [For User](#for-user)
    - [1. Local Environment](#1-local-environment)
    - [2. How to Deploy](#2-how-to-deploy)
      - [2.1. set aws profile](#21-set-aws-profile)
      - [2.2. set deploy config](#22-set-deploy-config)
      - [2.3. install npm package](#23-install-npm-package)
      - [2.4. deploy container image into AWS Faragte](#24-deploy-container-image-into-aws-faragte)
        - [Only push container image into ECR (NOT deploy Faragte)](#only-push-container-image-into-ecr-not-deploy-faragte)
  - [For Contributor](#for-contributor)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# deploy-fargate

deploy container image into AWS Fargate on Local Environment.

## For User

### 1. Local Environment

```
node v16.14.2
```

### 2. How to Deploy

#### 2.1. set aws profile

~/.aws/credentials

```
[private]
aws_access_key_id = AKIXXXXXXXXXXXXXXXX
aws_secret_access_key = abcdefghigklmnopqrstuvwxyz0123456789
region = ap-northeast-1
```

```
export AWS_PROFILE=private
```

#### 2.2. set deploy config

set deploy config files.

[task-definition.json](./example/task-definition.json)

[deploy_env.yaml](./example/deploy_env.yaml)

#### 2.3. install npm package

```
docker run -it -v $PWD:/usr/src/app --rm node:16.14.2-slim npm install -g npm && npm install
```

#### 2.4. deploy container image into AWS Faragte

```
npm run deploy:dev
```

##### Only push container image into ECR (NOT deploy Faragte)

```
npm run push:dev
```

## For Contributor

```
docker run -it -v $PWD:/usr/src/app --rm node:16.14.2-slim npm install -g npm && npm install
npm run prepare
```
