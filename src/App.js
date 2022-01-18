import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import LogIn from "./screens/LogIn";
import React from "react";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t } = useTranslation();

    const onClickIT = () => {
        i18next.changeLanguage("it");
    };

    const onClickEN = () => {
        i18next.changeLanguage("en");
    };

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
};

export default App;
