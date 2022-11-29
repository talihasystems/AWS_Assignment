import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-northeast-1_Jit3vmYfR',
  ClientId: '4q2rf795muc668mf561uijl2cg',
};

export default new CognitoUserPool(poolData);