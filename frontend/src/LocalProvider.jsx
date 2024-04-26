import { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

const LocaleContext = createContext();


export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const messages = {
    en: {
      greeting: 'Hello, sign in',
    },
    es: {
      greeting: 'Hola, inicia sesión',
    },
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useLocale = () =>  {
  return useContext(LocaleContext);
};


