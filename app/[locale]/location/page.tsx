'use client';
import React, { useEffect } from "react";
import { Map } from "../components/Map";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import { useTranslation } from "react-i18next";

const LocationPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('ubicacion') + ' | Hostal Ana Nerja';
    }, [])

    return (
            <WrapperPage>
                <TitlePage name={t('cabeceraUbicaion')}/>
                <div className="text-grey-ligth md:w-9/12">
                    <p>{t('textUbicacion1')}</p>
                </div>
                <Map />                   
            </WrapperPage>
    )
}

export default LocationPage