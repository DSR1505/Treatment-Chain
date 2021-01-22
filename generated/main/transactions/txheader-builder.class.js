"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var transactionHeader =
/** @class */
function () {
  function transactionHeader() {
    this.timestamp = new Date().getTime();
  }

  return transactionHeader;
}();

exports.default = transactionHeader;