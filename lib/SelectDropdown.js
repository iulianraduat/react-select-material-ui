"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_select_1 = require("react-select");
var Creatable_1 = require("react-select/lib/Creatable");
var SelectDropdownStyles_1 = require("./SelectDropdownStyles");
var SelectDropdown = (function (_super) {
    __extends(SelectDropdown, _super);
    function SelectDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noOptionsMessage = function (obj) {
            var selectProps = _this.props.selectProps;
            if (lodash_1.isNil(selectProps)) {
                return null;
            }
            if (lodash_1.isEmpty(obj) || lodash_1.isEmpty(obj.inputValue)) {
                return selectProps.msgNoOptionsAvailable || 'No more options are available';
            }
            var inputValue = obj.inputValue;
            if (selectProps.isCreatable !== true || _this.containsValue(inputValue) || _this.containsOptions(inputValue)) {
                return selectProps.msgNoOptionsMatchFilter || 'No options match the filter';
            }
            return selectProps.msgNoValidValue || 'The new value is not valid (contains space)';
        };
        _this.isValidNewOption = function (inputValue) {
            if (lodash_1.isEmpty(inputValue)) {
                return false;
            }
            if (_this.containsOptions(inputValue)) {
                return false;
            }
            var hasSpaces = SelectDropdown.spaces.test(inputValue);
            return hasSpaces === false;
        };
        return _this;
    }
    SelectDropdown.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder, options = _a.options, selectProps = _a.selectProps, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur;
        var Select = selectProps && selectProps.isCreatable ? Creatable_1.default : react_select_1.default;
        return (React.createElement(Select, __assign({ isValidNewOption: this.isValidNewOption, captureMenuScroll: false, createOptionPosition: "first" }, selectProps, { value: value, placeholder: placeholder, options: options, styles: SelectDropdownStyles_1.getStyles(this.props), noOptionsMessage: this.noOptionsMessage, onChange: onChange, onFocus: onFocus, onBlur: onBlur })));
    };
    SelectDropdown.prototype.containsOptions = function (inputValue) {
        var _this = this;
        return lodash_1.some(this.props.options, function (option) { return _this.equalsIgnoringCase(inputValue, option.value); });
    };
    SelectDropdown.prototype.containsValue = function (inputValue) {
        var _this = this;
        var value = this.props.value;
        if (lodash_1.isArray(value) === false) {
            return false;
        }
        return lodash_1.some(value, function (option) { return _this.equalsIgnoringCase(inputValue, option.value); });
    };
    SelectDropdown.prototype.equalsIgnoringCase = function (a, b) {
        return a.localeCompare(b, undefined, SelectDropdown.SENSITIVITY) === 0;
    };
    SelectDropdown.spaces = /\s/;
    SelectDropdown.SENSITIVITY = { sensitivity: 'base' };
    return SelectDropdown;
}(React.Component));
exports.default = SelectDropdown;
//# sourceMappingURL=SelectDropdown.js.map