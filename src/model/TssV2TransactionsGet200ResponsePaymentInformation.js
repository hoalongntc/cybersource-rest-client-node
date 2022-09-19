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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument', 'model/PtsV2PaymentsPost201ResponseTokenInformationShippingAddress', 'model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures', 'model/TssV2TransactionsGet200ResponsePaymentInformationBank', 'model/TssV2TransactionsGet200ResponsePaymentInformationCard', 'model/TssV2TransactionsGet200ResponsePaymentInformationCustomer', 'model/TssV2TransactionsGet200ResponsePaymentInformationFluidData', 'model/TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier', 'model/TssV2TransactionsGet200ResponsePaymentInformationInvoice', 'model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument'), require('./PtsV2PaymentsPost201ResponseTokenInformationShippingAddress'), require('./TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures'), require('./TssV2TransactionsGet200ResponsePaymentInformationBank'), require('./TssV2TransactionsGet200ResponsePaymentInformationCard'), require('./TssV2TransactionsGet200ResponsePaymentInformationCustomer'), require('./TssV2TransactionsGet200ResponsePaymentInformationFluidData'), require('./TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier'), require('./TssV2TransactionsGet200ResponsePaymentInformationInvoice'), require('./TssV2TransactionsGet200ResponsePaymentInformationPaymentType'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument, root.CyberSource.PtsV2PaymentsPost201ResponseTokenInformationShippingAddress, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCard, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationCustomer, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationFluidData, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationInvoice, root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationPaymentType);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument, PtsV2PaymentsPost201ResponseTokenInformationShippingAddress, TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures, TssV2TransactionsGet200ResponsePaymentInformationBank, TssV2TransactionsGet200ResponsePaymentInformationCard, TssV2TransactionsGet200ResponsePaymentInformationCustomer, TssV2TransactionsGet200ResponsePaymentInformationFluidData, TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier, TssV2TransactionsGet200ResponsePaymentInformationInvoice, TssV2TransactionsGet200ResponsePaymentInformationPaymentType) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformation model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformation} The populated <code>TssV2TransactionsGet200ResponsePaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = TssV2TransactionsGet200ResponsePaymentInformationPaymentType.constructFromObject(data['paymentType']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = TssV2TransactionsGet200ResponsePaymentInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = TssV2TransactionsGet200ResponsePaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('invoice')) {
        obj['invoice'] = TssV2TransactionsGet200ResponsePaymentInformationInvoice.constructFromObject(data['invoice']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = TssV2TransactionsGet200ResponsePaymentInformationBank.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('accountFeatures')) {
        obj['accountFeatures'] = TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures.constructFromObject(data['accountFeatures']);
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = PtsV2PaymentsPost201ResponseTokenInformationShippingAddress.constructFromObject(data['shippingAddress']);
      }
      if (data.hasOwnProperty('fluidData')) {
        obj['fluidData'] = TssV2TransactionsGet200ResponsePaymentInformationFluidData.constructFromObject(data['fluidData']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationInvoice} invoice
   */
  exports.prototype['invoice'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures} accountFeatures
   */
  exports.prototype['accountFeatures'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseTokenInformationShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponsePaymentInformationFluidData} fluidData
   */
  exports.prototype['fluidData'] = undefined;



  return exports;
}));


