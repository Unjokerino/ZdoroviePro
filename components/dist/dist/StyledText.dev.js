"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.MonoText = void 0;

var React = require("react");

var Themed_1 = require("./Themed");

function MonoText(props) {
  return React.createElement(Themed_1.Text, __assign({}, props, {
    style: [props.style, {
      fontFamily: 'space-mono'
    }]
  }));
}

exports.MonoText = MonoText;