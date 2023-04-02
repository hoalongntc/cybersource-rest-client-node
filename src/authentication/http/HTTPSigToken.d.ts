import winston from 'winston';
import MerchantConfig from '../core/MerchantConfig';
declare interface HTTPSigToken {
    getToken(merchantConfig: MerchantConfig, logger: winston.Logger): string;
}
export default HTTPSigToken;
