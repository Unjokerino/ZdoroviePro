"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15
    },
    mainInfo: {
        flexDirection: "row"
    },
    textContainer: {
        flex: 1,
        paddingRight: 20
    },
    title: {
        fontSize: 14
    },
    text: {
        height: 45,
        overflow: "hidden"
    },
    progressContainer: {
        height: 15,
        borderRadius: 25,
        width: "100%",
        overflow: "hidden",
        marginTop: 25,
        backgroundColor: constants_1.Colors.light.background
    },
    progressBar: {
        backgroundColor: "#4DD0E1",
        height: "100%"
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 15
    },
    footer: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    footerText: {
        color: "#91919F",
        fontSize: 12
    }
});
exports["default"] = styles;
