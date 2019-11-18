import React, { Component } from "react";
import anyBase from "any-base";
import "../App.css";

const dec2hex = anyBase(anyBase.DEC, anyBase.HEX);
const dec2bin = anyBase(anyBase.DEC, anyBase.BIN);

class ConvForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            decdata: "decimal",
            hexdata: "hexadecimal",
            bindata: "binary"
        };
    }

    handleChange = e => {
        // console.log("yeet");
        if (e.target.value === "") {
            this.setState({
                decdata: "decimal",
                hexdata: "hexadecimal", //dec2hex(e.target.value),
                bindata: "binary" //dec2bin(e.target.value)
            });
        } else {
            this.setState({
                decdata: e.target.value,
                hexdata: dec2hex(e.target.value),
                bindata: dec2bin(e.target.value)
            });
        }
    };

    handleClick = e => {
        if (this.state.decdata === "decimal") {
            this.setState({ decdata: "" });
        }
    };
    focusOut = e => {
        if (this.state.decdata === "") {
            this.setState({ decdata: "decimal" });
        }
    };
    render() {
        return (
            <React.Fragment>
                <form className="form">
                    <input
                        type="text"
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.decdata}
                        onClick={this.handleClick}
                        onBlur={this.focusOut}
                        autoFocus
                    />
                    <input
                        type="text"
                        className="input"
                        readOnly
                        value={this.state.hexdata}
                    />
                    <input
                        type="text"
                        className="input"
                        readOnly
                        value={this.state.bindata}
                    />
                </form>
            </React.Fragment>
        );
    }
}

export default ConvForm;
