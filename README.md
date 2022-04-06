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

TBD

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
