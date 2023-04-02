import { MerchantConfig } from 'authentication/core/MerchantConfig';
import winston from 'winston';
interface LoggerUtil {
    getLogger(merchantConfig: MerchantConfig, loggerCategory?: string): winston.Logger;
}
export default LoggerUtil;
