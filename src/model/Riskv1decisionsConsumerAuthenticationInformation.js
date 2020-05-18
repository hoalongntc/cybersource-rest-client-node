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
    define(['ApiClient', 'model/Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1decisionsConsumerAuthenticationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication);
  }
}(this, function(ApiClient, Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication) {
  'use strict';




  /**
   * The Riskv1decisionsConsumerAuthenticationInformation model module.
   * @module model/Riskv1decisionsConsumerAuthenticationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsConsumerAuthenticationInformation</code>.
   * @alias module:model/Riskv1decisionsConsumerAuthenticationInformation
   * @class
   */
  var exports = function() {
    var _this = this;








































  };

  /**
   * Constructs a <code>Riskv1decisionsConsumerAuthenticationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsConsumerAuthenticationInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsConsumerAuthenticationInformation} The populated <code>Riskv1decisionsConsumerAuthenticationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('strongAuthentication')) {
        obj['strongAuthentication'] = Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication.constructFromObject(data['strongAuthentication']);
      }
      if (data.hasOwnProperty('authenticationType')) {
        obj['authenticationType'] = ApiClient.convertToType(data['authenticationType'], 'String');
      }
      if (data.hasOwnProperty('acsWindowSize')) {
        obj['acsWindowSize'] = ApiClient.convertToType(data['acsWindowSize'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationData')) {
        obj['alternateAuthenticationData'] = ApiClient.convertToType(data['alternateAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationDate')) {
        obj['alternateAuthenticationDate'] = ApiClient.convertToType(data['alternateAuthenticationDate'], 'String');
      }
      if (data.hasOwnProperty('alternateAuthenticationMethod')) {
        obj['alternateAuthenticationMethod'] = ApiClient.convertToType(data['alternateAuthenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('authenticationDate')) {
        obj['authenticationDate'] = ApiClient.convertToType(data['authenticationDate'], 'String');
      }
      if (data.hasOwnProperty('authenticationTransactionId')) {
        obj['authenticationTransactionId'] = ApiClient.convertToType(data['authenticationTransactionId'], 'String');
      }
      if (data.hasOwnProperty('challengeCancelCode')) {
        obj['challengeCancelCode'] = ApiClient.convertToType(data['challengeCancelCode'], 'String');
      }
      if (data.hasOwnProperty('challengeCode')) {
        obj['challengeCode'] = ApiClient.convertToType(data['challengeCode'], 'String');
      }
      if (data.hasOwnProperty('challengeStatus')) {
        obj['challengeStatus'] = ApiClient.convertToType(data['challengeStatus'], 'String');
      }
      if (data.hasOwnProperty('customerCardAlias')) {
        obj['customerCardAlias'] = ApiClient.convertToType(data['customerCardAlias'], 'String');
      }
      if (data.hasOwnProperty('decoupledAuthenticationIndicator')) {
        obj['decoupledAuthenticationIndicator'] = ApiClient.convertToType(data['decoupledAuthenticationIndicator'], 'String');
      }
      if (data.hasOwnProperty('decoupledAuthenticationMaxTime')) {
        obj['decoupledAuthenticationMaxTime'] = ApiClient.convertToType(data['decoupledAuthenticationMaxTime'], 'String');
      }
      if (data.hasOwnProperty('defaultCard')) {
        obj['defaultCard'] = ApiClient.convertToType(data['defaultCard'], 'Boolean');
      }
      if (data.hasOwnProperty('deviceChannel')) {
        obj['deviceChannel'] = ApiClient.convertToType(data['deviceChannel'], 'String');
      }
      if (data.hasOwnProperty('installmentTotalCount')) {
        obj['installmentTotalCount'] = ApiClient.convertToType(data['installmentTotalCount'], 'Number');
      }
      if (data.hasOwnProperty('merchantFraudRate')) {
        obj['merchantFraudRate'] = ApiClient.convertToType(data['merchantFraudRate'], 'String');
      }
      if (data.hasOwnProperty('marketingOptIn')) {
        obj['marketingOptIn'] = ApiClient.convertToType(data['marketingOptIn'], 'Boolean');
      }
      if (data.hasOwnProperty('marketingSource')) {
        obj['marketingSource'] = ApiClient.convertToType(data['marketingSource'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'String');
      }
      if (data.hasOwnProperty('merchantScore')) {
        obj['merchantScore'] = ApiClient.convertToType(data['merchantScore'], 'Number');
      }
      if (data.hasOwnProperty('messageCategory')) {
        obj['messageCategory'] = ApiClient.convertToType(data['messageCategory'], 'String');
      }
      if (data.hasOwnProperty('npaCode')) {
        obj['npaCode'] = ApiClient.convertToType(data['npaCode'], 'String');
      }
      if (data.hasOwnProperty('overridePaymentMethod')) {
        obj['overridePaymentMethod'] = ApiClient.convertToType(data['overridePaymentMethod'], 'String');
      }
      if (data.hasOwnProperty('overrideCountryCode')) {
        obj['overrideCountryCode'] = ApiClient.convertToType(data['overrideCountryCode'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationData')) {
        obj['priorAuthenticationData'] = ApiClient.convertToType(data['priorAuthenticationData'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationMethod')) {
        obj['priorAuthenticationMethod'] = ApiClient.convertToType(data['priorAuthenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationReferenceId')) {
        obj['priorAuthenticationReferenceId'] = ApiClient.convertToType(data['priorAuthenticationReferenceId'], 'String');
      }
      if (data.hasOwnProperty('priorAuthenticationTime')) {
        obj['priorAuthenticationTime'] = ApiClient.convertToType(data['priorAuthenticationTime'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('requestorId')) {
        obj['requestorId'] = ApiClient.convertToType(data['requestorId'], 'String');
      }
      if (data.hasOwnProperty('requestorInitiatedAuthenticationIndicator')) {
        obj['requestorInitiatedAuthenticationIndicator'] = ApiClient.convertToType(data['requestorInitiatedAuthenticationIndicator'], 'String');
      }
      if (data.hasOwnProperty('requestorName')) {
        obj['requestorName'] = ApiClient.convertToType(data['requestorName'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
      if (data.hasOwnProperty('sdkMaxTimeout')) {
        obj['sdkMaxTimeout'] = ApiClient.convertToType(data['sdkMaxTimeout'], 'String');
      }
      if (data.hasOwnProperty('secureCorporatePaymentIndicator')) {
        obj['secureCorporatePaymentIndicator'] = ApiClient.convertToType(data['secureCorporatePaymentIndicator'], 'String');
      }
      if (data.hasOwnProperty('transactionMode')) {
        obj['transactionMode'] = ApiClient.convertToType(data['transactionMode'], 'String');
      }
      if (data.hasOwnProperty('whiteListStatus')) {
        obj['whiteListStatus'] = ApiClient.convertToType(data['whiteListStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1decisionsConsumerAuthenticationInformationStrongAuthentication} strongAuthentication
   */
  exports.prototype['strongAuthentication'] = undefined;
  /**
   * Indicates the type of authentication that will be used to challenge the card holder.  Possible Values:  01 - Static  02 - Dynamic  03 - OOB (Out of Band)  04 - Decoupled **NOTE**:  EMV 3-D Secure version 2.1.0 supports values 01-03.  Version 2.2.0 supports values 01-04.  Decoupled authentication is not supported at this time. 
   * @member {String} authenticationType
   */
  exports.prototype['authenticationType'] = undefined;
  /**
   * An override field that a merchant can pass in to set the challenge window size to display to the end cardholder.  The ACS (Active Control Server) will reply with content that is formatted appropriately to this window size to allow for the best user experience.  The sizes are width x height in pixels of the window displayed in the cardholder browser window.  01 - 250x400  02 - 390x400  03 - 500x600  04 - 600x400  05 - Full page 
   * @member {String} acsWindowSize
   */
  exports.prototype['acsWindowSize'] = undefined;
  /**
   * Data that documents and supports a specific authentication process. 
   * @member {String} alternateAuthenticationData
   */
  exports.prototype['alternateAuthenticationData'] = undefined;
  /**
   * Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM 
   * @member {String} alternateAuthenticationDate
   */
  exports.prototype['alternateAuthenticationDate'] = undefined;
  /**
   * Mechanism used by the cardholder to authenticate to the 3D Secure requestor. Possible values: - `01`: No authentication occurred - `02`: Login using merchant system credentials - `03`: Login using Federated ID - `04`: Login using issuer credentials - `05`: Login using third-party authenticator - `06`: Login using FIDO Authenticator 
   * @member {String} alternateAuthenticationMethod
   */
  exports.prototype['alternateAuthenticationMethod'] = undefined;
  /**
   * The date/time of the authentication at the 3DS servers. RISK update authorization service in auth request payload with value returned in `consumerAuthenticationInformation.alternateAuthenticationData` if merchant calls via CYBS or field can be provided by merchant in authorization request if calling an external 3DS provider. 
   * @member {String} authenticationDate
   */
  exports.prototype['authenticationDate'] = undefined;
  /**
   * Payer authentication transaction identifier passed to link the check enrollment and validate authentication messages. **Note**: Required for Standard integration for enroll service. Required for Hybrid integration for validate service. 
   * @member {String} authenticationTransactionId
   */
  exports.prototype['authenticationTransactionId'] = undefined;
  /**
   * An indicator as to why the transaction was canceled. Possible Values:  - `01`: Cardholder selected Cancel. - `02`: Reserved for future EMVCo use (values invalid until defined by EMVCo). - `03`: Transaction Timed Out—Decoupled Authentication - `04`: Transaction timed out at ACS—other timeouts - `05`: Transaction Timed out at ACS - First CReq not received by ACS - `06`: Transaction Error - `07`: Unknown - `08`: Transaction Timed Out at SDK 
   * @member {String} challengeCancelCode
   */
  exports.prototype['challengeCancelCode'] = undefined;
  /**
   * Possible values: - `01`: No preference - `02`: No challenge request - `03`: Challenge requested (3D Secure requestor preference) - `04`: Challenge requested (mandate) - `05`: No challenge requested (transactional risk analysis is already performed) - `06`: No challenge requested (Data share only) - `07`: No challenge requested (strong consumer authentication is already performed) - `08`: No challenge requested (utilize whitelist exemption if no challenge required) - `09`: Challenge requested (whitelist prompt requested if challenge required) **Note** This field will default to `01` on merchant configuration and can be overridden by the merchant. EMV 3D Secure version 2.1.0 supports values `01-04`. Version 2.2.0 supports values `01-09`.  For details, see `pa_challenge_code` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/html) 
   * @member {String} challengeCode
   */
  exports.prototype['challengeCode'] = undefined;
  /**
   * The `consumerAuthenticationInformation.challengeCode` indicates the authentication type/level, or challenge, that was presented to the cardholder at checkout by the merchant when calling the Carte Bancaire 3DS servers via CYBS RISK services. It conveys to the issuer the alternative authentication methods that the consumer used. 
   * @member {String} challengeStatus
   */
  exports.prototype['challengeStatus'] = undefined;
  /**
   * An alias that uniquely identifies the customer's account and credit card on file. Note This field is required if Tokenization is enabled in the merchant profile settings. 
   * @member {String} customerCardAlias
   */
  exports.prototype['customerCardAlias'] = undefined;
  /**
   * Indicates whether the 3DS Requestor requests the ACS to utilize Decoupled Authentication and agrees to utilize Decoupled Authentication if the ACS confirms its use.  Possible Values:  Y - Decoupled Authentication is supported and preferred if challenge is necessary  N - Do not use Decoupled Authentication  **Default Value**: N 
   * @member {String} decoupledAuthenticationIndicator
   */
  exports.prototype['decoupledAuthenticationIndicator'] = undefined;
  /**
   * Indicates the maximum amount of time that the 3DS Requestor will wait for an ACS (Active control server) to provide the results of a Decoupled Authentication transaction (in minutes). Possible Values: Numeric values between 1 and 10080 accepted. 
   * @member {String} decoupledAuthenticationMaxTime
   */
  exports.prototype['decoupledAuthenticationMaxTime'] = undefined;
  /**
   * Indicates that the card being used is the one designated as the primary payment card for purchase. Recommended for Discover ProtectBuy. 
   * @member {Boolean} defaultCard
   */
  exports.prototype['defaultCard'] = undefined;
  /**
   * Determines the channel that the transaction came through. Possible Values: SDK/Browser/3RI. 3RI - 3DS request initiated. 
   * @member {String} deviceChannel
   */
  exports.prototype['deviceChannel'] = undefined;
  /**
   * An integer value greater than 1 indicating the max number of permitted authorizations for installment payments. **Note** This is required if the merchant and cardholder have agreed to installment payments. 
   * @member {Number} installmentTotalCount
   */
  exports.prototype['installmentTotalCount'] = undefined;
  /**
   * Calculated by merchants as per PSD2** RTS** (EEA** card fraud divided by all EEA card volumes). Possible Values: 1 = Represents fraud rate <=1  2 = Represents fraud rate >1 and <=6  3 = Represents fraud rate >6 and <=13  4 = Represents fraud rate >13 and <=25  5 = Represents fraud rate >25  EEA** = European Economic Area RTS** = Regulatory Technical Standards PSD2** = Payment Services Directive 
   * @member {String} merchantFraudRate
   */
  exports.prototype['merchantFraudRate'] = undefined;
  /**
   * Indicates whether the customer has opted in for marketing offers. Recommended for Discover ProtectBuy. 
   * @member {Boolean} marketingOptIn
   */
  exports.prototype['marketingOptIn'] = undefined;
  /**
   * Indicates origin of the marketing offer. Recommended for Discover ProtectBuy. 
   * @member {String} marketingSource
   */
  exports.prototype['marketingSource'] = undefined;
  /**
   * Merchant category code. **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * Risk Score provided by merchants. This is specific for CB transactions. 
   * @member {Number} merchantScore
   */
  exports.prototype['merchantScore'] = undefined;
  /**
   * Category of the message for a specific use case. Possible values:  - `01`: PA- payment authentication - `02`: NPA- non-payment authentication - `03-79`: Reserved for EMVCo future use (values invalid until defined by EMVCo) - `80-99`: Reserved for DS use 
   * @member {String} messageCategory
   */
  exports.prototype['messageCategory'] = undefined;
  /**
   * Non-Payer Authentication Indicator. Possible values: - `01`: Add card - `02`: Maintain card information - `03`: Cardholder verification for EMV token - `04-80` Reserved for EMVCo - `80-90` Reserved DS 
   * @member {String} npaCode
   */
  exports.prototype['npaCode'] = undefined;
  /**
   * Specifies the Brazilian payment account type used for the transaction. This field overrides other payment types that might be specified in the request. Use one of the following values for this field: - `NA`: Not applicable. Do not override other payment types that are specified in the request. - `CR`: Credit card. - `DB`: Debit card. - `VSAVR`: Visa Vale Refeicao - `VSAVA`: Visa Vale Alimentacao **Important** Required only for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} overridePaymentMethod
   */
  exports.prototype['overridePaymentMethod'] = undefined;
  /**
   * Two-character ISO standard Country Codes. 
   * @member {String} overrideCountryCode
   */
  exports.prototype['overrideCountryCode'] = undefined;
  /**
   * This field carry data that the ACS can use to verify the authentication process. 
   * @member {String} priorAuthenticationData
   */
  exports.prototype['priorAuthenticationData'] = undefined;
  /**
   * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor.  01 - Frictionless authentication occurred by ACS  02 - Cardholder challenge occurred by ACS  03 - AVS verified  04 - Other issuer methods  05-79 - Reserved for EMVCo future use (values invalid until defined by EMVCo)  80-99 - Reserved for DS use 
   * @member {String} priorAuthenticationMethod
   */
  exports.prototype['priorAuthenticationMethod'] = undefined;
  /**
   * This data element contains a ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder 
   * @member {String} priorAuthenticationReferenceId
   */
  exports.prototype['priorAuthenticationReferenceId'] = undefined;
  /**
   * Date and time in UTC of the prior cardholder authentication. Format – YYYYMMDDHHMM 
   * @member {String} priorAuthenticationTime
   */
  exports.prototype['priorAuthenticationTime'] = undefined;
  /**
   * Specifies the product code, which designates the type of transaction. Specify one of the following values for this field: - AIR: Airline purchase Important Required for American Express SafeKey (U.S.). - `ACC`: Accommodation Rental - `ACF`: Account funding - `CHA`: Check acceptance - `DIG`: Digital Goods - `DSP`: Cash Dispensing - `GAS`: Fuel - `GEN`: General Retail - `LUX`: Luxury Retail - `PAL`: Prepaid activation and load - `PHY`: Goods or services purchase - `QCT`: Quasi-cash transaction - `REN`: Car Rental - `RES`: Restaurant - `SVC`: Services - `TBD`: Other - `TRA`: Travel **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor ID value
   * @member {String} requestorId
   */
  exports.prototype['requestorId'] = undefined;
  /**
   * Indicates the type of 3RI request.  Possible Values:  01 - Recurring transaction  02 - Installment transaction  03 - Add card  04 - Maintain card  05 - Account verification  06 - Split/delayed shipment  07 - Top-up  08 - Mail Order  09 - Telephone Order  10 - Whitelist status check  11 - Other payment 
   * @member {String} requestorInitiatedAuthenticationIndicator
   */
  exports.prototype['requestorInitiatedAuthenticationIndicator'] = undefined;
  /**
   * Cardinal's directory server assigned 3DS Requestor Name value
   * @member {String} requestorName
   */
  exports.prototype['requestorName'] = undefined;
  /**
   * Reference ID that corresponds to the device fingerprinting data that was collected previously. Note Required for Hybrid integration. 
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * This field indicates the maximum amount of time for all 3DS 2.0 messages to be communicated between all components (in minutes).  Possible Values:  Greater than or equal to 05 (05 is the minimum timeout to set)  Cardinal Default is set to 15  NOTE: This field is a required 3DS 2.0 field and Cardinal sends in a default of 15 if nothing is passed 
   * @member {String} sdkMaxTimeout
   */
  exports.prototype['sdkMaxTimeout'] = undefined;
  /**
   * Indicates dedicated payment processes and procedures were used, potential secure corporate payment exemption applies. Possible Values : 0/1 
   * @member {String} secureCorporatePaymentIndicator
   */
  exports.prototype['secureCorporatePaymentIndicator'] = undefined;
  /**
   * Transaction mode identifier. Identifies the channel from which the transaction originates. Possible values:  - `M`: MOTO (Mail Order Telephone Order) - `R`: Retail - `S`: eCommerce - `P`: Mobile Device - `T`: Tablet 
   * @member {String} transactionMode
   */
  exports.prototype['transactionMode'] = undefined;
  /**
   * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  Possible Values:  Y - 3DS Requestor is whitelisted by cardholder  N - 3DS Requestor is not whitelisted by cardholder 
   * @member {String} whiteListStatus
   */
  exports.prototype['whiteListStatus'] = undefined;



  return exports;
}));

