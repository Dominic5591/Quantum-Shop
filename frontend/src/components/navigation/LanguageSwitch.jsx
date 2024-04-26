import { useLocale } from '../../LocalProvider';
const LanguageSwitch = () => {
  const { locale, setLocale } = useLocale();
  const languages = ['en', 'es', 'fr'];

  return (
    <div className="language-switch">
      <button>{locale}</button>
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
