import React, { Component } from "react";
import "./App.css";
import "./components/ConvForm";
import ConvForm from "./components/ConvForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <header className="App-header">
                        <h1>Hexx</h1>
                    </header>
                    <ConvForm />
                </div>
            </div>
        );
    }
}

export default App;
