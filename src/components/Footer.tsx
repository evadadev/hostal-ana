import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {

    const { t } = useTranslation();

    return(
        <footer className="flex justify-center w-full h-24 gap-3 md:gap-28 bg-primary">
            <ul className="flex flex-col justify-center items-center text-xs md:text-base text-white">
                <li className="uppercase">{t('direccion')}</li>
                <li>Nerja, Málaga</li>
                <li>Calle de la Cruz, 62, 29780</li>
                
            </ul>
            <ul className="flex flex-col justify-center items-center text-xs md:text-base text-white">
                <li className="uppercase">{t('contacto')}</li>
                <li>hostalananerja@gmail.com</li>
                <li>+34 952 52 30 43</li>
            </ul>        
        </footer>
    )
}