import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";
import { Map } from "../components/Map";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import { useTranslation } from "react-i18next";

export const LocationPage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('ubicacion') + ' | Hostal Ana Nerja';
    }, [])

    return (
        <Layout>
            <WrapperPage>
                <TitlePage name={t('cabeceraUbicaion')}/>
                <div className="text-grey-ligth md:w-9/12">
                    <p>{t('textUbicacion1')}</p>
                    <p>{t('textUbicacion2')}</p>
                    <p>{t('textUbicacion3')}</p>
                </div>
                <Map />                   
            </WrapperPage>
        </Layout>
    )
}