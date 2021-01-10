"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var react_native_paper_1 = require("react-native-paper");
function RecomendedGoalCard(_a) {
    var style = _a.style, title = _a.title, image = _a.image, onPress = _a.onPress;
    return (react_1["default"].createElement(react_native_1.View, { style: [styles_1["default"].container, style] },
        react_1["default"].createElement(react_native_1.ImageBackground, { style: react_native_1.StyleSheet.absoluteFill, source: { uri: image } },
            react_1["default"].createElement(react_native_paper_1.Title, { style: styles_1["default"].title }, title)),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { position: "absolute", bottom: 15, right: 10 } },
            react_1["default"].createElement(react_native_paper_1.Button, { icon: "play", color: "white", style: { opacity: 0.7 }, mode: "contained", onPress: function () { return console.log("Pressed"); } }, "\u0417\u0430\u0434\u0430\u0442\u044C \u0446\u0435\u043B\u044C"))));
}
exports["default"] = RecomendedGoalCard;
