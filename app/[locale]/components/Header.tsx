import React from "react";
import { useTranslation } from "react-i18next";
import { FlagLanguage } from "./FlagLanguage";
import { SideBar } from "./SideBar";
import Link from "next/link";

export const Header: React.FC = () => {

    const { t } = useTranslation();

    return (  
        <>      
        <header className="sticky hidden md:block top-0 z-40 bg-white">
            <nav className="flex flex-row justify-center items-center gap-10 w-full h-24 text-primary">
                <Link href="/room">{t('habitaciones')}</Link>
                <Link href="/location">{t('ubicacion')}</Link>
                <Link href="/home" className="flex flex-col items-center gap-1">
                    <img className="w-12 h-12" src="/imgHostal.png" alt="logotipo" />
                    <span className="font-bold">HOSTAL ANA</span>
                </Link>
                <Link href="/gallery">{t('galeria')}</Link>
                <Link href="/contact">{t('contacto')}</Link>
            </nav>
            <FlagLanguage />
        </header>
        <div className="relative md:hidden">
            <SideBar />  
        </div>
        </>    
    )
}