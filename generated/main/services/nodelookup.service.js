"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NodeLookupService =
/** @class */
function () {
  function NodeLookupService() {}

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