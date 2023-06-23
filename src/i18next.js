import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: {
                translation: {
                    "maintitle": "Oziq-ovqatning yaxshi tanlovi yaxshi sarmoyadir",
                    'home': 'Bosh sahifa',
                    'about': 'Biz haqimizda',
                    'menu': 'Menyu',
                    'contact': 'Bog`lanish',
                    'order': 'Buyirtma berish',
                    'mainp': 'Simvolizmga kuchli ehtiyoj bor va bu arxitekturada bo`lishi kerakligini anglatadi inson qalbiga yoqadigan narsa.'

                }
            },

            qr: {
                translation: {
                    "maintitle": "Azıq-awqatti jaqsı tańlaw jaqsı investiciya bolıp tabıladı",
                    'home': 'Bas bet',
                    'about': 'Biz haqqimizda',
                    'menu': 'Menyu',
                    'contact': 'Baylanisiw',
                    'order': 'Buyirtpa beriw',
                    'mainp': 'Simvolizmga kúshli mútajlik bar jáne bul arxitekturada bolıwı kerekligini ańlatadı insan kewiline yoqadigan zat.'
                }
            },
            ru: {
                translation: {
                    "maintitle": "Хороший выбор продуктов питания — хорошие инвестиции",
                    'home': 'Главная',
                    'about': 'О нас',
                    'menu': 'Меню',
                    'contact': 'Контакты',
                    'order': 'Заказать сейчас',
                    'mainp': 'Существует острая потребность в символизме, а это значит, что архитектура должна иметь то, что взывает к человеческому сердцу.'
                }
            },

            en: {
                translation: {
                    "maintitle": "Good food choices are good investments",
                    'home': 'Home',
                    'about': 'About us',
                    'menu': 'Menu',
                    'contact': 'Contact',
                    'order': 'Order Now',
                    'mainp': 'There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.'
                }
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    })
export default i18n