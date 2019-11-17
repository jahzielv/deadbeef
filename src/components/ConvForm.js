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
            indata: "",
            hexdata: "",
            bindata: ""
        };
    }

    handleChange = e => {
        // console.log("yeet");
        this.setState({
            indata: e.target.value,
            hexdata: dec2hex(e.target.value),
            bindata: dec2bin(e.target.value)
        });
    };
    render() {
        return (
            <React.Fragment>
                <form>
                    <input
                        type="text"
                        className="input"
                        onChange={this.handleChange}
                        value={this.state.indata}
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
