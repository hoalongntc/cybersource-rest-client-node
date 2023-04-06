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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationPassenger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationPassenger'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1decisionsOrderInformationLineItems = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationPassenger);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationPassenger) {
  'use strict';




  /**
   * The Riskv1decisionsOrderInformationLineItems model module.
   * @module model/Riskv1decisionsOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsOrderInformationLineItems</code>.
   * @alias module:model/Riskv1decisionsOrderInformationLineItems
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Riskv1decisionsOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsOrderInformationLineItems} The populated <code>Riskv1decisionsOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('giftCardCurrency')) {
        obj['giftCardCurrency'] = ApiClient.convertToType(data['giftCardCurrency'], 'Number');
      }
      if (data.hasOwnProperty('productSKU')) {
        obj['productSKU'] = ApiClient.convertToType(data['productSKU'], 'String');
      }
      if (data.hasOwnProperty('productRisk')) {
        obj['productRisk'] = ApiClient.convertToType(data['productRisk'], 'String');
      }
      if (data.hasOwnProperty('productDescription')) {
        obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('gift')) {
        obj['gift'] = ApiClient.convertToType(data['gift'], 'Boolean');
      }
      if (data.hasOwnProperty('distributorProductSku')) {
        obj['distributorProductSku'] = ApiClient.convertToType(data['distributorProductSku'], 'String');
      }
      if (data.hasOwnProperty('passenger')) {
        obj['passenger'] = Ptsv2paymentsOrderInformationPassenger.constructFromObject(data['passenger']);
      }
      if (data.hasOwnProperty('shippingDestinationTypes')) {
        obj['shippingDestinationTypes'] = ApiClient.convertToType(data['shippingDestinationTypes'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total amount for the item. Normally calculated as the unit price times quantity.  When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the purchase amount total for prepaid gift cards in major units.  Example: 123.45 USD = 123 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Per-item price of the product. This value for this field cannot be negative.  You must include either this field or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  You can include a decimal point (.), but you cannot include any other special characters. The value is truncated to the correct number of decimal places.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either the 1st line item in the order and this field, or the request-level field `orderInformation.amountDetails.totalAmount` in your request.  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in the [Merchant Descriptors Using the SCMP API Guide.] (https://apps.cybersource.com/library/documentation/dev_guides/Merchant_Descriptors_SCMP_API/html/)  #### Tax Calculation Required field for U.S., Canadian, international and value added taxes.  #### Zero Amount Authorizations If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen.  #### Maximum Field Lengths For GPN and JCN Gateway: Decimal (10) All other processors: Decimal (15) 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * Number of units for this order. Must be a non-negative integer.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * When `orderInformation.lineItems[].productCode` is \"gift_card\", this is the currency used for the gift card purchase.  For details, see `pa_gift_card_currency` field description in [CyberSource Payer Authentication Using the SCMP API.] (https://apps.cybersource.com/library/documentation/dev_guides/Payer_Authentication_SCMP_API/Payer_Authentication_SCMP_API.pdf)  For the possible values, see the [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) 
   * @member {Number} giftCardCurrency
   */
  exports.prototype['giftCardCurrency'] = undefined;
  /**
   * Product identifier code. Also known as the Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to **default** or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S. and Canadian taxes. Not applicable to international and value added taxes. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the values related to shipping and/or handling. 
   * @member {String} productSKU
   */
  exports.prototype['productSKU'] = undefined;
  /**
   * Indicates the level of risk for the product. This field can contain one of the following values: - `low`: The product is associated with few chargebacks. - `normal`: The product is associated with a normal number of chargebacks. - `high`: The product is associated with many chargebacks. 
   * @member {String} productRisk
   */
  exports.prototype['productRisk'] = undefined;
  /**
   * Brief description of item.
   * @member {String} productDescription
   */
  exports.prototype['productDescription'] = undefined;
  /**
   * For an authorization or capture transaction (`processingOptions.capture` is `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * Type of product. The value for this field is used to identify the product category (electronic, handling, physical, service, or shipping). The default value is `default`.  If you are performing an authorization transaction (`processingOptions.capture` is set to `false`), and you set this field to a value other than `default` or one of the values related to shipping and/or handling, then `orderInformation.lineItems[].quantity`, `orderInformation.lineItems[].productName`, and `orderInformation.lineItems[].productSku` fields are required.  Optional field.  For details, see the `product_code` field description in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/).  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  The Product Codes for the tax service are located in the Cybersource Tax Codes guide. Contact Customer Support to request the guide. If you don’t send a tax service Product Code in your tax request, product-based rules or exemptions will not be applied and the transaction will default to fully taxable in the locations where you’ve indicated you need to collect tax [by way of nexus, no nexus, or seller registration number fields]. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * This field is only used in DM service.  Determines whether to assign risk to the order if the billing and shipping addresses specify different cities, states, or countries. This field can contain one of the following values: - true: Orders are assigned only slight additional risk if billing and shipping addresses are different. - false: Orders are assigned higher additional risk if billing and shipping addresses are different. 
   * @member {Boolean} gift
   */
  exports.prototype['gift'] = undefined;
  /**
   * Product’s identifier code. This field is inserted into the outgoing message without being parsed or formatted. This field is included as Distributor product SKU (Offer) in the list of API fields with which you can create custom rules. 
   * @member {String} distributorProductSku
   */
  exports.prototype['distributorProductSku'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationPassenger} passenger
   */
  exports.prototype['passenger'] = undefined;
  /**
   * Destination to where the item will be shipped. Example: Commercial, Residential, Store 
   * @member {String} shippingDestinationTypes
   */
  exports.prototype['shippingDestinationTypes'] = undefined;
  /**
   * Total tax to apply to the product. This value cannot be negative. The tax amount and the offer amount must be in the same currency. The tax amount field is additive.  The following example uses a two-exponent currency such as USD:   1. You include each line item in your request.  ..- 1st line item has amount=10.00, quantity=1, and taxAmount=0.80  ..- 2nd line item has amount=20.00, quantity=1, and taxAmount=1.60  2. The total amount authorized will be 32.40, not 30.00 with 2.40 of tax included.  Optional field.  #### Airlines processing Tax portion of the order amount. This value cannot exceed 99999999999999 (fourteen 9s). Format: English characters only. Optional request field for a line item.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  Note if you send this field in your tax request, the value in the field will override the tax engine 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;



  return exports;
}));


