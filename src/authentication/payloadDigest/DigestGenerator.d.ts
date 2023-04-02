import winston from 'winston';
import MerchantConfig from '../core/MerchantConfig';
declare interface DigestGenerator {
    generateDigest(merchantConfig: MerchantConfig, logger: winston.Logger): string;
}
export default DigestGenerator;
