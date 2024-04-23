import React from "react";
import { Link } from "react-router-dom";
import { switchroutes } from "../route/routes";
import { useTranslation } from "react-i18next";
import { FlagLanguage } from "./FlagLanguage";
import { SideBar } from "./SideBar";
import imgHostal from '../assets/images/imgHostal.png';

export const Header: React.FC = () => {

    const { t } = useTranslation();

    return (  
        <>      
        <header className="sticky hidden md:block top-0 z-40 bg-white">
            <nav className="flex flex-row justify-center items-center gap-10 w-full h-24 text-primary">
                <Link to={switchroutes.room}>{t('habitaciones')}</Link>
                <Link to={switchroutes.location}>{t('ubicacion')}</Link>
                <Link to={switchroutes.root} className="flex flex-col items-center gap-1">
                    <img className="w-12 h-12" src={imgHostal} alt="logotipo" />
                    <span className="font-bold">HOSTAL ANA</span>
                </Link>
                <Link to={switchroutes.gallery}>{t('galeria')}</Link>
                <Link to={switchroutes.contact}>{t('contacto')}</Link>
            </nav>
            <FlagLanguage />
        </header>
        <div className="relative md:hidden">
            <SideBar />  
        </div>
        </>    
    )
}