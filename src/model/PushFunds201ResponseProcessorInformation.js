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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PushFunds201ResponseProcessorInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponseProcessorInformation model module.
   * @module model/PushFunds201ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseProcessorInformation</code>.
   * @alias module:model/PushFunds201ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PushFunds201ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseProcessorInformation} The populated <code>PushFunds201ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'Number');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
      if (data.hasOwnProperty('systemTraceAuditNumber')) {
        obj['systemTraceAuditNumber'] = ApiClient.convertToType(data['systemTraceAuditNumber'], 'String');
      }
      if (data.hasOwnProperty('responseCodeSource')) {
        obj['responseCodeSource'] = ApiClient.convertToType(data['responseCodeSource'], 'String');
      }
      if (data.hasOwnProperty('retrievalReferenceNumber')) {
        obj['retrievalReferenceNumber'] = ApiClient.convertToType(data['retrievalReferenceNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Network transaction identifier (TID). This value can be used to identify a specific transaction when you are discussing the transaction with your processor. 
   * @member {Number} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * Transaction status from the processor. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * Issuer-generated approval code for the transaction. 
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;
  /**
   * System audit number. Returned by authorization and incremental authorization services.  Visa Platform Connect  System trace number that must be printed on the customer’s receipt. 
   * @member {String} systemTraceAuditNumber
   */
  exports.prototype['systemTraceAuditNumber'] = undefined;
  /**
   * Used by Visa only and contains the response source/reason code that identifies the source of the response decision. 
   * @member {String} responseCodeSource
   */
  exports.prototype['responseCodeSource'] = undefined;
  /**
   * Unique reference number returned by the processor that identifies the transaction at the network.  Supported by Mastercard Send 
   * @member {String} retrievalReferenceNumber
   */
  exports.prototype['retrievalReferenceNumber'] = undefined;



  return exports;
}));


