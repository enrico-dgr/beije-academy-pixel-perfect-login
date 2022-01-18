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

    const onClickLanguage = (lang) => () => {
        i18next.changeLanguage(lang);
    };

    return (
        <div className={"bg__login-page"}>
            <div className={"bg__gradient"}></div>
            <div className={"container__languages"}>
                <button
                    className="button-it"
                    onClick={onClickLanguage("it")}
                ></button>
                <button
                    className="button-en"
                    onClick={onClickLanguage("en")}
                ></button>
            </div>
            <LogIn t={t} />
            <ToastContainer />
        </div>
    );
};

export default App;
