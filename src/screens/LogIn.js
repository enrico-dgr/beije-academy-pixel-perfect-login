/* eslint-disable jsx-a11y/anchor-is-valid */
import "./logIn.css";

import React, { Component } from "react";

//Components
import Button from "../components/funcComponents/Button";
import Card from "../components/funcComponents/Card";
import GoogleIcon from "../assets/icon-google.webp";
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

    onClickSignIn = () => {
        this.onBlurUsername();
        this.onBlurPassword();
    };

    render() {
        return (
            <div className={"card-login-wrapper"}>
                <Card className={"card-login"}>
                    <h1 className={"title__login"}>Sign In</h1>
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

                    <Button
                        className={"button__sign-in"}
                        onClick={this.onClickSignIn}
                        label={"SIGN IN"}
                    />

                    <h2 className={"other-login"}>Or login with</h2>

                    <div className={"content__other-login"}>
                        <div className={"content__social-login"}>
                            <a href="#" className={"social-login"}>
                                <i
                                    class="fa fa-facebook"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>

                        <div className={"content__social-login"}>
                            <a href="#" className={"social-login"}>
                                <img src={GoogleIcon} alt="GOOGLE" />
                            </a>
                        </div>
                    </div>

                    <a href="#" className={"sign-up"}>
                        Sign Up
                    </a>
                </Card>
            </div>
        );
    }
}

export default LogIn;
