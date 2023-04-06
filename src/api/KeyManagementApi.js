/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20011', 'model/InlineResponse4005', 'model/InlineResponse5001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20011'), require('../model/InlineResponse4005'), require('../model/InlineResponse5001'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.KeyManagementApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse20011, root.CyberSource.InlineResponse4005, root.CyberSource.InlineResponse5001);
  }
}(this, function(ApiClient, InlineResponse20011, InlineResponse4005, InlineResponse5001) {
  'use strict';

  /**
   * KeyManagement service.
   * @module api/KeyManagementApi
   * @version 0.0.1
   */

  /**
   * Constructs a new KeyManagementApi. 
   * @alias module:api/KeyManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the searchKeys operation.
     * @callback module:api/KeyManagementApi~searchKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Keys
     * Search one or more Keys
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset This allows you to specify the page offset from the resulting list resultset you want the records to be returned
     * @param {Number} opts.limit This allows you to specify the total number of records to be returned off the resulting list resultset
     * @param {String} opts.sort This allows you to specify a comma separated list of fields in the order which the resulting list resultset must be sorted.
     * @param {Array.<String>} opts.organizationIds List of Orgaization Ids to search. The maximum size of the organization Ids list is 1. The maximum length of Organization Id is 30.
     * @param {Array.<String>} opts.keyIds List of Key Ids to search. The maximum size of the Key Ids list is 1
     * @param {Array.<String>} opts.keyTypes Key Type, Possible values -  certificate, password, pgp and scmp_api. When Key Type is provided atleast one more filter needs to be provided
     * @param {Date} opts.expirationStartDate Expiry Filter Start Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
     * @param {Date} opts.expirationEndDate Expiry Filter End Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
     * @param {module:api/KeyManagementApi~searchKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */
    this.searchKeys = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'organizationIds': this.apiClient.buildCollectionParam(opts['organizationIds'], 'csv'),
        'keyIds': this.apiClient.buildCollectionParam(opts['keyIds'], 'csv'),
        'keyTypes': this.apiClient.buildCollectionParam(opts['keyTypes'], 'csv'),
        'expirationStartDate': opts['expirationStartDate'],
        'expirationEndDate': opts['expirationEndDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse20011;

      return this.apiClient.callApi(
        '/kms/v2/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
