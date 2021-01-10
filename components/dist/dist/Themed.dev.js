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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

exports.__esModule = true;
exports.View = exports.Text = exports.useThemeColor = void 0;

var React = require("react");

var react_native_1 = require("react-native");

var Colors_1 = require("../constants/Colors");

var useColorScheme_1 = require("../hooks/useColorScheme");

function useThemeColor(props, colorName) {
  var theme = useColorScheme_1["default"]();
  var colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors_1["default"][theme][colorName];
  }
}

exports.useThemeColor = useThemeColor;

function Text(props) {
  var style = props.style,
      lightColor = props.lightColor,
      darkColor = props.darkColor,
      otherProps = __rest(props, ["style", "lightColor", "darkColor"]);

  var color = useThemeColor({
    light: lightColor,
    dark: darkColor
  }, 'text');
  return React.createElement(react_native_1.Text, __assign({
    style: [{
      color: color
    }, style]
  }, otherProps));
}

exports.Text = Text;

function View(props) {
  var style = props.style,
      lightColor = props.lightColor,
      darkColor = props.darkColor,
      otherProps = __rest(props, ["style", "lightColor", "darkColor"]);

  var backgroundColor = useThemeColor({
    light: lightColor,
    dark: darkColor
  }, 'background');
  return React.createElement(react_native_1.View, __assign({
    style: [{
      backgroundColor: backgroundColor
    }, style]
  }, otherProps));
}

exports.View = View;