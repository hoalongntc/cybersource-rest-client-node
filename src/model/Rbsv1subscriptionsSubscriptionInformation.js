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
    root.CyberSource.Rbsv1subscriptionsSubscriptionInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Rbsv1subscriptionsSubscriptionInformation model module.
   * @module model/Rbsv1subscriptionsSubscriptionInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Rbsv1subscriptionsSubscriptionInformation</code>.
   * @alias module:model/Rbsv1subscriptionsSubscriptionInformation
   * @class
   * @param name {String} Subscription Name 
   * @param startDate {String} Start date of the Subscription  Start date must be in UTC. Format: YYYY-MM-DDThh:mm:ssZ The T separates the date and the time. The Z indicates UTC.  Note: Subscription starts on the day provided in UTC.  **Example** 2022-08-11T22:47:57Z equals August 11, 2022, at 22:47:57 (10:47:57 p.m.). Subscription will start on August 11,2022. 
   */
  var exports = function(name, startDate) {
    var _this = this;



    _this['name'] = name;
    _this['startDate'] = startDate;
  };

  /**
   * Constructs a <code>Rbsv1subscriptionsSubscriptionInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rbsv1subscriptionsSubscriptionInformation} obj Optional instance to populate.
   * @return {module:model/Rbsv1subscriptionsSubscriptionInformation} The populated <code>Rbsv1subscriptionsSubscriptionInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Subscription code is an optional field, If not provided system generates and assign one 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Plan Id. Use Plan Id from Create Plan Service. 
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * Subscription Name 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Start date of the Subscription  Start date must be in UTC. Format: YYYY-MM-DDThh:mm:ssZ The T separates the date and the time. The Z indicates UTC.  Note: Subscription starts on the day provided in UTC.  **Example** 2022-08-11T22:47:57Z equals August 11, 2022, at 22:47:57 (10:47:57 p.m.). Subscription will start on August 11,2022. 
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;



  return exports;
}));


