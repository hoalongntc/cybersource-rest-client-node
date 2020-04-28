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
    define(['ApiClient', 'model/CreateInvoiceRequest', 'model/InvoicingV2InvoicesAllGet200Response', 'model/InvoicingV2InvoicesAllGet400Response', 'model/InvoicingV2InvoicesAllGet404Response', 'model/InvoicingV2InvoicesAllGet502Response', 'model/InvoicingV2InvoicesGet200Response', 'model/InvoicingV2InvoicesPost201Response', 'model/InvoicingV2InvoicesPost202Response', 'model/UpdateInvoiceRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateInvoiceRequest'), require('../model/InvoicingV2InvoicesAllGet200Response'), require('../model/InvoicingV2InvoicesAllGet400Response'), require('../model/InvoicingV2InvoicesAllGet404Response'), require('../model/InvoicingV2InvoicesAllGet502Response'), require('../model/InvoicingV2InvoicesGet200Response'), require('../model/InvoicingV2InvoicesPost201Response'), require('../model/InvoicingV2InvoicesPost202Response'), require('../model/UpdateInvoiceRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InvoicesApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateInvoiceRequest, root.CyberSource.InvoicingV2InvoicesAllGet200Response, root.CyberSource.InvoicingV2InvoicesAllGet400Response, root.CyberSource.InvoicingV2InvoicesAllGet404Response, root.CyberSource.InvoicingV2InvoicesAllGet502Response, root.CyberSource.InvoicingV2InvoicesGet200Response, root.CyberSource.InvoicingV2InvoicesPost201Response, root.CyberSource.InvoicingV2InvoicesPost202Response, root.CyberSource.UpdateInvoiceRequest);
  }
}(this, function(ApiClient, CreateInvoiceRequest, InvoicingV2InvoicesAllGet200Response, InvoicingV2InvoicesAllGet400Response, InvoicingV2InvoicesAllGet404Response, InvoicingV2InvoicesAllGet502Response, InvoicingV2InvoicesGet200Response, InvoicingV2InvoicesPost201Response, InvoicingV2InvoicesPost202Response, UpdateInvoiceRequest) {
  'use strict';

  /**
   * Invoices service.
   * @module api/InvoicesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InvoicesApi. 
   * @alias module:api/InvoicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createInvoice operation.
     * @callback module:api/InvoicesApi~createInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a New Invoice
     * Create a new invoice.
     * @param {module:model/CreateInvoiceRequest} createInvoiceRequest 
     * @param {module:api/InvoicesApi~createInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesPost201Response}
     */
    this.createInvoice = function(createInvoiceRequest, callback) {
      var postBody = createInvoiceRequest;

      // verify the required parameter 'createInvoiceRequest' is set
      if (createInvoiceRequest === undefined || createInvoiceRequest === null) {
        throw new Error("Missing the required parameter 'createInvoiceRequest' when calling createInvoice");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesPost201Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllInvoices operation.
     * @callback module:api/InvoicesApi~getAllInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesAllGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Invoices
     * Get a list of invoices.
     * @param {Number} offset Page offset number.
     * @param {Number} limit Maximum number of items you would like returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.status The status of the invoice.  Possible values:   - DRAFT   - CREATED   - SENT   - PARTIAL   - PAID   - CANCELED 
     * @param {module:api/InvoicesApi~getAllInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesAllGet200Response}
     */
    this.getAllInvoices = function(offset, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getAllInvoices");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAllInvoices");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': offset,
        'limit': limit,
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesAllGet200Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoice operation.
     * @callback module:api/InvoicesApi~getInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Invoice Details
     * Get the details of a specific invoice.
     * @param {String} id The invoice number.
     * @param {module:api/InvoicesApi~getInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesGet200Response}
     */
    this.getInvoice = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoice");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesGet200Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the performCancelAction operation.
     * @callback module:api/InvoicesApi~performCancelActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel an Invoice
     * Cancel an invoice.
     * @param {String} id The invoice number.
     * @param {module:api/InvoicesApi~performCancelActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesPost201Response}
     */
    this.performCancelAction = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling performCancelAction");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesPost201Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices/{id}/cancelation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the performSendAction operation.
     * @callback module:api/InvoicesApi~performSendActionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send an Invoice
     * Send an invoice.
     * @param {String} id The invoice number.
     * @param {module:api/InvoicesApi~performSendActionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesPost201Response}
     */
    this.performSendAction = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling performSendAction");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesPost201Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices/{id}/delivery', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInvoice operation.
     * @callback module:api/InvoicesApi~updateInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoicingV2InvoicesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Invoice
     * Update an invoice.
     * @param {String} id The invoice number.
     * @param {module:model/UpdateInvoiceRequest} updateInvoiceRequest Updating the invoice does not resend the invoice automatically. You must resend the invoice separately.
     * @param {module:api/InvoicesApi~updateInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoicingV2InvoicesPost201Response}
     */
    this.updateInvoice = function(id, updateInvoiceRequest, callback) {
      var postBody = updateInvoiceRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateInvoice");
      }

      // verify the required parameter 'updateInvoiceRequest' is set
      if (updateInvoiceRequest === undefined || updateInvoiceRequest === null) {
        throw new Error("Missing the required parameter 'updateInvoiceRequest' when calling updateInvoice");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InvoicingV2InvoicesPost201Response;

      return this.apiClient.callApi(
        '/invoicing/v2/invoices/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));