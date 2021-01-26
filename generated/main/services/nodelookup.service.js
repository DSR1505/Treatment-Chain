"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var NodeLookupService =
/** @class */
function () {
  function NodeLookupService() {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    this.serviceUrl = config.getValue('NODE_DNS');
  }

  NodeLookupService.prototype.getNodes = function () {
    //TODO: async http request to seed nodes on DNS server
    return null;
  };

  NodeLookupService.prototype.isNodeFound = function (hospital, nodes) {
    //TODO:find the hospital is already registered or not
    // using the found list
    return undefined;
  };

  NodeLookupService.prototype.updateNodeDirectory = function (hospital) {//TODO: do a DNS server call to update the list of running seed
    // by adding the this node.
  };

  return NodeLookupService;
}();

exports.default = NodeLookupService;