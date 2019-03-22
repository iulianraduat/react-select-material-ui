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
var ReactSelectMaterialUi_1 = require("./ReactSelectMaterialUi");
var MaterialUiCreatable = function (props) { return (React.createElement(ReactSelectMaterialUi_1.default, __assign({}, props, { SelectProps: __assign({ formatCreateLabel: function (value) { return value + " (new)"; } }, props.SelectProps, { backspaceRemovesValue: false }) }))); };
exports.default = MaterialUiCreatable;
//# sourceMappingURL=MaterialUiCreatable.js.map