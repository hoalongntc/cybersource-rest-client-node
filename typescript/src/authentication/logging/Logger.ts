import MerchantConfig from '../core/MerchantConfig';
import winston from 'winston';

interface LoggerUtil {
  getLogger(merchantConfig: MerchantConfig, loggerCategory?: string): winston.Logger;
}

const loggerUtil: LoggerUtil = null;

export default loggerUtil;
