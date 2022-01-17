import "./logIn.css";

import React, { Component } from "react";

import Button from "../components/funcComponents/Button";
import Card from "../components/funcComponents/Card";
//Components
import InputText from "../components/funcComponents/InputText";

class LogIn extends Component {
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

    onClickSignIn = () => {};

    render() {
        return (
            <Card className={"card-log-in"}>
                <InputText
                    placeholder="username or email"
                    errorMessage={this.state.usernameErrorMessage}
                    onChange={this.onChangeUsername}
                />
                <Button
                    className={"button__sign-in"}
                    onClick={this.onClickSignIn}
                >
                    SIGN IN
                </Button>
            </Card>
        );
    }
}

export default LogIn;
