import winston from 'winston';
import MerchantConfig from '../core/MerchantConfig';

declare interface DigestGenerator {
  generateDigest(merchantConfig: MerchantConfig, logger: winston.Logger): string;
}

const digestGenerator: DigestGenerator = null;

export default digestGenerator;
