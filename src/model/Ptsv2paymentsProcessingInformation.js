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
    define(['ApiClient', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptions', 'model/Ptsv2paymentsProcessingInformationBankTransferOptions', 'model/Ptsv2paymentsProcessingInformationCaptureOptions', 'model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer', 'model/Ptsv2paymentsProcessingInformationJapanPaymentOptions', 'model/Ptsv2paymentsProcessingInformationLoanOptions', 'model/Ptsv2paymentsProcessingInformationPurchaseOptions', 'model/Ptsv2paymentsProcessingInformationRecurringOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsProcessingInformationAuthorizationOptions'), require('./Ptsv2paymentsProcessingInformationBankTransferOptions'), require('./Ptsv2paymentsProcessingInformationCaptureOptions'), require('./Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer'), require('./Ptsv2paymentsProcessingInformationJapanPaymentOptions'), require('./Ptsv2paymentsProcessingInformationLoanOptions'), require('./Ptsv2paymentsProcessingInformationPurchaseOptions'), require('./Ptsv2paymentsProcessingInformationRecurringOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptions, root.CyberSource.Ptsv2paymentsProcessingInformationBankTransferOptions, root.CyberSource.Ptsv2paymentsProcessingInformationCaptureOptions, root.CyberSource.Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer, root.CyberSource.Ptsv2paymentsProcessingInformationJapanPaymentOptions, root.CyberSource.Ptsv2paymentsProcessingInformationLoanOptions, root.CyberSource.Ptsv2paymentsProcessingInformationPurchaseOptions, root.CyberSource.Ptsv2paymentsProcessingInformationRecurringOptions);
  }
}(this, function(ApiClient, Ptsv2paymentsProcessingInformationAuthorizationOptions, Ptsv2paymentsProcessingInformationBankTransferOptions, Ptsv2paymentsProcessingInformationCaptureOptions, Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer, Ptsv2paymentsProcessingInformationJapanPaymentOptions, Ptsv2paymentsProcessingInformationLoanOptions, Ptsv2paymentsProcessingInformationPurchaseOptions, Ptsv2paymentsProcessingInformationRecurringOptions) {
  'use strict';




  /**
   * The Ptsv2paymentsProcessingInformation model module.
   * @module model/Ptsv2paymentsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsProcessingInformation</code>.
   * @alias module:model/Ptsv2paymentsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;
































  };

  /**
   * Constructs a <code>Ptsv2paymentsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsProcessingInformation} The populated <code>Ptsv2paymentsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionList')) {
        obj['actionList'] = ApiClient.convertToType(data['actionList'], ['String']);
      }
      if (data.hasOwnProperty('enableEscrowOption')) {
        obj['enableEscrowOption'] = ApiClient.convertToType(data['enableEscrowOption'], 'Boolean');
      }
      if (data.hasOwnProperty('actionTokenTypes')) {
        obj['actionTokenTypes'] = ApiClient.convertToType(data['actionTokenTypes'], ['String']);
      }
      if (data.hasOwnProperty('capture')) {
        obj['capture'] = ApiClient.convertToType(data['capture'], 'Boolean');
      }
      if (data.hasOwnProperty('processorId')) {
        obj['processorId'] = ApiClient.convertToType(data['processorId'], 'String');
      }
      if (data.hasOwnProperty('businessApplicationId')) {
        obj['businessApplicationId'] = ApiClient.convertToType(data['businessApplicationId'], 'String');
      }
      if (data.hasOwnProperty('commerceIndicator')) {
        obj['commerceIndicator'] = ApiClient.convertToType(data['commerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('commerceIndicatorLabel')) {
        obj['commerceIndicatorLabel'] = ApiClient.convertToType(data['commerceIndicatorLabel'], 'String');
      }
      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('purchaseLevel')) {
        obj['purchaseLevel'] = ApiClient.convertToType(data['purchaseLevel'], 'String');
      }
      if (data.hasOwnProperty('paymentId')) {
        obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
      }
      if (data.hasOwnProperty('reportGroup')) {
        obj['reportGroup'] = ApiClient.convertToType(data['reportGroup'], 'String');
      }
      if (data.hasOwnProperty('visaCheckoutId')) {
        obj['visaCheckoutId'] = ApiClient.convertToType(data['visaCheckoutId'], 'String');
      }
      if (data.hasOwnProperty('industryDataType')) {
        obj['industryDataType'] = ApiClient.convertToType(data['industryDataType'], 'String');
      }
      if (data.hasOwnProperty('authorizationOptions')) {
        obj['authorizationOptions'] = Ptsv2paymentsProcessingInformationAuthorizationOptions.constructFromObject(data['authorizationOptions']);
      }
      if (data.hasOwnProperty('captureOptions')) {
        obj['captureOptions'] = Ptsv2paymentsProcessingInformationCaptureOptions.constructFromObject(data['captureOptions']);
      }
      if (data.hasOwnProperty('recurringOptions')) {
        obj['recurringOptions'] = Ptsv2paymentsProcessingInformationRecurringOptions.constructFromObject(data['recurringOptions']);
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = Ptsv2paymentsProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
      if (data.hasOwnProperty('purchaseOptions')) {
        obj['purchaseOptions'] = Ptsv2paymentsProcessingInformationPurchaseOptions.constructFromObject(data['purchaseOptions']);
      }
      if (data.hasOwnProperty('electronicBenefitsTransfer')) {
        obj['electronicBenefitsTransfer'] = Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer.constructFromObject(data['electronicBenefitsTransfer']);
      }
      if (data.hasOwnProperty('loanOptions')) {
        obj['loanOptions'] = Ptsv2paymentsProcessingInformationLoanOptions.constructFromObject(data['loanOptions']);
      }
      if (data.hasOwnProperty('walletType')) {
        obj['walletType'] = ApiClient.convertToType(data['walletType'], 'String');
      }
      if (data.hasOwnProperty('nationalNetDomesticData')) {
        obj['nationalNetDomesticData'] = ApiClient.convertToType(data['nationalNetDomesticData'], 'String');
      }
      if (data.hasOwnProperty('japanPaymentOptions')) {
        obj['japanPaymentOptions'] = Ptsv2paymentsProcessingInformationJapanPaymentOptions.constructFromObject(data['japanPaymentOptions']);
      }
      if (data.hasOwnProperty('mobileRemotePaymentType')) {
        obj['mobileRemotePaymentType'] = ApiClient.convertToType(data['mobileRemotePaymentType'], 'String');
      }
      if (data.hasOwnProperty('extendedCreditTotalCount')) {
        obj['extendedCreditTotalCount'] = ApiClient.convertToType(data['extendedCreditTotalCount'], 'String');
      }
      if (data.hasOwnProperty('networkRoutingOrder')) {
        obj['networkRoutingOrder'] = ApiClient.convertToType(data['networkRoutingOrder'], 'String');
      }
      if (data.hasOwnProperty('payByPointsIndicator')) {
        obj['payByPointsIndicator'] = ApiClient.convertToType(data['payByPointsIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('isReturnAuthRecordEnabled')) {
        obj['isReturnAuthRecordEnabled'] = ApiClient.convertToType(data['isReturnAuthRecordEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Array of actions (one or more) to be included in the payment to invoke bundled services along with payment.  Possible values are one or more of follows:   - `DECISION_SKIP`: Use this when you want to skip Decision Manager service(s).   - `TOKEN_CREATE`: Use this when you want to create a token from the card/bank data in your payment request.   - `CONSUMER_AUTHENTICATION`: Use this when you want to check if a card is enrolled in Payer Authentioncation along with your payment request.   - `VALIDATE_CONSUMER_AUTHENTICATION`: Use this after you acquire a Payer Authentioncation result that needs to be included for your payment request.    - `AP_INITIATE`: Use this when Alternative Payment Initiate service is requested. 
   * @member {Array.<String>} actionList
   */
  exports.prototype['actionList'] = undefined;
  /**
   * Indicates whether to use the customer’s escrow agreement. Possible values: - `true`: yes, use the customer’s escrow agreement. - `false`: no, do not use the customer’s escrow agreement.  
   * @member {Boolean} enableEscrowOption
   */
  exports.prototype['enableEscrowOption'] = undefined;
  /**
   * CyberSource tokens types you are performing a create on. If not supplied the default token type for the merchants token vault will be used.  Valid values: - customer - paymentInstrument - instrumentIdentifier - shippingAddress 
   * @member {Array.<String>} actionTokenTypes
   */
  exports.prototype['actionTokenTypes'] = undefined;
  /**
   * Indicates whether to also include a capture  in the submitted authorization request or not.  Possible values: - `true`: Include a capture with an authorization request. - `false`: (default) Do not include a capture with an authorization request.  #### Used by **Authorization and Capture** Optional field. 
   * @member {Boolean} capture
   * @default false
   */
  exports.prototype['capture'] = false;
  /**
   * Value that identifies the processor/acquirer to use for the transaction. This value is supported only for **CyberSource through VisaNet**.  Contact CyberSource Customer Support to get the value for this field. 
   * @member {String} processorId
   */
  exports.prototype['processorId'] = undefined;
  /**
   * Payouts transaction type. Required for OCT transactions. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. **Note** When the request includes this field, this value overrides the information in your CyberSource account.  For valid values, see the `invoiceHeader_businessApplicationID` field description in [Payouts Using the Simple Order API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SO/Payouts_SO_API.pdf) 
   * @member {String} businessApplicationId
   */
  exports.prototype['businessApplicationId'] = undefined;
  /**
   * Type of transaction. Some payment card companies use this information when determining discount rates.  #### Used by **Authorization** Required payer authentication transactions; otherwise, optional. **Credit** Required for standalone credits on Chase Paymentech solutions; otherwise, optional.  The list of valid values in this field depends on your processor. See Appendix I, \"Commerce Indicators,\" on page 441 of the Cybersource Credit Card Guide.  #### Ingenico ePayments When you omit this field for Ingenico ePayments, the processor uses the default transaction type they have on file for you instead of the default value (listed in Appendix I, \"Commerce Indicators,\" on page 441.)  #### Payer Authentication Transactions For the possible values and requirements, see \"Payer Authentication,\" page 195.  #### Card Present You must set this field to `retail`. This field is required for a card-present transaction. Note that this should ONLY be used when the cardholder and card are present at the time of the transaction. For all keyed transactions originated from a POS terminal where the cardholder and card are not present, commerceIndicator should be submitted as “moto\" 
   * @member {String} commerceIndicator
   */
  exports.prototype['commerceIndicator'] = undefined;
  /**
   * Type of transaction. Some payment card companies use this information when determining discount rates.  #### Used by **Authorization** Required payer authentication transactions; otherwise, optional. **Credit** Required for standalone credits on Chase Paymentech solutions; otherwise, optional.  The list of valid values in this field depends on your processor. See Appendix I, \"Commerce Indicators,\" on page 441 of the Cybersource Credit Card Guide.  #### Ingenico ePayments When you omit this field for Ingenico ePayments, the processor uses the default transaction type they have on file for you instead of the default value (listed in Appendix I, \"Commerce Indicators,\" on page 441.)  #### Payer Authentication Transactions For the possible values and requirements, see \"Payer Authentication,\" page 195.  #### Card Present You must set this field to `retail`. This field is required for a card-present transaction. Note that this should ONLY be used when the cardholder and card are present at the time of the transaction. For all keyed transactions originated from a POS terminal where the cardholder and card are not present, commerceIndicator should be submitted as “moto\" 
   * @member {String} commerceIndicatorLabel
   */
  exports.prototype['commerceIndicatorLabel'] = undefined;
  /**
   * Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/VCO_SCMP_API/html/)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. For details, see \"Masterpass\" in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay.  - `013`: Cybersource P2PE Decryption  - `014`: Mastercard credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `015`: Visa credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `027`: Click to Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22). 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:  - Partial authorizations - Split shipments  For details, see `link_to_request` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * Set this field to 3 to indicate that the request includes Level III data.
   * @member {String} purchaseLevel
   */
  exports.prototype['purchaseLevel'] = undefined;
  /**
   * This field is to accept the id of credit/capture in the body of L1 requests so the type of void can be identified and processed correctly downstream.
   * @member {String} paymentId
   */
  exports.prototype['paymentId'] = undefined;
  /**
   * Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  For details, see `report_group` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} reportGroup
   */
  exports.prototype['reportGroup'] = undefined;
  /**
   * Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field. 
   * @member {String} visaCheckoutId
   */
  exports.prototype['visaCheckoutId'] = undefined;
  /**
   * Indicates that the transaction includes industry-specific data.  Possible Values: - `airline` - `restaurant` - `lodging` - `auto_rental` - `transit` - `healthcare_medical` - `healthcare_transit` - `transit`  #### Card Present, Airlines and Auto Rental You must set this field to `airline` in order for airline data to be sent to the processor. For example, if this field is not set to `airline` or is not included in the request, no airline data is sent to the processor.  You must set this field to `restaurant` in order for restaurant data to be sent to the processor. When this field is not set to `restaurant` or is not included in the request, no restaurant data is sent to the processor.  You must set this field to `auto_rental` in order for auto rental data to be sent to the processor. For example, if this field is not set to `auto_rental` or is not included in the request, no auto rental data is sent to the processor.  Restaurant data is supported only on CyberSource through VisaNet. 
   * @member {String} industryDataType
   */
  exports.prototype['industryDataType'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions} authorizationOptions
   */
  exports.prototype['authorizationOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationCaptureOptions} captureOptions
   */
  exports.prototype['captureOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationRecurringOptions} recurringOptions
   */
  exports.prototype['recurringOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationPurchaseOptions} purchaseOptions
   */
  exports.prototype['purchaseOptions'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer} electronicBenefitsTransfer
   */
  exports.prototype['electronicBenefitsTransfer'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationLoanOptions} loanOptions
   */
  exports.prototype['loanOptions'] = undefined;
  /**
   * This field carries the wallet type in authorization requests and credit requests. Possible value are: - `101`: Masterpass remote payment. The customer created the wallet by manually interacting with a customer-controlled device such as a computer, tablet, or phone. This value is supported only for Masterpass transactions on Chase Paymentech Solutions and CyberSource through VisaNet. - `102`: Masterpass remote near field communication (NFC) payment. The customer created the wallet by tapping a PayPass card or customer-controlled device at a contactless card reader. This value is supported only for card-present Masterpass transactions on CyberSource through VisaNet. - `103`: Masterpass Apple Pay payment. The payment was made with a combination of Masterpass and Apple Pay. This value is supported only for Masterpass Apple Pay transactions on CyberSource through VisaNet. - `216`: Masterpass Google Pay payment. The payment was made with a combination of Masterpass and Google Pay. This value is supported only for Masterpass Google Pay transactions on CyberSource through VisaNet. - `217`: Masterpass Samsung Pay payment. The payment was made with a combination of Masterpass and Samsung Pay. This value is supported only for Masterpass Samsung Pay transactions on CyberSource through VisaNet. - `SDW`: Staged digital wallet. An issuer or operator created the wallet. This value is supported only for Masterpass transactions on Chase Paymentech Solutions. - `VCIND`: Visa Checkout payment. This value is supported only on CyberSource through VisaNet, FDC Compass, FDC Nashville Global, FDI Australia, and TSYS Acquiring Solutions. See Getting Started with Visa Checkout. For Visa Checkout transactions, the way CyberSource processes the value for this field depends on the processor. See the Visa Checkout section below. For all other values, this field is a passthrough; therefore, CyberSource does not verify the value or modify it in any way before sending it to the processor. Masterpass (101, 102, 103, 216, and 217): The Masterpass platform generates the wallet type value and passes it to you along with the customer’s checkout information.  Visa Checkout: This field is optional for Visa Checkout authorizations on FDI Australia. For all other processors, this field is required for Visa Checkout authorizations. For Visa Checkout transactions on the following processors, CyberSource sends the value that the processor expects for this field:FDC Compass,FDC Nashville Global,FDI Australia,TSYS Acquiring Solutions For all other processors, this field is a passthrough; therefore, CyberSource does not verify the value or modify it in any way before sending it to the processor. For incremental authorizations, this field is supported only for Mastercard and the supported values are 101 and 102. Payment card companies can introduce new values without notice. Your order management system should be able to process new values without problems.  CyberSource through VisaNet When the value for this field is 101, 102, 103, 216, or 217, it corresponds to the following data in the TC 33 capture file5: Record: CP01 TCR6, Position: 88-90,  Field: Mastercard Wallet Identifier. When the value for this field is VCIND, it corresponds to the following data in the TC 33 capture file5: Record: CP01 TCR8, Position: 72-76, Field: Agent Unique ID. 
   * @member {String} walletType
   */
  exports.prototype['walletType'] = undefined;
  /**
   * Supplementary domestic transaction information provided by the acquirer for National Net Settlement Service (NNSS) transactions. NNSS is a settlement service that Visa provides. For transactions on CyberSource through VisaNet in countries that subscribe to NNSS: VisaNet clears transactions; VisaNet transfers funds to the acquirer after deducting processing fees and interchange fees. VisaNet settles transactions in the local pricing currency through a local financial institution. This field is supported only on CyberSource through VisaNet for domestic data in Colombia 
   * @member {String} nationalNetDomesticData
   */
  exports.prototype['nationalNetDomesticData'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsProcessingInformationJapanPaymentOptions} japanPaymentOptions
   */
  exports.prototype['japanPaymentOptions'] = undefined;
  /**
   * Type of payment initiated from a cardholder's mobile device. Possible values: - `1` :  Consumer-initiated remote purchase, face-to-face - `2` :  Consumer-initiated remote purchase, e-commerce - `3` :  Consumer-initiated remote purchase, mail order / telephone order - `4` :  Consumer-initiated bill pay - `5` :  Consumer-initiated top up - `6` :  Consumer-initiated cash out - `7` :  ATM triggered or agent-initiated cash out - `8` :  Merchant-initiated remote purchase, face-to-face - `9` :  Merchant-initiated remote purchase, e-commerce  This field is supported only for Mastercard transactions on CyberSource through VisaNet.  Optional field.  **Note** On CyberSource through VisaNet, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 94 - Field: Mastercard Mobile Remote Payment Program Indicator  The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment networks. 
   * @member {String} mobileRemotePaymentType
   */
  exports.prototype['mobileRemotePaymentType'] = undefined;
  /**
   * A private national-use field submitted by acquirers and issuers in South Africa for South Africa-domestic (intra-country) authorizations and financial requests. Values for this field are 00 through 99. 
   * @member {String} extendedCreditTotalCount
   */
  exports.prototype['extendedCreditTotalCount'] = undefined;
  /**
   * On PIN Debit Gateways: This U.S.-only field is optionally used by  participants (merchants and acquirers) to specify the network access priority. VisaNet checks to determine if there are issuer routing preferences for any of the networks specified by the sharing group code. If an issuer preference exists for one of the specified debit networks, VisaNet makes a routing selection based on the issuer’s preference. If an issuer preference exists for more than one of the specified debit networks, or if no issuer preference exists, VisaNet makes a selection based on the acquirer’s routing priorities.  #### PIN debit Priority order of the networks through which he transaction will be routed. Set this value to a series of one-character network codes in your preferred order. This is a list of the network codes:  | Network | Code | | --- | --- | | Accel | E | | AFFN | U | | Alaska Option | 3 | | CU24 | C | | Interlink | G | | Maestro | 8 | | NETS | P | | NYCE | F | | Pulse | H | | Shazam | 7 | | Star | M | | Visa | V |  For example, if the Star network is your first preference and Pulse is your second preference, set this field to a value of `MH`.  When you do not include this value in your PIN debit request, the list of network codes from your account is used. **Note** This field is supported only for businesses located in the U.S.  Optional field for PIN debit credit or PIN debit purchase. 
   * @member {String} networkRoutingOrder
   */
  exports.prototype['networkRoutingOrder'] = undefined;
  /**
   * Flag that indicates if the transaction is pay by points transaction true: Transaction uses loyalty points false: Transaction does not use loyalty points Default: false 
   * @member {Boolean} payByPointsIndicator
   */
  exports.prototype['payByPointsIndicator'] = undefined;
  /**
   * Flag that indicates the functionality we are having for merchants for which auth is done through Cybersource but settlement is done by themselves. true: functionality is supported. Processor should send raw processor auth response to Merchant. false: functionality is not supported. Default: false 
   * @member {Boolean} isReturnAuthRecordEnabled
   */
  exports.prototype['isReturnAuthRecordEnabled'] = undefined;



  return exports;
}));


