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
            indata: "0",
            hexdata: "",
            bindata: ""
        };
    }

    handleChange = e => {
        // console.log("yeet");
        if (e.target.value === "") {
            this.setState({
                indata: e.target.value,
                hexdata: "", //dec2hex(e.target.value),
                bindata: "" //dec2bin(e.target.value)
            });
        } else {
            this.setState({
                indata: e.target.value,
                hexdata: dec2hex(e.target.value),
                bindata: dec2bin(e.target.value)
            });
        }
    };
    render() {
        return (
            <React.Fragment>
                <form className="form">
                    <input
                        type="number"
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.indata}
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
