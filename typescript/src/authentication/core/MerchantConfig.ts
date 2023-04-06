import C from '../util/Constants';
import LogConfiguration from '../logging/LogConfiguration';
import { AuthenticationType, Configuration, RunEnvironment } from './Configuration';
import winston from 'winston';

declare class MerchantConfig {
  /**
   * One of: 'http_signature' | 'jwt' | 'oauth'
   * @member {AuthenticationType} authenticationType
   */
  authenticationType: AuthenticationType;

  /**
   * API endpoint domain.
   * Test: apitest.cybersource.com
   * Prod: api.cybersource.com
   */
  runEnvironment: RunEnvironment;

  merchantID: string;
  merchantKeyId: string;
  merchantsecretKey: string;

  /* HTTP Parameters */
  useHttpClient: boolean;
  url: string;
  requestHost: string;
  requestJsonPath: string;
  requestType: string;
  requestTarget: string;
  requestJsonData: any;

  /* JWT Parameters*/
  keysDirectory: string;
  keyAlias: string;
  keyPass: string;
  keyType: string;
  keyFilename: string;

  /* proxy Parameters */
  useProxy: boolean;
  proxyAddress?: string;
  proxyPort?: string;
  proxyUser?: string;
  proxyPassword?: string;

  /* MetaKey Parameters */
  useMetaKey: boolean;
  portfolioID?: string;

  /* MutualAuth Parameters */
  enableClientCert?: boolean;
  clientCertDir?: string;
  sslClientCert?: string;
  privateKey?: string;

  /* OAuth Parameters */
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  refreshToken?: string;
  solutionId?: string;

  logConfiguration: LogConfiguration;

  constructor(config: Partial<Configuration>);

  getAuthenticationType(): AuthenticationType;
  getRunEnvironment(): RunEnvironment;
  getMerchantID(): string;
  getMerchantKeyID(): string;
  getMerchantsecretKey(): string;

  setAuthenticationType(authType: AuthenticationType): void;
  setRunEnvironment(runEnvironment: RunEnvironment): void;
  setMerchantID(merchantID: string): void;
  setMerchantKeyID(merchantKeyId: string): string;
  setMerchantsecretKey(merchantsecretKey: string): void;

  /* HTTP Parameters */
  getURL(): string;
  getRequestHost(): string;
  getRequestType(): string;
  getRequestTarget(): string;
  getRequestJsonPath(): string;
  getRequestJsonData(): string;

  setURL(url: string): void;
  setRequestHost(requestHost: string): void;
  setRequestType(requestType: string): void;
  setRequestTarget(requestTarget: string): void;
  setRequestJsonPath(requestJsonPath: string): void;
  setRequestJsonData(requestJsonData: string): void;

  /* JWT Parameters*/
  getKeysDirectory(): string;
  getKeyAlias(): string;
  getKeyPass(): string;
  getKeyFileName(): string;

  setKeysDirectory(keysDirectory: string): void;
  setKeyAlias(keyAlias: string): void;
  setKeyPass(keyPass: string): void;
  setKeyFileName(keyFilename: string): void;

  /* proxy Parameters */
  getUseProxy(): boolean;
  getProxyAddress(): string;
  getProxyPort(): string;
  getProxyUser(): string;
  getProxyPassword(): string;

  setUseProxy(useProxy: boolean): void;
  setProxyAddress(proxyAddress: string): void;
  setProxyPort(proxyPort: string): void;
  setProxyUser(proxyUser: string): void;
  setProxyPassword(proxyPassword: string): void;

  /* MetaKey Parameters */
  getUseMetaKey(): boolean;
  getPortfolioID(): string;

  setUseMetaKey(useMetaKey: boolean): void;
  setPortfolioID(portfolioID: string): void;

  /* MutualAuth Parameters */
  getEnableClientCert(): boolean;
  getClientCertDir(): string;
  getSSLClientCert(): string;
  getPrivateKey(): string;

  setEnableClientCert(enableClientCert: boolean): void;
  setClientCertDir(clientCertDir: string): void;
  setSSLClientCert(sslClientCert: string): void;
  setPrivateKey(privateKey: string): void;

  /* OAuth Parameters */
  getClientId(): string;
  getClientSecret(): string;
  getAccessToken(): string;
  getRefreshToken(): string;
  setSolutionId(solutionId: string): void;

  setClientId(clientId: string): void;
  setClientSecret(clientSecret: string): void;
  setAccessToken(accessToken: string): void;
  setRefreshToken(refreshToken: string): void;
  getSolutionId(): string;

  getLogConfiguration(): LogConfiguration;
  setLogConfiguration(logConfig: LogConfiguration): void;

  runEnvironmentCheck(logger: winston.Logger): void;

  defaultPropValues(): void;

  /**
   * This method is to log all merchantConfic properties
   * excluding HideMerchantConfigProperies defined in Constants
   *
   * @param {MerchantConfig} merchantConfig
   */
  getAllProperties(merchantConfig: MerchantConfig): Partial<MerchantConfig>;
}

export default MerchantConfig;
