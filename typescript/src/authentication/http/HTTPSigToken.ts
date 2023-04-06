import winston from 'winston';
import MerchantConfig from '../core/MerchantConfig';

declare interface HTTPSigToken {
  getToken(merchantConfig: MerchantConfig, logger: winston.Logger): string;
}

const httpSigToken: HTTPSigToken = null;

export default httpSigToken;
