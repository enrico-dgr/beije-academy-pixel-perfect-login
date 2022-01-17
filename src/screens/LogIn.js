import "./logIn.css";

import React, { Component } from "react";

import Card from "../components/funcComponents/Card";
//Components
import InputText from "../components/funcComponents/InputText";

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            isUsernameValid: false,
            usernameErrorMessage: "",
            password: "",
            isPasswordValid: false,
            passwordErrorMessage: "",
        };
    }

    getUsernameErrorMessage = (text) => {
        if (text === "") {
            return "Enter username or email";
        }

        return "";
    };

    onBlurUsername = () => {
        let newState = {};

        newState.usernameErrorMessage = this.getUsernameErrorMessage(
            this.state.username
        );

        if (newState.usernameErrorMessage === "") {
            newState.isUsernameValid = true;
        }

        this.setState(newState);
    };

    onChangeUsername = (username) => {
        this.setState({ username });
    };

    onFocusUsername = () => {
        this.setState({ isUsernameValid: false, usernameErrorMessage: "" });
    };

    onClickXButtonUsername = () => {
        this.setState({ usernameErrorMessage: "" });
    };

    getPasswordErrorMessage = (text) => {
        if (text === "") {
            return "Enter password";
        }

        return "";
    };

    onBlurPassword = () => {
        let newState = {};

        newState.passwordErrorMessage = this.getPasswordErrorMessage(
            this.state.password
        );

        if (newState.passwordErrorMessage === "") {
            newState.isPasswordValid = true;
        }

        this.setState(newState);
    };

    onChangePassword = (password) => {
        this.setState({ password, isPasswordValid: false });
    };

    onFocusPassword = () => {
        this.setState({ isPasswordValid: false, passwordErrorMessage: "" });
    };

    onClickXButtonPassword = () => {
        this.setState({ passwordErrorMessage: "" });
    };

    render() {
        return (
            <Card className={"card-log-in"}>
                <InputText
                    errorMessage={this.state.usernameErrorMessage}
                    isValid={this.state.isUsernameValid}
                    name={"username"}
                    onBlur={this.onBlurUsername}
                    onChange={this.onChangeUsername}
                    onFocus={this.onFocusUsername}
                    onClickXButton={this.onClickXButtonUsername}
                    placeholder="username or email"
                    type={"text"}
                />
                <InputText
                    errorMessage={this.state.passwordErrorMessage}
                    isValid={this.state.isPasswordValid}
                    name={"pass"}
                    onBlur={this.onBlurPassword}
                    onChange={this.onChangePassword}
                    onFocus={this.onFocusPassword}
                    onClickXButton={this.onClickXButtonPassword}
                    placeholder="password"
                    type={"password"}
                />
            </Card>
        );
    }
}

export default LogIn;
