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
var lodash_1 = require("lodash");
var FormHelperText_1 = require("@material-ui/core/FormHelperText/FormHelperText");
var SelectHelperText = function (props) {
    var id = props.id, helperText = props.helperText, formHelperTextProps = props.formHelperTextProps;
    if (lodash_1.isEmpty(helperText)) {
        return null;
    }
    return (React.createElement(FormHelperText_1.default, __assign({ id: id }, formHelperTextProps), helperText));
};
exports.default = SelectHelperText;
//# sourceMappingURL=SelectHelperText.js.map