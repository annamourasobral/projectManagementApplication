import React, { createContext, useState } from 'react';
import translation_en from './translations/en.json';
import translation_pt from './translations/pt.json';
import translation_es from './translations/es.json';

const TranslationContext = createContext();
export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState({});

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    const loadTranslations = (language) => {
        switch (language) {
            case 'en':
                setTranslations(translation_en);
                break;
            case 'pt':
                setTranslations(translation_pt);
                break;
            case 'es':
                setTranslations(translation_es);
                break;
            default:
                console.error(`Unsupported language ${language}`);
                break;
        }
    };

    const translate = (key) => {
        return translations[key] || key;
    };

    return (
        <TranslationContext.Provider
            value={{
                language,
                translations,
                handleChangeLanguage,
                loadTranslations,
                translate,
            }}
        >
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationContext;
