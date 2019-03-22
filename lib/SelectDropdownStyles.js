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
var ColorConstants_1 = require("./ColorConstants");
var styleControl = function (props) { return function (base) { return (__assign({}, base, { background: 'transparent', borderWidth: 0, borderBottom: getBorder(props.hasInputFocus), borderRadius: 0, boxShadow: 'none', marginRight: 25, '&:hover': {
        boxShadow: 'none',
        background: "linear-gradient(to bottom, " + ColorConstants_1.colorHover + " 0%, " + ColorConstants_1.colorHover + " 100%)",
        backgroundPosition: '0 100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 1px',
        transition: 'background-size .2s'
    } })); }; };
var getBorder = function (hasInputFocus) { return (hasInputFocus ? "solid 1px " + ColorConstants_1.colorFocus : "solid 1px " + ColorConstants_1.colorNoFocus); };
var styleValueContainer = function (props) { return function (base) { return (__assign({}, base, { padding: 0, marginLeft: -2, marginRight: !!props.selectProps && props.selectProps.isClearable ? 25 : 0, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' })); }; };
var styleIndicatorsContainer = function (base) { return (__assign({}, base, { position: 'absolute', right: 0, marginLeft: 8, marginRight: -25, backgroundColor: 'transparent', height: '100%' })); };
var styleClearIndicator = function (base) { return (__assign({}, base, { color: ColorConstants_1.colorClearNormal, margin: '0 4px 0 0', padding: 0, cursor: 'pointer', '&:hover': {
        color: ColorConstants_1.colorClearHover
    } })); };
var styleDropdownIndicator = function (base) { return (__assign({}, base, { margin: '0 0 0 4px', padding: 0, cursor: 'pointer' })); };
var styleMenuList = function (base) { return (__assign({}, base, { padding: 0 })); };
var styleOption = function (base) { return base; };
var styleContainer = function (base) { return base; };
var styleNoOptionsMessage = function (base) { return (__assign({}, base, { textAlign: 'left', color: '#ff8080' })); };
var styleMultiValueRemove = function (props) { return function (base) { return (__assign({}, base, { display: !!props.selectProps && props.selectProps.isDisabled ? 'none' : base.display })); }; };
exports.getStyles = function (props) { return ({
    container: styleContainer,
    control: styleControl(props),
    clearIndicator: styleClearIndicator,
    dropdownIndicator: styleDropdownIndicator,
    indicatorsContainer: styleIndicatorsContainer,
    menuList: styleMenuList,
    multiValueRemove: styleMultiValueRemove(props),
    noOptionsMessage: styleNoOptionsMessage,
    option: styleOption,
    valueContainer: styleValueContainer(props)
}); };
//# sourceMappingURL=SelectDropdownStyles.js.map