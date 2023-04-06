export type AuthenticationType = 'http_signature' | 'jwt' | 'oauth';

export type RunEnvironment = 'apitest.cybersource.com' | 'api.cybersource.com';

export interface Configuration {
  authenticationType: AuthenticationType;
  runEnvironment: RunEnvironment;
  merchantID: string;
  merchantKeyId: string;
  merchantsecretKey: string;

  keyAlias?: string;
  keyPass?: string;
  keyFileName?: string;
  keysDirectory?: string;
  useMetaKey?: boolean;
  portfolioID?: string;

  logConfiguration: {
    enableLog?: boolean;
    logFileName?: string;
    logDirectory?: string;
    logFileMaxSize?: string;
    loggingLevel?: string;
    enableMasking?: boolean;
  };
}
