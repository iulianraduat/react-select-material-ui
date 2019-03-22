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
var MultipleSelect_1 = require("./MultipleSelect");
var ColoredDot_1 = require("./ColoredDot");
var ColoredOption_1 = require("./ColoredOption");
var label = function (props) {
    var value = props.data.value;
    var style = {
        padding: "2px 5px 2px 0"
    };
    return (React.createElement("div", { style: style },
        React.createElement(ColoredDot_1.default, { color: value }),
        value));
};
var ColorsSelect = function (props) { return (React.createElement(MultipleSelect_1.default, __assign({ label: "Choose some colors" }, props, { SelectProps: __assign({ msgNoOptionsAvailable: "No more colors are available", msgNoOptionsMatchFilter: "No colors match the filter" }, props.SelectProps, { components: {
            MultiValueLabel: label,
            Option: ColoredOption_1.default
        } }) }))); };
exports.default = ColorsSelect;
//# sourceMappingURL=ColorsSelect.js.map