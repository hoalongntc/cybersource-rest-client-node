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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.Rbsv1plansPlanInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Rbsv1plansPlanInformation', function() {
    it('should create an instance of Rbsv1plansPlanInformation', function() {
      // uncomment below and update the code to test Rbsv1plansPlanInformation
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be.a(CyberSource.Rbsv1plansPlanInformation);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

    it('should have the property billingPeriod (base name: "billingPeriod")', function() {
      // uncomment below and update the code to test the property billingPeriod
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

    it('should have the property billingCycles (base name: "billingCycles")', function() {
      // uncomment below and update the code to test the property billingCycles
      //var instane = new CyberSource.Rbsv1plansPlanInformation();
      //expect(instance).to.be();
    });

  });

}));
