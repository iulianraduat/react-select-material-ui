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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var FormControl_1 = require("@material-ui/core/FormControl/FormControl");
var SelectLabel_1 = require("./SelectLabel");
var SelectDropdown_1 = require("./SelectDropdown");
var SelectHelperText_1 = require("./SelectHelperText");
var ReactSelectMaterialUi = (function (_super) {
    __extends(ReactSelectMaterialUi, _super);
    function ReactSelectMaterialUi(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeSelect = function (value) {
            _this.setState({
                filter: '',
                selectedOption: value
            });
            var onChange = _this.props.onChange;
            if (lodash_1.isFunction(onChange)) {
                onChange(_this.getValues(value));
            }
        };
        _this.handleGotFocus = function (event) {
            _this.setState({
                hasInputFocus: true
            });
            var onFocus = _this.props.onFocus;
            if (lodash_1.isFunction(onFocus)) {
                onFocus(event);
            }
        };
        _this.handleLostFocus = function (event) {
            _this.setState({
                hasInputFocus: false
            });
            var onBlur = _this.props.onBlur;
            if (lodash_1.isFunction(onBlur)) {
                onBlur(event);
            }
        };
        var value = props.values || props.value;
        _this.state = {
            filter: '',
            hasInputFocus: false,
            selectedOption: lodash_1.isNil(value) ? undefined : _this.getOneOrMoreSelectOptions(value)
        };
        return _this;
    }
    ReactSelectMaterialUi.prototype.render = function () {
        var _a = this.props, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, children = _a.children, className = _a.className, defaultValue = _a.defaultValue, disabled = _a.disabled, error = _a.error, FormHelperTextProps = _a.FormHelperTextProps, fullWidth = _a.fullWidth, helperText = _a.helperText, id = _a.id, InputLabelProps = _a.InputLabelProps, inputRef = _a.inputRef, label = _a.label, multiline = _a.multiline, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, placeholder = _a.placeholder, required = _a.required, rows = _a.rows, rowsMax = _a.rowsMax, select = _a.select, SelectProps = _a.SelectProps, type = _a.type, value = _a.value, options = _a.options, other = __rest(_a, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "options"]);
        var helperTextId = id && helperText ? id + "-helper-text" : undefined;
        var shrink = this.hasInputFocus() || this.hasFilter() || this.hasValue();
        var _b = this.state, hasInputFocus = _b.hasInputFocus, selectedOption = _b.selectedOption;
        var isClearable = !!SelectProps && SelectProps.isClearable && this.isClearable();
        var isDisabled = disabled || (!!SelectProps && SelectProps.isDisabled);
        var selectPlaceholder = label ? '' : placeholder;
        return (React.createElement(FormControl_1.default, __assign({ "aria-describedby": helperTextId, className: className, error: error, fullWidth: fullWidth, required: required }, other),
            React.createElement(SelectLabel_1.default, { id: id, label: label, shrink: shrink, hasInputFocus: hasInputFocus, inputLabelProps: InputLabelProps }),
            React.createElement(SelectDropdown_1.default, { value: selectedOption, placeholder: selectPlaceholder, options: this.getOptions(options), selectProps: __assign({}, SelectProps, { isClearable: isClearable,
                    isDisabled: isDisabled }), onChange: this.handleChangeSelect, onFocus: this.handleGotFocus, onBlur: this.handleLostFocus }),
            React.createElement(SelectHelperText_1.default, { id: helperTextId, helperText: helperText, formHelperTextProps: FormHelperTextProps })));
    };
    ReactSelectMaterialUi.prototype.componentWillReceiveProps = function (props) {
        var value = props.value;
        if (!lodash_1.isEqual(value, this.props.value)) {
            this.setState({
                selectedOption: lodash_1.isNil(value) ? null : this.getOneOrMoreSelectOptions(value)
            });
        }
    };
    ReactSelectMaterialUi.prototype.getOneOrMoreSelectOptions = function (value) {
        if (lodash_1.isArray(value)) {
            return this.getOptions(value);
        }
        return this.getSelectOption(value);
    };
    ReactSelectMaterialUi.prototype.isClearable = function () {
        var selectedOption = this.state.selectedOption;
        if (lodash_1.isEmpty(selectedOption)) {
            return false;
        }
        if (lodash_1.isArray(selectedOption) && lodash_1.size(selectedOption) <= 1) {
            return false;
        }
        return true;
    };
    ReactSelectMaterialUi.prototype.hasInputFocus = function () {
        return this.state.hasInputFocus === true;
    };
    ReactSelectMaterialUi.prototype.hasFilter = function () {
        return lodash_1.isEmpty(this.state.filter) === false;
    };
    ReactSelectMaterialUi.prototype.hasValue = function () {
        if (lodash_1.isObject(this.state.selectedOption)) {
            var value = this.state.selectedOption.value;
            return lodash_1.isNumber(value) || lodash_1.isBoolean(value) || lodash_1.isSymbol(value) || !lodash_1.isEmpty(value);
        }
        else {
            return lodash_1.isEmpty(this.state.selectedOption) === false;
        }
    };
    ReactSelectMaterialUi.prototype.getOptions = function (options) {
        return lodash_1.map(options, this.getSelectOption);
    };
    ReactSelectMaterialUi.prototype.getSelectOption = function (option) {
        if (lodash_1.isString(option)) {
            return {
                label: option,
                value: option
            };
        }
        return option;
    };
    ReactSelectMaterialUi.prototype.getValues = function (value) {
        if (lodash_1.isNil(value)) {
            return null;
        }
        if (lodash_1.isArray(value)) {
            return lodash_1.map(value, this.getValue);
        }
        return this.getValue(value);
    };
    ReactSelectMaterialUi.prototype.getValue = function (option) {
        return option.value;
    };
    return ReactSelectMaterialUi;
}(React.Component));
exports.default = ReactSelectMaterialUi;
//# sourceMappingURL=ReactSelectMaterialUi.js.map