import "./App.css";

import React, { Component } from "react";

import InputText from "./components/funcComponents/InputText";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            usernameErrorMessage: "",
        };
    }

    onChangeUsername = (username) => {
        let newState = {};

        if (username === "") {
            newState.usernameErrorMessage = "Enter username or email";
        }

        this.setState(newState);
    };

    render() {
        return (
            <div className="page">
                <InputText
                    placeholder="username or email"
                    errorMessage={this.state.usernameErrorMessage}
                    onChange={this.onChangeUsername}
                />
            </div>
        );
    }
}

export default App;
