// import { useState } from "react";


const LanguageSwitch = ({ currentLanguage, onLanguageChange }) => {

  const languages = ['English', 'Spanish', 'French'];

  return (
    <div className="language-switch">
      <button>{currentLanguage}</button>
      <ul className="language-options">
        {languages.map((language) => (
          <li key={language} onClick={() => onLanguageChange(language)}>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default LanguageSwitch;