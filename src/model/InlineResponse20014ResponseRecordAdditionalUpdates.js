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
    root.CyberSource.InlineResponse20014ResponseRecordAdditionalUpdates = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20014ResponseRecordAdditionalUpdates model module.
   * @module model/InlineResponse20014ResponseRecordAdditionalUpdates
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse20014ResponseRecordAdditionalUpdates</code>.
   * @alias module:model/InlineResponse20014ResponseRecordAdditionalUpdates
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponse20014ResponseRecordAdditionalUpdates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014ResponseRecordAdditionalUpdates} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014ResponseRecordAdditionalUpdates} The populated <code>InlineResponse20014ResponseRecordAdditionalUpdates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('paymentInstrumentId')) {
        obj['paymentInstrumentId'] = ApiClient.convertToType(data['paymentInstrumentId'], 'String');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * @member {String} paymentInstrumentId
   */
  exports.prototype['paymentInstrumentId'] = undefined;
  /**
   * @member {String} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * Valid Values:   * ACTIVE   * CLOSED 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


