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
    define(['ApiClient', 'model/InlineResponse401LinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse401LinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse401Links = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse401LinksSelf);
  }
}(this, function(ApiClient, InlineResponse401LinksSelf) {
  'use strict';




  /**
   * The InlineResponse401Links model module.
   * @module model/InlineResponse401Links
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse401Links</code>.
   * @alias module:model/InlineResponse401Links
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse401Links</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse401Links} obj Optional instance to populate.
   * @return {module:model/InlineResponse401Links} The populated <code>InlineResponse401Links</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = InlineResponse401LinksSelf.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse401LinksSelf} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


