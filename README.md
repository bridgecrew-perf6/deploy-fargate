# deploy-fargate

deploy container image into AWS fargate

## For User

### set aws profile

~/.aws/credentials
'''
[private]
aws_access_key_id = AKIXXXXXXXXXXXXXXXX
aws_secret_access_key = abcdefghigklmnopqrstuvwxyz0123456789
region = ap-northeast-1
'''

'''
export AWS_PROFILE=private
npm run deploy:dev
'''

### install npm package

'''
docker run -it -v $PWD:/usr/src/app --rm node:16.14.2-slim npm install -g npm && npm install
'''

## For Contributor
