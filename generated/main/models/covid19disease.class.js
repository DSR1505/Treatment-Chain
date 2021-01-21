"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Covid19Disease =
/** @class */
function () {
  function Covid19Disease(readings) {
    this.name = 'COVID-19';
    this.threshold = 120;
    this.readingCount = 35;
    this.readings = readings;
  }

  Covid19Disease.prototype.isDiagnosed = function () {
    var count = 0;

    for (var i = 0; i < this.readingCount; ++i) {
      if (this.readings[i] >= this.threshold) count++;
    }

    if (count >= this.readingCount * 0.5) {
      return true;
    }

    return false;
  };

  return Covid19Disease;
}();

exports.default = Covid19Disease;