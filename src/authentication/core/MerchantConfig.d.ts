import LogConfiguration from '../logging/LogConfiguration';
declare class MerchantConfig {
    authenticationType: string;
    url: string;
    requestHost: string;
    requestJsonPath: string;
    merchantID: string;
    requestType: string;
    requestTarget: string;
    requestJsonData: any;
    keysDirectory: string;
    keyAlias: string;
    keyPass: string;
    keyType: string;
    keyFilename: string;
    useHttpClient: boolean;
    useProxy: boolean;
    proxyAddress?: string;
    proxyPort?: string;
    proxyUser?: string;
    proxyPassword?: string;
    merchantKeyId: string;
    merchantsecretKey: string;
    useMetaKey: boolean;
    portfolioID?: string;
    enableClientCert?: boolean;
    clientCertDir?: string;
    sslClientCert?: string;
    privateKey?: string;
    clientId: string;
    clientSecret: string;
    accessToken: string;
    refreshToken: string;
    runEnvironment: string;
    solutionId: string;
    logConfiguration: LogConfiguration;
}
export default MerchantConfig;
