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
    root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor model module.
   * @module model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor</code>.
   * @alias module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor} The populated <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformationMerchantDescriptor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alternateName')) {
        obj['alternateName'] = ApiClient.convertToType(data['alternateName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Alternate contact information for your business,such as an email address or URL. This value might be displayed on the cardholder’s statement. When you do not include this value in your capture or credit request, CyberSource uses the merchant URL from your CyberSource account. Important This value must consist of English characters 
   * @member {String} alternateName
   */
  exports.prototype['alternateName'] = undefined;



  return exports;
}));

