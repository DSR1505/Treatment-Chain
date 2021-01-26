"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TransactionHeaderBuilder =
/** @class */
function () {
  function TransactionHeaderBuilder() {
    this.timestamp = new Date().getTime();
  }

  return TransactionHeaderBuilder;
}();

exports.default = TransactionHeaderBuilder;