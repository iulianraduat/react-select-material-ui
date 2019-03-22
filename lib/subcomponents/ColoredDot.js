"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var getStyle = function (color) { return ({
    display: 'inline-block',
    backgroundColor: color,
    width: 11,
    height: 11,
    borderRadius: '100%',
    margin: '0 5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'
}); };
var ColoredDot = function (props) { return (React.createElement("div", { style: getStyle(props.color) })); };
exports.default = ColoredDot;
//# sourceMappingURL=ColoredDot.js.map