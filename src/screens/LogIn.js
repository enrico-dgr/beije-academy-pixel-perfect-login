import React, { Component } from "react";
import "./logIn.css";

//Components
import Button from "../components/funcComponents/Button";
import Card from "../components/funcComponents/Card"

class LogIn extends Component {

    constructor(props) {
        super(props)

        this.state = {};
    }

    onClickSignIn = () => {
    }

    render() {
        return (
            <Card
                className={"card-log-in"}>
                <Button
                    className={"button__sign-in"}
                    onClick={this.onClickSignIn}
                >
                    SIGN IN
                </Button>
            </Card>
        )
    }
}

export default LogIn;
