import "./logIn.css";
import GoogleIcon from "../assets/icon-google.webp"

import React, { Component } from "react";

//Components
import Button from "../components/funcComponents/Button";
import Card from "../components/funcComponents/Card";
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

    onClickSignIn = () => { };

    render() {
        return (
            <Card className={"card-login"}>
                <h1 className={"title__login"}>SIGN IN</h1>
                <InputText
                    className={"input__login"}
                    placeholder="username or email"
                    type={"text"}
                    errorMessage={this.state.usernameErrorMessage}
                    onChange={this.onChangeUsername}
                />
                <InputText
                    className={"input__login"}
                    placeholder="Password"
                    type={"password"}
                    errorMessage={this.state.usernameErrorMessage}
                    onChange={this.onChangeUsername}
                />
                <Button
                    className={"button__sign-in"}
                    onClick={this.onClickSignIn}
                    label={"SIGN IN"}
                >
                </Button>

                <h2 className={"other-login"}>Or login with</h2>

                <div className={"content__other-login"}>
                    <div className={"content__social-login"}>
                        <a href="#" className={"social-login"}>
                            <i className="fb-login">&#102;</i>
                        </a>
                    </div>

                    <div className={"content__social-login"}>
                        <a href="#" className={"social-login"}>
                            <img src={GoogleIcon} alt="GOOGLE" />
                        </a>
                    </div>
                </div>

                <a href="#" className={"sign-up"}>Sign up</a>
            </Card>
        );
    }
}

export default LogIn;
