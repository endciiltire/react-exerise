import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("es");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    const texts = {
        es: {
            button: "Switch to English",
            greeting: "¡Hola!",
        },

        en: {
            button: "Switch to Spanish",
            greeting: "Hello!",
        },
    };

    return (
        <LanguageContext.Provider
            value={{
                texts: texts[language],
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}