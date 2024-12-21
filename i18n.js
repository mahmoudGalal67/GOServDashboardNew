import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "welcome": "Welcome to my website",
                "description": "This is the description of the site in English."
            }
        },
        ar: {
            translation: {
                "welcome": "مرحبا بكم في موقعي",
                "description": "هذا هو وصف الموقع باللغة العربية."
            }
        }
    },
    lng: "en", // Default language
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;
