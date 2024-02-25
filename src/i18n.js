// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import uzTranslation from './locales/uz.json';
import ruTranslation from './locales/ru.json';

const resources = {
  en: { translation: enTranslation },
  uz: { translation: uzTranslation },
  ru: { translation: ruTranslation }
};

i18n
  .use(initReactI18next).init({
    debug:true,
    falbackLng:"ru",
    interpolation:{
      excapeValue:false,
    },
    resources:{
      ru:{
        translation:{
          "nav.about": "О нас",
          "nav.skills": "Навыки",
          "nav.projects": "Проекты",
          "nav.contact": "Контакты",
          "hero.greeting": "Привет",
          "hero.name": "Чарльз",
          "hero.role": "Фронтенд-разработчик",
          "hero.description": "Мы разрабатываем опыт простого взаимодействия с жизнью людей через веб и мобильные приложения...",
          "buttons.hire": "Нанять",
          "buttons.projects": "ПРОСМОТРЕТЬ МОИ ПРОЕКТЫ",
          "toggle.darkMode": "Переключить темный режим"
      }
    },
    uz:{
      translation:{
        

  "nav.about": "Men haqimda",
  "nav.skills": "Ko'nikmalar",
  "nav.projects": "Loyihalar",
  "nav.contact": "Aloqa",
  "hero.greeting": "Salom",
  "hero.name": "Charles",
  "hero.role": "Front-end Developer",
  "hero.description": "Insonlar hayotini Web va Mobil ilovalar orqali oddiyroq qilishga mo'ljallangan tajribalarini dizayn qilib, rivojlantiramiz...",
  "buttons.hire": "Ishga ol",
  "buttons.projects": "MENING LOYIHALARIMNI KO'R",
  "toggle.darkMode": "Tumani almashtirish"


    }
  }


  }
  });

export default i18n;
