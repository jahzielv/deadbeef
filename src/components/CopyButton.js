import React, { Component } from "react";
import classNames from "classnames";
import "../buttons/main.css";

// Button for copying to clipboard
class CopyButton extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    copyToClipboard = () => {
        const el = document.createElement("textarea");
        el.value = this.props.copyValue;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    render() {
        return (
            <React.Fragment>
                <section class="theta">
                    <button
                        type="button"
                        className={classNames(
                            "btn",
                            `btn-${this.props.btnstyle}`,
                            "btn-sm"
                        )}
                        onClick={this.copyToClipboard}
                    >
                        Copy
                    </button>
                </section>
            </React.Fragment>
        );
    }
}
export default CopyButton;
