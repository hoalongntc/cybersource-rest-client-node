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
    define(['ApiClient', 'model/InlineResponse2006OrderInformationBillTo', 'model/InlineResponse200OrderInformationAmountDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2006OrderInformationBillTo'), require('./InlineResponse200OrderInformationAmountDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2006OrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2006OrderInformationBillTo, root.CyberSource.InlineResponse200OrderInformationAmountDetails);
  }
}(this, function(ApiClient, InlineResponse2006OrderInformationBillTo, InlineResponse200OrderInformationAmountDetails) {
  'use strict';




  /**
   * The InlineResponse2006OrderInformation model module.
   * @module model/InlineResponse2006OrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2006OrderInformation</code>.
   * @alias module:model/InlineResponse2006OrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2006OrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006OrderInformation} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006OrderInformation} The populated <code>InlineResponse2006OrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = InlineResponse200OrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = InlineResponse2006OrderInformationBillTo.constructFromObject(data['billTo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse200OrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/InlineResponse2006OrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;



  return exports;
}));


