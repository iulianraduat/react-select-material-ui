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
var TagsSelect = function (props) { return (React.createElement(MultipleSelect_1.default, __assign({ label: "Choose some tags" }, props, { SelectProps: __assign({ msgNoOptionsAvailable: "No more tags are available", msgNoOptionsMatchFilter: "No tags match the filter" }, props.SelectProps) }))); };
exports.default = TagsSelect;
//# sourceMappingURL=TagsSelect.js.map