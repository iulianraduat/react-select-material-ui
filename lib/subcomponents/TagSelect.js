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
var TagsSelect = function (props) { return (React.createElement(SingleSelect_1.default, __assign({ label: "Choose a tag" }, props, { SelectProps: __assign({ msgNoOptionsMatchFilter: "No tags match the filter" }, props.SelectProps) }))); };
exports.default = TagsSelect;
//# sourceMappingURL=TagSelect.js.map