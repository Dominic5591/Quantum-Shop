// import { useState } from "react";
const LanguageSwitch = ({ setLocale }) => {
  const languages = ['English', 'Spanish', 'French'];

  return (
    <div className="language-switch">
      <button>{setLocale}</button>
      <ul className="language-options">
        {languages.map((language) => (
          <li key={language} onClick={() => setLocale(language)}>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default LanguageSwitch;