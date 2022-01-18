import "./App.css";

import React, { Component } from "react";

import LogIn from "./screens/LogIn";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { t } = useTranslation();

    const onClickIT = () => {
        i18next.changeLanguage("it");
    }

    const onClickEN = () => {
        i18next.changeLanguage("en");
    }

    return (
        <div className={"bg__login-page"}>
            <div className={"bg__gradient"}></div>
            <div className={"container__languages"}>
                <button className="button-it" onClick={onClickIT}></button>
                <button className="button-en" onClick={onClickEN}></button>
            </div>
            <LogIn t={t} />
            <ToastContainer />
        </div>
    );
}

export default App;
