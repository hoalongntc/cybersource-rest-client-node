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
    define(['ApiClient', 'model/Ptsv2paymentsPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsPointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2paymentsPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The Ptsv2paymentsPointOfSaleInformation model module.
   * @module model/Ptsv2paymentsPointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPointOfSaleInformation</code>.
   * @alias module:model/Ptsv2paymentsPointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;



























  };

  /**
   * Constructs a <code>Ptsv2paymentsPointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPointOfSaleInformation} The populated <code>Ptsv2paymentsPointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('terminalId')) {
        obj['terminalId'] = ApiClient.convertToType(data['terminalId'], 'String');
      }
      if (data.hasOwnProperty('terminalSerialNumber')) {
        obj['terminalSerialNumber'] = ApiClient.convertToType(data['terminalSerialNumber'], 'String');
      }
      if (data.hasOwnProperty('laneNumber')) {
        obj['laneNumber'] = ApiClient.convertToType(data['laneNumber'], 'String');
      }
      if (data.hasOwnProperty('catLevel')) {
        obj['catLevel'] = ApiClient.convertToType(data['catLevel'], 'Number');
      }
      if (data.hasOwnProperty('entryMode')) {
        obj['entryMode'] = ApiClient.convertToType(data['entryMode'], 'String');
      }
      if (data.hasOwnProperty('terminalCapability')) {
        obj['terminalCapability'] = ApiClient.convertToType(data['terminalCapability'], 'Number');
      }
      if (data.hasOwnProperty('operatingEnvironment')) {
        obj['operatingEnvironment'] = ApiClient.convertToType(data['operatingEnvironment'], 'String');
      }
      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2paymentsPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
      if (data.hasOwnProperty('amexCapnData')) {
        obj['amexCapnData'] = ApiClient.convertToType(data['amexCapnData'], 'String');
      }
      if (data.hasOwnProperty('trackData')) {
        obj['trackData'] = ApiClient.convertToType(data['trackData'], 'String');
      }
      if (data.hasOwnProperty('storeAndForwardIndicator')) {
        obj['storeAndForwardIndicator'] = ApiClient.convertToType(data['storeAndForwardIndicator'], 'String');
      }
      if (data.hasOwnProperty('cardholderVerificationMethod')) {
        obj['cardholderVerificationMethod'] = ApiClient.convertToType(data['cardholderVerificationMethod'], ['String']);
      }
      if (data.hasOwnProperty('terminalInputCapability')) {
        obj['terminalInputCapability'] = ApiClient.convertToType(data['terminalInputCapability'], ['String']);
      }
      if (data.hasOwnProperty('terminalCardCaptureCapability')) {
        obj['terminalCardCaptureCapability'] = ApiClient.convertToType(data['terminalCardCaptureCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalOutputCapability')) {
        obj['terminalOutputCapability'] = ApiClient.convertToType(data['terminalOutputCapability'], 'String');
      }
      if (data.hasOwnProperty('terminalPinCapability')) {
        obj['terminalPinCapability'] = ApiClient.convertToType(data['terminalPinCapability'], 'Number');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('pinBlockEncodingFormat')) {
        obj['pinBlockEncodingFormat'] = ApiClient.convertToType(data['pinBlockEncodingFormat'], 'Number');
      }
      if (data.hasOwnProperty('encryptedPin')) {
        obj['encryptedPin'] = ApiClient.convertToType(data['encryptedPin'], 'String');
      }
      if (data.hasOwnProperty('encryptedKeySerialNumber')) {
        obj['encryptedKeySerialNumber'] = ApiClient.convertToType(data['encryptedKeySerialNumber'], 'String');
      }
      if (data.hasOwnProperty('partnerSdkVersion')) {
        obj['partnerSdkVersion'] = ApiClient.convertToType(data['partnerSdkVersion'], 'String');
      }
      if (data.hasOwnProperty('emvApplicationIdentifierAndDedicatedFileName')) {
        obj['emvApplicationIdentifierAndDedicatedFileName'] = ApiClient.convertToType(data['emvApplicationIdentifierAndDedicatedFileName'], 'String');
      }
      if (data.hasOwnProperty('terminalCompliance')) {
        obj['terminalCompliance'] = ApiClient.convertToType(data['terminalCompliance'], 'String');
      }
      if (data.hasOwnProperty('isDedicatedHardwareTerminal')) {
        obj['isDedicatedHardwareTerminal'] = ApiClient.convertToType(data['isDedicatedHardwareTerminal'], 'String');
      }
      if (data.hasOwnProperty('terminalModel')) {
        obj['terminalModel'] = ApiClient.convertToType(data['terminalModel'], 'String');
      }
      if (data.hasOwnProperty('terminalMake')) {
        obj['terminalMake'] = ApiClient.convertToType(data['terminalMake'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  #### CyberSource through VisaNet A list of all possible values is stored in your CyberSource account. If terminal ID validation is enabled for your CyberSource account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact CyberSource Customer Support.  When you do not include this field in a request, CyberSource uses the default value that is defined in your CyberSource account.  #### FDC Nashville Global To have your account configured to support this field, contact CyberSource Customer Support. This value must be a value that FDC Nashville Global issued to you.  #### For Payouts This field is applicable for CyberSource through VisaNet.  #### GPX Identifier for the terminal at your retail location. A list of all possible values is stored in your account. If terminal ID validation is enabled for your account, the value you send for this field is validated against the list each time you include the field in a request. To enable or disable terminal ID validation, contact customer support.  When you do not include this field in a request, the default value that is defined in your account is used.  Optional for authorizations.  #### Used by **Authorization** Optional for the following processors. When you do not include this field in a request, the default value that is defined in your account is used.   - American Express Direct   - Credit Mutuel-CIC   - FDC Nashville Global   - SIX - Chase Paymentech Solutions: Optional field. If you include this field in your request, you must also include `pointOfSaleInformation.catLevel`. - FDMS Nashville: The default value that is defined in your account is used. - GPX - OmniPay Direct: Optional field.  For the following processors, this field is not used. - GPN - JCN Gateway - RBS WorldPay Atlanta - TSYS Acquiring Solutions - Worldpay VAP  #### Card Present reply Terminal identifier assigned by the acquirer. This value must be printed on the receipt. 
   * @member {String} terminalId
   */
  exports.prototype['terminalId'] = undefined;
  /**
   * Terminal serial number assigned by the hardware manufacturer. This value is provided by the client software that is installed on the POS terminal.  This value is not forwarded to the processor. Instead, the value is forwarded to the reporting functionality.  #### Used by **Authorization and Credit** Optional. This field is supported only by client software that is installed on your POS terminals for the following processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX 
   * @member {String} terminalSerialNumber
   */
  exports.prototype['terminalSerialNumber'] = undefined;
  /**
   * Identifier for an alternate terminal at your retail location. You define the value for this field.  This field is supported only for MasterCard transactions on FDC Nashville Global. Otherwise, this field is not used by all other processors. Use the `terminalId` field to identify the main terminal at your retail location. If your retail location has multiple terminals, use this `laneNumber` field to identify the terminal used for the transaction.  This field is a pass-through, which means that the value is not checked or modified in any way before sending it to the processor.  Optional field.  #### Card present reply messaging Identifier for an alternate terminal at your retail location. You defined the value for this field in the request message. This value must be printed on the receipt.  This field is supported only for MasterCard transactions on FDC Nashville Global. 
   * @member {String} laneNumber
   */
  exports.prototype['laneNumber'] = undefined;
  /**
   * Type of cardholder-activated terminal. Possible values:   - 1: Automated dispensing machine  - 2: Self-service terminal  - 3: Limited amount terminal  - 4: In-flight commerce (IFC) terminal  - 5: Radio frequency device  - 6: Mobile acceptance terminal  - 7: Electronic cash register  - 8: E-commerce device at your location  - 9: Terminal or cash register that uses a dialup connection to connect to the transaction processing network  #### Chase Paymentech Solutions Only values 1, 2, and 3 are supported.  Required if `pointOfSaleInformation.terminalID` is included in the request; otherwise, optional.  #### CyberSource through VisaNet Values 1 through 6 are supported on CyberSource through VisaNet, but some acquirers do not support all six values.  Optional field.  #### FDC Nashville Global Only values 7, 8, and 9 are supported.  Optional field for EMV transactions; otherwise, not used.  #### GPN Only values 6, 7, 8, and 9 are supported.  Required field.  #### JCN Gateway Only values 6, 7, 8, and 9 are supported.  Required field.  #### TSYS Acquiring Solutions Only value 6 is supported.  Required for transactions from mobile devices; otherwise, not used.  #### All other processors Not used.  Nonnegative integer. 
   * @member {Number} catLevel
   */
  exports.prototype['catLevel'] = undefined;
  /**
   * Method of entering payment card information into the POS terminal. Possible values:   - `contact`: Read from direct contact with chip card.  - `contactless`: Read from a contactless interface using chip data.  - `keyed`: Manually keyed into POS terminal. This value is not supported on OmniPay Direct.  - `msd`: Read from a contactless interface using magnetic stripe data (MSD). This value is not supported on OmniPay Direct.  - `swiped`: Read from credit card magnetic stripe.  The `contact`, `contactless`, and `msd` values are supported only for EMV transactions.  #### Used by **Authorization** Required field.  #### Card Present Card present information about EMV applies only to credit card processing and PIN debit processing. All other card present information applies only to credit card processing.  #### PIN debit Required for a PIN debit purchase and a PIN debit credit request. 
   * @member {String} entryMode
   */
  exports.prototype['entryMode'] = undefined;
  /**
   * POS terminal’s capability. Possible values:   - `1`: Terminal has a magnetic stripe reader only.  - `2`: Terminal has a magnetic stripe reader and manual entry capability.  - `3`: Terminal has manual entry capability only.  - `4`: Terminal can read chip cards.  - `5`: Terminal can read contactless chip cards; cannot use contact to read chip cards.  For an EMV transaction, the value of this field must be `4` or `5`.  #### PIN debit Required for PIN debit purchase and PIN debit credit request.  #### Used by **Authorization** Required for the following processors: - American Express Direct - Chase Paymentech Solutions - Credit Mutuel-CIC - FDC Nashville Global - FDMS Nashville - OmniPay Direct - SIX - Worldpay VAP  Optional for the following processors: - CyberSource through VisaNet - GPN - GPX - JCN Gateway - RBS WorldPay Atlanta - TSYS Acquiring Solutions 
   * @member {Number} terminalCapability
   */
  exports.prototype['terminalCapability'] = undefined;
  /**
   * Operating environment.  Possible values for all card types except Mastercard: - `0`: No terminal used or unknown environment. - `1`: On merchant premises, attended. - `2`: On merchant premises, unattended. Examples: oil, kiosks, self-checkout, mobile telephone, personal digital assistant (PDA). - `3`: Off merchant premises, attended. Examples: portable POS devices at trade shows, at service calls, or in taxis. - `4`: Off merchant premises, unattended. Examples: vending machines, home computer, mobile telephone, PDA. - `5`: On premises of cardholder, unattended. - `9`: Unknown delivery mode. - `S`: Electronic delivery of product. Examples: music, software, or eTickets that are downloaded over the internet. - `T`: Physical delivery of product. Examples: music or software that is delivered by mail or by a courier.  #### Possible values for Mastercard: - `2`: On merchant premises, unattended, or cardholder terminal. Examples: oil, kiosks, self-checkout, home computer, mobile telephone, personal digital assistant (PDA). Cardholder terminal is supported only for Mastercard transactions on CyberSource through VisaNet. - `4`: Off merchant premises, unattended, or cardholder terminal. Examples: vending machines, home computer, mobile telephone, PDA. Cardholder terminal is supported only for Mastercard transactions on CyberSource through VisaNet.  This field is supported only for American Express Direct and CyberSource through VisaNet. 
   * @member {String} operatingEnvironment
   */
  exports.prototype['operatingEnvironment'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;
  /**
   * Point-of-sale details for the transaction. This value is returned only for **American Express Direct**. CyberSource generates this value, which consists of a series of codes that identify terminal capability, security data, and specific conditions present at the time the transaction occurred. To comply with the CAPN requirements, this value must be included in all subsequent follow-on requests, such as captures and follow-on credits.  When you perform authorizations, captures, and credits through CyberSource, CyberSource passes this value from the authorization service to the subsequent services for you. However, when you perform authorizations through CyberSource and perform subsequent services through other financial institutions, you must ensure that your requests for captures and credits include this value.  For details, see `auth_pos_data` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} amexCapnData
   */
  exports.prototype['amexCapnData'] = undefined;
  /**
   * Card’s track 1 and 2 data. For all processors except FDMS Nashville, this value consists of one of the following:   - Track 1 data  - Track 2 data  - Data for both tracks 1 and 2  For FDMS Nashville, this value consists of one of the following:  - Track 1 data  - Data for both tracks 1 and 2  Example: %B4111111111111111^SMITH/JOHN ^1612101976110000868000000?;4111111111111111=16121019761186800000?  #### Used by **Authorization** Required for Chase Paymentech Solutions, Credit Mutuel-CIC, CyberSource through VisaNet, FDC Nashville Global, JCN Gateway, OmniPay Direct, and SIX if `pointOfSaleInformation.entryMode` is equal to one of these values: - `contact` - `contactless` - `msd` - `swiped` Otherwise, this field not used.  Required for all other processors if `pointOfSaleInformation.entryMode=swiped`; otherwise, this field is not used.  #### GPX This field only supports transactions from the following card types: - Visa - Mastercard - AMEX - Discover - Diners - JCB - Union Pay International  #### PIN debit Track 2 data from the debit card. The sentinels are required. Required field for a PIN debit purchase and a PIN debit credit. 
   * @member {String} trackData
   */
  exports.prototype['trackData'] = undefined;
  /**
   * When connectivity is unavailable, the client software that is installed on the POS terminal can store a transaction in its memory and send it for authorization when connectivity is restored. This value is provided by the client software that is installed on the POS terminal.  This value is not forwarded to the processor. Instead, the value is forwarded to the reporting functionality.  Possible values: - `Y`: Transaction was stored and then forwarded. - `N` (default): Transaction was not stored and then forwarded.  For authorizations and credits, this field is supported only on these processors: - American Express Direct - FDC Nashville Global - OmniPay Direct - SIX  Optional field. 
   * @member {String} storeAndForwardIndicator
   */
  exports.prototype['storeAndForwardIndicator'] = undefined;
  /**
   * @member {Array.<String>} cardholderVerificationMethod
   */
  exports.prototype['cardholderVerificationMethod'] = undefined;
  /**
   * @member {Array.<String>} terminalInputCapability
   */
  exports.prototype['terminalInputCapability'] = undefined;
  /**
   * Indicates whether the terminal can capture the card.  Possible values: - `1`: Terminal can capture card. - `0`: Terminal cannot capture card.  For authorizations and credits, this field is supported only by these processors: - American Express Direct - Credit Mutuel-CIC - OmniPay Direct  Optional field. 
   * @member {String} terminalCardCaptureCapability
   */
  exports.prototype['terminalCardCaptureCapability'] = undefined;
  /**
   * Indicates whether the terminal can print or display messages.  Possible values: - 1: Neither - 2: Print only - 3: Display only - 4: Print and display  This field is supported for authorizations and credits only on the following processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  Optional field. 
   * @member {String} terminalOutputCapability
   */
  exports.prototype['terminalOutputCapability'] = undefined;
  /**
   * Maximum PIN length that the terminal can capture.  Possible values: -  0: No PIN capture capability -  1: PIN capture capability unknown -  4: Four characters -  5: Five characters -  6: Six characters -  7: Seven characters -  8: Eight characters -  9: Nine characters - 10: Ten characters - 11: Eleven characters - 12: Twelve characters  This field is supported for authorizations and credits only on the following processors: - American Express Direct - Credit Mutuel-CIC - OmniPay Direct - SIX  Required field for authorization or credit of PIN transactions. 
   * @member {Number} terminalPinCapability
   */
  exports.prototype['terminalPinCapability'] = undefined;
  /**
   * Value created by the client software that uniquely identifies the POS device. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX. 
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * Format that is used to encode the PIN block. This value is provided by the client software that is installed on the POS terminal.  Possible values: - `0`: ISO 9564 format 0 - `1`: ISO 9564 format 1 - `2`: ISO 9564 format 2 - `3`: ISO 9564 format 3  #### Used by **Authorization, PIN Debit** - Required when the cardholder enters a PIN and the card cannot verify the PIN, which means that the issuer must verify the PIN. - Required for PIN debit credit or PIN debit purchase.  For authorizations, this field is supported only on these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  This field is also supported by processors that support chip and online PIN transactions. The following table lists the EMV Cards and Cardholder Verification Methods (CVMs) that these processors support:  | Processor | Chip and Offline PIN | Chip and Online PIN | Chip and Signature | | --- | --- | --- | --- | | American Express Direct | Yes | Yes | Yes | | Chase Paymentech Solutions | No | No | Yes | | Credit Mutuel-CIC | Yes | Yes | Yes | | CyberSource through VisaNet | Yes | No | Yes | | FDC Nashville Global | Yes | Yes | Yes | | GPN | No | No | Yes | | OmniPay Direct | Yes | No | Yes | | SIX | Yes | Yes | Yes |  #### GPX For chip and online PIN transactions for authorization, GPX supports the following EMV Cards and Cardholder Verification Methods (CVMs): - Chip and Offline PIN - Chip and Signature  For PIN Debit Purchase and Credit Service transactions, GPX supports the following EMV Cards and Cardholder Verification Methods (CVMs): - Chip and Online PIN 
   * @member {Number} pinBlockEncodingFormat
   */
  exports.prototype['pinBlockEncodingFormat'] = undefined;
  /**
   * Encrypted PIN.  This value is provided by the client software that is installed on the POS terminal.  #### Used by **Authorization, PIN Debit** Required when the cardholder enters a PIN and the card cannot verify the PIN, which means that the issuer must verify the PIN. Required for PIN debit credit or PIN debit purchase. Required for online PIN transactions.  For authorizations, this field is supported only on these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  This field is also used by processors that support chip and online PIN transactions. The following table lists the EMV Cards and Cardholder Verification Methods (CVMs) that these processors support:  | Processor | Chip and Offline PIN | Chip and Online PIN | Chip and Signature | | --- | --- | --- | --- | | American Express Direct | Yes | Yes | Yes | | Chase Paymentech Solutions | No | No | Yes | | Credit Mutuel-CIC | Yes | Yes | Yes | | CyberSource through VisaNet | Yes | No | Yes | | FDC Nashville Global | Yes | Yes | Yes | | GPN | No | No | Yes | | OmniPay Direct | Yes | No | Yes | | SIX | Yes | Yes | Yes | 
   * @member {String} encryptedPin
   */
  exports.prototype['encryptedPin'] = undefined;
  /**
   * Combination of the device's unique identifier and a transaction counter that is used in the process of decrypting the encrypted PIN. The entity that injected the PIN encryption keys into the terminal decrypts the encrypted PIN and creates this value.  For all terminals that are using derived unique key per transaction (DUKPT) encryption, this is generated as a single number within the terminal.  #### Used by **Authorization, PIN Debit** - Required when the cardholder enters a PIN and the card cannot verify the PIN, which means that the issuer must verify the PIN. - Required for PIN debit credit or PIN debit purchase. - Required for online PIN transactions  For authorizations, this field is supported only on these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  This field is also used by processors that support chip and online PIN transactions. The following table lists the EMV Cards and Cardholder Verification Methods (CVMs) that these processors support:  | Processor | Chip and Offline PIN | Chip and Online PIN | Chip and Signature | | --- | --- | --- | --- | | American Express Direct | Yes | Yes | Yes | | Chase Paymentech Solutions | No | No | Yes | | Credit Mutuel-CIC | Yes | Yes | Yes | | CyberSource through VisaNet | Yes | No | Yes | | FDC Nashville Global | Yes | Yes | Yes | | GPN | No | No | Yes | | OmniPay Direct | Yes | No | Yes | | SIX | Yes | Yes | Yes | 
   * @member {String} encryptedKeySerialNumber
   */
  exports.prototype['encryptedKeySerialNumber'] = undefined;
  /**
   * Version of the software installed on the POS terminal. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX.  For authorizations and credits, this field is supported only on these processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX 
   * @member {String} partnerSdkVersion
   */
  exports.prototype['partnerSdkVersion'] = undefined;
  /**
   * This 32 byte length-maximum EBCDIC-K value is used to identify which chip application was performed between the terminal and the chip product. The included values are the Application Identifier (AID) and the Dedicated File (DF) name. It is available to early- or full-option VSDC issuers. Only single byte Katakana characters that can map to the EBCDIC-K table expected in the name. 
   * @member {String} emvApplicationIdentifierAndDedicatedFileName
   */
  exports.prototype['emvApplicationIdentifierAndDedicatedFileName'] = undefined;
  /**
   * Flag that indicates whether the terminal is compliant with standards mandated by the Reserve Bank of India for card-present domestic transactions in India.  Format: - First character indicates whether the terminal supports terminal line encryption (TLE). Possible values:   - 1: Not certified   - 2: Certified - Second character indicates whether the terminal supports Unique Key Per Transaction (UKPT) and Derived Unique Key Per Transaction (DUKPT). Possible values:   - 1: Not certified   - 2: Certified  **Example** `21` indicates that the terminal supports TLE but does not support UKPT/DUKPT.  You and the terminal vendors are responsible for terminal certification. If you have questions, contact your acquirer.  This field is supported only for Mastercard transactions on CyberSource through VisaNet.  **Note** On CyberSource through VisaNet, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 92-93 - Field: Mastercard Terminal Compliance Indicator  The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment networks.  #### Used by **Authorization** Required for card-present transactions in India. Otherwise, not used. 
   * @member {String} terminalCompliance
   */
  exports.prototype['terminalCompliance'] = undefined;
  /**
   * Type of mPOS device. Possible values: - 0: Dongle - 1: Phone or tablet  This optional field is supported only for Mastercard transactions on CyberSource through VisaNet.  The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 141 - Field: Mastercard mPOS Transaction  The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment networks. 
   * @member {String} isDedicatedHardwareTerminal
   */
  exports.prototype['isDedicatedHardwareTerminal'] = undefined;
  /**
   * This is the model name of the reader which is used to accept the payment. Possible values:  - E3555  - P400  - A920 
   * @member {String} terminalModel
   */
  exports.prototype['terminalModel'] = undefined;
  /**
   * This is the manufacturer name of the reader which is used to accept the payment. Possible values:  - PAX  - Verifone  - Ingenico 
   * @member {String} terminalMake
   */
  exports.prototype['terminalMake'] = undefined;



  return exports;
}));


