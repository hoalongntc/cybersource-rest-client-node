import winston from 'winston';
import MerchantConfig from './MerchantConfig';

declare interface Authorization {
  getToken(merchantConfig: MerchantConfig, logger: winston.Logger): string;
}

const authorization: Authorization = null;

export default authorization;
