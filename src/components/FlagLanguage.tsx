import React, { useState } from "react";
import { ES, GB } from "country-flag-icons/react/1x1";
import i18n from "../i18n";

export const FlagLanguage: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    };

    return (
                <div className="absolute z-20 right-4 top-4 bg-white border border-gray-200 shadow-lg rounded">
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"  onClick={() => changeLanguage('es')} disabled={currentLanguage === 'es'}>
                        <ES className="w-4 h-4" />
                        Español</button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>
                        <GB  className="w-4 h-4"/>
                        English</button>
                </div>
    )
}
