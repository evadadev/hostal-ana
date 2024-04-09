import React from "react";
import { Link } from "react-router-dom";
import { switchroutes } from "../route/routes";
import { useTranslation } from "react-i18next";
import { FlagLanguage } from "./FlagLanguage";

export const Header: React.FC = () => {

    const { t } = useTranslation();

    return (  
        <header >
            <nav className="flex flex-row justify-center items-center gap-10 w-full h-24  text-primary">
                <Link to={switchroutes.room}>{t('habitaciones')}</Link>
                <Link to={switchroutes.location}>{t('ubicacion')}</Link>
                <Link to={switchroutes.root} className="flex flex-col items-center gap-1">
                    <img className="w-12 h-12" src="src/assets/imgHostal.png" alt="logotipo" />
                    <span className="font-bold">HOSTAL ANA</span>
                </Link>
                <Link to={switchroutes.gallery}>{t('galeria')}</Link>
                <Link to={switchroutes.contact}>{t('contacto')}</Link>
            </nav>
            <FlagLanguage />
        </header>      
    )
}