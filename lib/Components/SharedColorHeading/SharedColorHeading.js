"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class SharedColorHeading extends React.PureComponent {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "This is Not working heading with color: ",
                this.props.color,
                " ")));
    }
}
exports.default = SharedColorHeading;
//# sourceMappingURL=SharedColorHeading.js.map