import React, { Component } from "react";
import anyBase from "any-base";
import "../App.css";

const dec2hex = anyBase(anyBase.DEC, anyBase.HEX);
const dec2bin = anyBase(anyBase.DEC, anyBase.BIN);
const hex2dec = anyBase(anyBase.HEX, anyBase.DEC);
const hex2bin = anyBase(anyBase.HEX, anyBase.BIN);
const bin2dec = anyBase(anyBase.BIN, anyBase.DEC);
const bin2hex = anyBase(anyBase.BIN, anyBase.HEX);

class ConvForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            decdata: "decimal",
            hexdata: "hexadecimal",
            bindata: "binary",
            currConv: []
        };
    }

    handleDecChange = e => {
        // console.log("yeet");
        if (this.decInputCheck(e.target.value)) {
            if (e.target.value === "") {
                this.setState({
                    decdata: "decimal",
                    hexdata: "hexadecimal", //dec2hex(e.target.value),
                    bindata: "binary" //dec2bin(e.target.value)
                });
            } else {
                this.setState({
                    decdata: e.target.value,
                    hexdata: this.state.currConv[0](e.target.value), //dec2hex(e.target.value),
                    bindata: this.state.currConv[1](e.target.value) //dec2bin(e.target.value)
                });
            }
        }
    };

    handleHexChange = e => {
        // console.log("yeet");
        if (this.hexInputCheck(e.target.value)) {
            if (e.target.value === "") {
                this.setState({
                    decdata: "decimal",
                    hexdata: "hexadecimal", //dec2hex(e.target.value),
                    bindata: "binary" //dec2bin(e.target.value)
                });
            } else {
                this.setState({
                    decdata: this.state.currConv[0](e.target.value), //dec2hex(e.target.value),
                    hexdata: e.target.value,
                    bindata: this.state.currConv[1](e.target.value) //dec2bin(e.target.value)
                });
            }
        } else {
            console.log("nope");
        }
    };

    handleBinChange = e => {
        // console.log("yeet");
        if (this.binaryInputCheck(e.target.value)) {
            if (e.target.value === "") {
                this.setState({
                    decdata: "decimal",
                    hexdata: "hexadecimal", //dec2hex(e.target.value),
                    bindata: "binary" //dec2bin(e.target.value)
                });
            } else {
                this.setState({
                    decdata: this.state.currConv[0](e.target.value), //dec2bin(e.target.value)
                    hexdata: this.state.currConv[1](e.target.value), //dec2hex(e.target.value),
                    bindata: e.target.value
                });
            }
        } else {
            console.log("binary decimal only!");
        }
    };

    handleDecClick = e => {
        if (this.state.decdata === "decimal") {
            this.setState({ decdata: "", currConv: [dec2hex, dec2bin] });
        } else {
            this.setState({ currConv: [dec2hex, dec2bin] });
        }
    };

    handleHexClick = e => {
        if (this.state.hexdata === "hexadecimal") {
            this.setState({ hexdata: "", currConv: [hex2dec, hex2bin] });
        } else {
            this.setState({ currConv: [hex2dec, hex2bin] });
        }
    };

    handleBinClick = e => {
        if (this.state.bindata === "binary") {
            this.setState({ bindata: "", currConv: [bin2dec, bin2hex] });
        } else {
            this.setState({ currConv: [bin2dec, bin2hex] });
        }
    };

    focusOutDec = e => {
        if (this.state.decdata === "") {
            this.setState({ decdata: "decimal" });
        }
    };

    focusOutHex = e => {
        if (this.state.hexdata === "") {
            this.setState({ hexdata: "hexadecimal" });
        }
    };

    focusOutBin = e => {
        if (this.state.bindata === "") {
            this.setState({ bindata: "binary" });
        }
    };

    decInputCheck = str => {
        return /^(\d*)?\d+$/.test(str) || str === "";
    };

    hexInputCheck = str => {
        return /^[0-9a-f]+$/.test(str) || str === "";
    };

    binaryInputCheck = str => {
        return /^[0-1]{1,}$/.test(str) || str === "";
    };

    render() {
        return (
            <React.Fragment>
                <form className="form">
                    <input
                        type="text"
                        className="input"
                        value={this.state.decdata}
                        onChange={this.handleDecChange}
                        onClick={this.handleDecClick}
                        onBlur={this.focusOutDec}
                        // autoFocus
                    />
                    <input
                        type="text"
                        className="input"
                        // readOnly
                        value={this.state.hexdata}
                        onChange={this.handleHexChange}
                        onClick={this.handleHexClick}
                        onBlur={this.focusOutHex}
                    />
                    <input
                        type="text"
                        className="input"
                        // readOnly
                        value={this.state.bindata}
                        onChange={this.handleBinChange}
                        onClick={this.handleBinClick}
                        onBlur={this.focusOutBin}
                    />
                </form>
            </React.Fragment>
        );
    }
}

export default ConvForm;
