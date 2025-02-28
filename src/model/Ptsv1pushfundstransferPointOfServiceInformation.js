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
    root.CyberSource.Ptsv1pushfundstransferPointOfServiceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferPointOfServiceInformation model module.
   * @module model/Ptsv1pushfundstransferPointOfServiceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferPointOfServiceInformation</code>.
   * @alias module:model/Ptsv1pushfundstransferPointOfServiceInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferPointOfServiceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferPointOfServiceInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferPointOfServiceInformation} The populated <code>Ptsv1pushfundstransferPointOfServiceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('terminalId')) {
        obj['terminalId'] = ApiClient.convertToType(data['terminalId'], 'String');
      }
      if (data.hasOwnProperty('catLevel')) {
        obj['catLevel'] = ApiClient.convertToType(data['catLevel'], 'Number');
      }
      if (data.hasOwnProperty('entryMode')) {
        obj['entryMode'] = ApiClient.convertToType(data['entryMode'], 'String');
      }
      if (data.hasOwnProperty('pinEntryCapability')) {
        obj['pinEntryCapability'] = ApiClient.convertToType(data['pinEntryCapability'], 'Number');
      }
      if (data.hasOwnProperty('terminalCapability')) {
        obj['terminalCapability'] = ApiClient.convertToType(data['terminalCapability'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  Visa Platform Connect A list of all possible values is stored in your CyberSource account. If terminal ID validation is enabled for your CyberSource account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact CyberSource Customer Support.   Used by Authorization Optional for the following processors. When you do not include this field in a request, the default value that is defined in your account is used.  Chase Paymentech Solutions: Optional field. If you include this field in your request, you must also include pointOfSaleInformation.catLevel. 
   * @member {String} terminalId
   */
  exports.prototype['terminalId'] = undefined;
  /**
   * Type of cardholder-activated terminal. Possible values:  - `1`: Automated dispensing machine - `2`: Self-service terminal - `3`: Limited amount terminal - `4`: In-flight commerce (IFC) terminal - `5`: Radio frequency device - `6`: Mobile acceptance terminal - `7`: Electronic cash register - `8`: E-commerce device at your location - `9`: Terminal or cash register that uses a dialup connection to connect to the transaction processing network  Chase Paymentech Solutions Only values 1, 2, and 3 are supported. Required if pointOfSaleInformation.terminalID is included in the request; otherwise, optional.  Visa Platform COnnect Values 1 through 6 are supported on CyberSource through VisaNet, but some acquirers do not support all six values. Optional field.  Nonnegative integer. 
   * @member {Number} catLevel
   */
  exports.prototype['catLevel'] = undefined;
  /**
   * Method of entering payment card information into the POS terminal. Possible values:  - `contact`: Read from direct contact with chip card. - `contactless`: Read from a contactless interface using chip data. - `keyed`: Manually keyed into POS terminal. This value is not supported on OmniPay Direct. - `msd`: Read from a contactless interface using magnetic stripe data (MSD). This value is not supported on OmniPay Direct. - `swiped`: Read from credit card magnetic stripe. The contact, contactless, and msd values are supported only for EMV transactions. 
   * @member {String} entryMode
   */
  exports.prototype['entryMode'] = undefined;
  /**
   * PIN Entry Capability - 0 Unknown. - 1 Indicates terminal can accept and forward online PINs. - 2 Indicates terminal cannot accept and forward online PINs. - 8 Terminal PIN pad down. - 9 Reserved for future use. 
   * @member {Number} pinEntryCapability
   */
  exports.prototype['pinEntryCapability'] = undefined;
  /**
   * integer [ 1 .. 5 ] POS terminal’s capability. Possible values:  - `1`: Terminal has a magnetic stripe reader only. - `2`: Terminal has a magnetic stripe reader and manual entry capability. - `3`: Terminal has manual entry capability only. - `4`: Terminal can read chip cards. - `5`: Terminal can read contactless chip cards; cannot use contact to read chip cards. For an EMV transaction, the value of this field must be 4 or 5.  Used by Authorization Required for the following processors: Chase Paymentech Solutions  Optional for the following processors: Visa Platform Connect 
   * @member {Number} terminalCapability
   */
  exports.prototype['terminalCapability'] = undefined;



  return exports;
}));


