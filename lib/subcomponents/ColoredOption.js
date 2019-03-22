"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MenuItem_1 = require("@material-ui/core/MenuItem/MenuItem");
var ColoredDot_1 = require("./ColoredDot");
var getStyle = function (props) { return ({
    fontWeight: props.isSelected ? 500 : 400,
    padding: 5
}); };
var ColoredOption = function (props) { return (React.createElement(MenuItem_1.default, __assign({ component: "div", buttonRef: props.innerRef, selected: props.isFocused, style: getStyle(props) }, props.innerProps),
    React.createElement(ColoredDot_1.default, { color: props.data.value }),
    props.children)); };
exports.default = ColoredOption;
//# sourceMappingURL=ColoredOption.js.map