import { Request, Response } from 'superagent';
import { Configuration } from './authentication/core/Configuration';

enum CollectionFormatEnum {
  /**
   * Comma-separated values. Value: <code>csv</code>
   * @const
   */
  CSV = ',',
  /**
   * Space-separated values. Value: <code>ssv</code>
   * @const
   */
  SSV = ' ',
  /**
   * Tab-separated values. Value: <code>tsv</code>
   * @const
   */
  TSV = '\t',
  /**
   * Pipe(|)-separated values. Value: <code>pipes</code>
   * @const
   */
  PIPES = '|',
  /**
   * Native array. Value: <code>multi</code>
   * @const
   */
  MULTI = 'multi',
}

/**
 * Callback function to receive the result of the operation.
 * @callback module:ApiClient~callApiCallback
 * @param {String} error Error message, if any.
 * @param data The data returned by the service call.
 * @param {String} response The complete HTTP response.
 */
export type ApiCallback<T = unknown> = (error?: string, data?: T, reaponse?: Response) => void;

declare class ApiClient {
  constructor();

  /**
   * The base URL against which to resolve every API call's (relative) path.
   * @type {String}
   * @default https://apitest.cybersource.com
   */
  basePath: string;

  /**
   * The authentication methods to be included for all API calls.
   * @type {Record<string, string>}
   */
  authentications: Record<string, string>;
  /**
   * The default HTTP headers to be included for all API calls.
   * @type {Record<string, string>}
   * @default {}
   */
  defaultHeaders: Record<string, string>;

  /**
   * The default HTTP timeout for all API calls.
   * @type {Number}
   * @default 60000
   */
  timeout: number;

  /**
   * If set to false an additional timestamp parameter is added to all API GET calls to
   * prevent browser caching
   * @type {Boolean}
   * @default true
   */
  cache: boolean;

  /**
   * If set to true, the client will save the cookies from each server
   * response, and return them in the next request.
   * @default false
   */
  enableCookies: boolean;

  /**
   * The filepath where reports are downloaded
   */
  downloadFilePath: string;

  /**
   * The user-defined Accept Header Type
   */
  acceptHeader: string;

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  paramToString(param: any): string;

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  buildUrl(path: string, pathParams: Record<string, string>): string;

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  isJsonMime(code: string): boolean;

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {string[]} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  jsonPreferredMime(contentTypes: string[]): string;

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  isFileParam(param: any): boolean;

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Record<string, any>} params The parameters as object properties.
   * @returns {Record<string, any>} normalized parameters.
   */
  normalizeParams(params: Record<string, any>): Record<string, any>;

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  buildCollectionParam(param: any[], collectionFormat: CollectionFormatEnum): null | string[];

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {string[]} authNames An array of authentication method names.
   */
  applyAuthToRequest(request: any, authNames: string[]): void;

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {SuperAgent.Response} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  deserialize(response: Response, returnType: any): any;

  /**
   * This method will set the merchantConfig object global
   *
   * @param {Configuration} configObject merchantConfiguration properties.
   */
  setConfiguration(configObject: Configuration): void;

  /**
   * This method is to generate headers for http and jwt authentication.
   *
   * @param {String} httpMethod
   * @param {String} requestTarget
   * @param {String} requestBody
   */
  callAuthenticationHeader(httpMethod: string, requestTarget: string, requestBody: string, headerParams: Record<string, string>): Record<string, string>;

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Record<string, string>} pathParams A map of path parameters and their values.
   * @param {Record<string, any>} queryParams A map of query parameters and their values.
   * @param {Record<string, any>} headerParams A map of header parameters and their values.
   * @param {Record<string, any>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
   * constructor for a complex type.
   * @param {module:ApiClient~callApiCallback} callback The callback function.
   * @returns {Object} The SuperAgent request object.
   */
  callApi<T = unknown>(
    path: string,
    httpMethod: string,
    pathParam: Record<string, string>,
    queryParams: Record<string, any>,
    headerParams: Record<string, any>,
    formParams: Record<string, any>,
    bodyParam: Record<string, any>,
    authNames: string[],
    contentTypes: string[],
    accepts: string[],
    returnType: any,
    callback: ApiCallback<T>,
  ): Request;

  /**
   * Build request target required for the signature generation
   * @param {String} path
   * @param {Record<string, string>} pathParams A map of path parameters and their values.
   * @param {Record<string, any>} queryParams A map of query parameters and their values.
   */
  buildRequestTarget(path: string, pathParams: Record<string, string>, queryParams: Record<string, any>): string;

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  static parseDate(str: string): Date;

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type or null or undefined if data is null or undefined.
   */
  static convertToType(data: any, type: any): any;

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
  static constructFromObject<T = any>(data: T, obj: T, itemType: any): void;

  static CollectionFormatEnum: typeof CollectionFormatEnum;
}

export default ApiClient;
