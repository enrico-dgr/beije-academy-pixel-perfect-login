import enTraslation from "./translations/en.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import itTraslation from "./translations/it.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTraslation,
        },
        it: {
            translation: itTraslation,
        },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        // react already safes from xss
        // => https://www.i18next.com/translation-function/interpolation#unescape
        escapeValue: false,
    },
});

export default i18n;
