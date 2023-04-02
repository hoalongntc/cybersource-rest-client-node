declare class ApiClient {
    basePath: string;
    authentications: Record<string, string>;
    defaultHeaders: Record<string, string>;
    timeout: number;
    cache: boolean;
    enableCookies: boolean;
    downloadFilePath: string;
    acceptHeader: string;
    paramToString(param: any): string;
    buildUrl(path: string, pathParams: Record<string, string>): string;
    isJsonMime(code: string): boolean;
    jsonPreferredMime(contentTypes: string[]): string;
}
export default ApiClient;
