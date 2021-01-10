"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        height: constants_1.SCREEN_WIDTH / 2,
        width: constants_1.SCREEN_WIDTH - 100,
        borderRadius: 10,
        overflow: "hidden"
    },
    title: {
        color: "white",
        paddingTop: 17,
        paddingLeft: 15,
        fontSize: 18
    }
});
exports["default"] = styles;
