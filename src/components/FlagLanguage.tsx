import React, { useState } from "react";
import { ES, GB } from "country-flag-icons/react/1x1";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export const FlagLanguage: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
    };

    const openFlag = (lang: string,) => { 
        changeLanguage(lang)
        setIsOpen(false)
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (      
                <div className="absolute z-20 right-4 top-4 bg-white border border-gray-200 shadow-lg rounded">
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>
                        {currentLanguage === 'es' ? <ES className="w-4 h-4" /> : <GB className="w-4 h-4" />}
                        {currentLanguage === 'es' ? t('español') : t('ingles')}
                    </button>
                    {isOpen && (
                    <div >
                        {currentLanguage !== 'es' && (
                        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-800 hover:bg-gray-100" 
                            onClick={() => openFlag('es')}
                            disabled={currentLanguage === 'es'}>
                        <ES className="w-4 h-4" />{t('español')}</button>
                        )}
                        {currentLanguage !== 'en' && (

                        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-800 hover:bg-gray-100" 
                        onClick={() => openFlag('en')} disabled={currentLanguage === 'en'}>
                        <GB className="w-4 h-4"/>{t('ingles')}</button>
                        )}
                    </div>    
                    )}
                    </div>
    )
}