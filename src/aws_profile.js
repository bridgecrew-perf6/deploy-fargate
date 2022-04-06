import AWS from 'aws-sdk';

export class AwsProfile {
  constructor(awsProfileName) {
    const credentials = new AWS.SharedIniFileCredentials({
      profile: awsProfileName,
    });
    AWS.config.credentials = credentials;
    this.sts = new AWS.STS();
  }

  async getAccountId() {
    const accountId = (await this.sts.getCallerIdentity({}).promise()).Account;
    return accountId;
  }
}

export default {
  AwsProfile,
};
