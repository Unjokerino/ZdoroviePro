"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var styles_1 = require("./styles");
var Themed_1 = require("../../components/Themed");
function StepCard(_a) {
    var style = _a.style, title = _a.title, text = _a.text, progress = _a.progress, image = _a.image;
    var Progress = function (_a) {
        var value = _a.value;
        return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].progressContainer },
            react_1["default"].createElement(react_native_1.View, { style: [styles_1["default"].progressBar, { width: value + "%" }] })));
    };
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [styles_1["default"].card, style] },
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].mainInfo },
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].textContainer },
                react_1["default"].createElement(react_native_paper_1.Title, { style: styles_1["default"].title }, title),
                react_1["default"].createElement(react_native_paper_1.Paragraph, { style: styles_1["default"].text }, text)),
            react_1["default"].createElement(react_native_1.Image, { style: styles_1["default"].image, source: {
                    uri: image
                } })),
        react_1["default"].createElement(Progress, { value: progress }),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].footer },
            progress === 100 ? (react_1["default"].createElement(react_native_paper_1.Chip, null, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E")) : (react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                react_1["default"].createElement(Themed_1.Text, { style: styles_1["default"].footerText }, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 "),
                react_1["default"].createElement(Themed_1.Text, null,
                    progress,
                    "%"))),
            react_1["default"].createElement(Themed_1.Text, { style: styles_1["default"].footerText }, "\u041F\u0440\u043E\u0439\u0442\u0438 \u043F\u043E\u0437\u0436\u0435 "))));
}
exports["default"] = StepCard;
