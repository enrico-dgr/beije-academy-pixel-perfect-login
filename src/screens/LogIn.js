/* eslint-disable jsx-a11y/anchor-is-valid */
import "./logIn.css";

import React, { Component } from "react";

//Components
import Button from "../components/funcComponents/Button";
import Card from "../components/funcComponents/Card";
import GoogleIcon from "../assets/icon-google.webp";
import InputText from "../components/funcComponents/InputText";
import { toast } from "react-toastify";

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.t = this.props.t;

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
            return this.props.t("empty username");
        }
        const strongRegex = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (text.includes("@") && strongRegex.test(text) === false) {
            const message = this.props.t("invalid email");
            return message;
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
        toast.error(this.state.usernameErrorMessage, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({ usernameErrorMessage: "" });
    };

    getPasswordErrorMessage = (text) => {
        if (text === "") {
            return this.props.t("empty password");
        }
        const strongRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        if (strongRegex.test(text) === false) {
            const message = this.props.t("invalid password");
            return message;
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
        toast.error(this.state.passwordErrorMessage, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({ passwordErrorMessage: "" });
    };

    onClickSignIn = () => {
        const usernameErrorMessage = this.getUsernameErrorMessage(
            this.state.username
        );

        if (usernameErrorMessage !== "") {
            toast.error(usernameErrorMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        const passwordErrorMessage = this.getPasswordErrorMessage(
            this.state.password
        );

        if (passwordErrorMessage !== "") {
            toast.error(passwordErrorMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    render() {
        return (
            <div className={"card-login-wrapper"}>
                <Card className={"card-login"}>
                    <h1 className={"title__login"}>
                        {this.props.t("sign in")}
                    </h1>
                    <InputText
                        errorMessage={this.state.usernameErrorMessage}
                        isValid={this.state.isUsernameValid}
                        name={"username"}
                        onBlur={this.onBlurUsername}
                        onChange={this.onChangeUsername}
                        onFocus={this.onFocusUsername}
                        onClickXButton={this.onClickXButtonUsername}
                        placeholder={this.props.t("username-placeholder")}
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
                        label={this.props.t("sign in")}
                    />

                    <h2 className={"other-login"}>
                        {this.props.t("other-login")}
                    </h2>

                    <div className={"content__other-login"}>
                        <div className={"content__social-login"}>
                            <a href="#" className={"social-login"}>
                                <i
                                    className="fa fa-facebook"
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
                        {this.props.t("sign up")}
                    </a>
                </Card>
            </div>
        );
    }
}

export default LogIn;
