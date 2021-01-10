"use strict";
exports.__esModule = true;
var WebBrowser = require("expo-web-browser");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Colors_1 = require("../constants/Colors");
var StyledText_1 = require("./StyledText");
var Themed_1 = require("./Themed");
function EditScreenInfo(_a) {
    var path = _a.path;
    return (react_1["default"].createElement(Themed_1.View, null,
        react_1["default"].createElement(Themed_1.View, { style: styles.getStartedContainer },
            react_1["default"].createElement(Themed_1.Text, { style: styles.getStartedText, lightColor: "rgba(0,0,0,0.8)", darkColor: "rgba(255,255,255,0.8)" }, "Open up the code for this screen:"),
            react_1["default"].createElement(Themed_1.View, { style: [styles.codeHighlightContainer, styles.homeScreenFilename], darkColor: "rgba(255,255,255,0.05)", lightColor: "rgba(0,0,0,0.05)" },
                react_1["default"].createElement(StyledText_1.MonoText, null, path)),
            react_1["default"].createElement(Themed_1.Text, { style: styles.getStartedText, lightColor: "rgba(0,0,0,0.8)", darkColor: "rgba(255,255,255,0.8)" }, "Change any of the text, save the file, and your app will automatically update.")),
        react_1["default"].createElement(Themed_1.View, { style: styles.helpContainer },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleHelpPress, style: styles.helpLink },
                react_1["default"].createElement(Themed_1.Text, { style: styles.helpLinkText, lightColor: Colors_1["default"].light.tint }, "Tap here if your app doesn't automatically update after making changes")))));
}
exports["default"] = EditScreenInfo;
function handleHelpPress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet');
}
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    developmentModeText: {
        marginBottom: 20,
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center'
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50
    },
    homeScreenFilename: {
        marginVertical: 7
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)'
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center'
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    helpLink: {
        paddingVertical: 15
    },
    helpLinkText: {
        textAlign: 'center'
    }
});
