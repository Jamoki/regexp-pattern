"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.regExpPattern = void 0;
var regExpPattern = {
  areaCode: /^\d{3}$/,
  phone: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
  shortPhone: /^\d{3}[ -\.]?\d{4}$/,
  ext: /^x? *(\d{1,6})$/,
  ssn: /^\d{3}-\d{2}-\d{4}$/,
  state: /^[A-Z]{2}$/,
  zip: /^\d{5}(-\d{4})?$/,
  // See http://emailregex.com/
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
exports.regExpPattern = regExpPattern;
var _default = regExpPattern;
exports.default = _default;
//# sourceMappingURL=regExpPattern.js.map