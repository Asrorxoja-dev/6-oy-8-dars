import "./index.css"
import emoji from '../assets/emoji.png'
import group from '../assets/Group.png'
import { useState, useEffect } from "react";
import dark from '../assets/night.png'
import { useTranslation } from "react-i18next";


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
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

 

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, [18n.language]);


  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
 
  
  useEffect(() => {
    const savedLanguage = JSON.parse(localStorage.getItem('language'));
   
    if (savedLanguage !== null) {
      setLanguage(savedLanguage);
    }
  }, []);
      
  return (

    
    <>

<div className={`container ${darkMode ? 'dark-mode' : ''}`}>
<div className="container">
   
        <div className="header">
            <div className="nav">
                <ul>
                    <li><a href="#">{t("nav.about")}</a></li>
                    <li><a href="#">{t("nav.skills")}</a></li>
                    <li><a href="#">{t("nav.projects")}</a></li>
                    <li><a href="#">{t("nav.contact")}</a></li>
                    <button className="dark-night"  onClick={toggleDarkMode}> 
                    <img onClick={toggleDarkMode} width='80' src={dark} alt="darkMode" />
                    <span>{t("toggle.darkMode")}</span>

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
                   {t("hero.greeting")} <span><img width="90" src={emoji} alt="" /></span>
                    <br />  {t("hero.name")} <br /> {t("hero.role")}
                </h1> <br /> <br />

                <p>
                    {t(`hero.description`)}
                </p>

                <div className="buttons">
                    <button className="button1">{t("buttons.hire")}</button>
                    <button className="button2">{t("buttons.projects")}</button>
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