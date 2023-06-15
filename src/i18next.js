import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        resources: {
            uz: {
                translation: {
                    "maintitle": "Oziq-ovqatning yaxshi tanlovi yaxshi sarmoyadir",
                    'home': 'Bosh sahifa',
                    'about': 'Biz haqimizda',
                    'menu': 'Menyu',
                    'contact': 'Bog`lanish'
                }
            },

            qr: {
                translation: {
                    "maintitle": "Azıq-awqatti jaqsı tańlaw jaqsı investiciya bolıp tabıladı",
                    'home': 'Bas bet',
                    'about': 'Biz haqqimizda',
                    'menu': 'Menyu',
                    'contact': 'Baylanisiw'
                }
            },
            ru: {
                translation: {
                    "maintitle": "Хороший выбор продуктов питания — хорошие инвестиции",
                    'home': 'Главная',
                    'about': 'О нас',
                    'menu': 'Меню',
                    'contact': 'Контакты'
                }
            },

            en: {
                translation: {
                    "maintitle": "Good food choices are good investments",
                    'home': 'Home',
                    'about': 'About us',
                    'menu': 'Menu',
                    'contact': 'Contact'
                }
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    })
export default i18n