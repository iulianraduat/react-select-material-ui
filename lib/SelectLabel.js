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
var InputLabel_1 = require("@material-ui/core/InputLabel/InputLabel");
var ColorConstants_1 = require("./ColorConstants");
var SelectLabel = function (props) {
    var id = props.id, label = props.label, hasInputFocus = props.hasInputFocus, shrink = props.shrink, inputLabelProps = props.inputLabelProps;
    if (lodash_1.isEmpty(label)) {
        return null;
    }
    var style = {
        position: 'relative',
        color: hasInputFocus ? ColorConstants_1.colorFocus : ColorConstants_1.colorNoFocus
    };
    return (React.createElement(InputLabel_1.default, __assign({ htmlFor: id }, inputLabelProps, { style: style, shrink: shrink }), label));
};
exports.default = SelectLabel;
//# sourceMappingURL=SelectLabel.js.map