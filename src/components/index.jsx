import "./index.css"
import emoji from '../assets/emoji.png'
import group from '../assets/Group.png'
import { useState, useEffect } from "react";
import dark from '../assets/night.png'
import { useTranslation } from "react-i18next";
import i18n from "../i18n";







function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const { t, i18n } = useTranslation();
    
    const toggleDarkMode = () => {  
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };


  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);
  
      
  return (

    
    <>

<div className={`container ${darkMode ? 'dark-mode' : ''}`}>
<div className="container">
   
        <div className="header">
            <div className="nav">
                <ul>
                    <li><a href="#">{t("About Me")}</a></li>
                    <li><a href="#">{t("Skills")}</a></li>
                    <li><a href="#">{t("Project")}</a></li>
                    <li><a href="#">{t("Contact")}</a></li>
                    <button className="dark-night"  onClick={toggleDarkMode}> 
                    <img onClick={toggleDarkMode} width='80' src={dark} alt="darkMode" />
                    <span>{t("dark mode")}</span>

                    </button>
                    <div className="language-selector">
              
              <select
                id="languageSelect"
                onChange={changeLanguage}
                value={i18n.language}
              >
               
               <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
              
               
              </select>
            </div>

                </ul>
            </div>
        
        </div>
        <div className="hero">
            <div className="hero-text">
                <h1>
                   {t("Hi")} <span><img width="90" src={emoji} alt="" /></span>
                    <br />  {t(" I’m Charles,")} <br /> {t("Front-end Developer")}
                </h1> <br /> <br />

                <p>
                    {t(`                I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with Figma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.`)}
                </p>

                <div className="buttons">
                    <button className="button1">{t("HIRE ME")}</button>
                    <button className="button2">{t("SEE MY PROJECTS")}</button>
                </div>
               
            </div>
            <div className="hero-img">
                <img width="500" height="590" src={group} alt="" />
            </div>
        </div>
    </div>
       
</div>

  
    </>
  )
}

export default Portfolio