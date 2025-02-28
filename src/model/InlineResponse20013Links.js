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
    define(['ApiClient', 'model/InlineResponse20013LinksReport', 'model/InlineResponse2022LinksStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20013LinksReport'), require('./InlineResponse2022LinksStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse20013Links = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse20013LinksReport, root.CyberSource.InlineResponse2022LinksStatus);
  }
}(this, function(ApiClient, InlineResponse20013LinksReport, InlineResponse2022LinksStatus) {
  'use strict';




  /**
   * The InlineResponse20013Links model module.
   * @module model/InlineResponse20013Links
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse20013Links</code>.
   * @alias module:model/InlineResponse20013Links
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20013Links</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013Links} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013Links} The populated <code>InlineResponse20013Links</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = InlineResponse2022LinksStatus.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('report')) {
        obj['report'] = ApiClient.convertToType(data['report'], [InlineResponse20013LinksReport]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2022LinksStatus} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse20013LinksReport>} report
   */
  exports.prototype['report'] = undefined;



  return exports;
}));


