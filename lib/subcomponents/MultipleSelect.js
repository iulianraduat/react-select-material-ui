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
var MaterialUiCreatable_1 = require("../MaterialUiCreatable");
var MultipleSelect = function (props) { return (React.createElement(MaterialUiCreatable_1.default, __assign({}, props, { SelectProps: __assign({}, props.SelectProps, { isMulti: true, isClearable: true }), fullWidth: true }))); };
exports.default = MultipleSelect;
//# sourceMappingURL=MultipleSelect.js.map