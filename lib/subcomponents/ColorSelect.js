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
var SingleSelect_1 = require("./SingleSelect");
var ColoredDot_1 = require("./ColoredDot");
var ColoredOption_1 = require("./ColoredOption");
var label = function (props) {
    var value = props.data.value;
    var style = {
        padding: '2px 5px 2px 0'
    };
    return (React.createElement("div", { style: style },
        React.createElement(ColoredDot_1.default, { color: value }),
        value));
};
var ColorSelect = function (props) { return (React.createElement(SingleSelect_1.default, __assign({ label: "Choose a color" }, props, { SelectProps: __assign({ msgNoOptionsMatchFilter: 'No colors match the filter' }, props.SelectProps, { components: {
            Option: ColoredOption_1.default,
            SingleValue: label
        } }) }))); };
exports.default = ColorSelect;
//# sourceMappingURL=ColorSelect.js.map