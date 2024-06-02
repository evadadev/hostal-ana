'use client';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { WrapperPage } from "../components/WrapperPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const PoliticaPrivacidadPage = () => {

    useEffect(() => {
        document.title = t('pPrivacidad') + ' | Hostal Ana Nerja';
    }, [])

    const { t } = useTranslation();


    return(
            <WrapperPage>
                <div className="flex flex-col gap-4 top-28 p-4 lg:w-9/12 text-grey-ligth">
                    <Link href="/contact">
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" className="left-40 cursor-pointe"/> 
                    </Link>
                    <p className="text-secundary font-extrabold">{t('pPrivacidad')}</p>
                    <p>{t('pPrivacidad1')}</p>
                    <p>{t('pPrivacidad2')}</p>
                    <p>{t('pPrivacidad3')}</p>
                    <p>{t('pPrivacidad4')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad5')}</p>
                    <p>{t('pPrivacidad6')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad7')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad8')}</p>
                    <p>{t('pPrivacidad9')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad10')}</p>
                    <p>{t('pPrivacidad11')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad12')}</p>
                    <p>{t('pPrivacidad13')}</p>
                    <p>{t('pPrivacidad14')}</p>
                    <p>{t('pPrivacidad15')}</p>
                    <p>{t('pPrivacidad16')}</p>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">{t('pPrivacidad17')}</p>
                        <p>{t('pPrivacidad18')} </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">{t('pPrivacidad19')}</p>
                        <p>{t('pPrivacidad20')}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">{t('pPrivacidad21')}</p>
                        <p>{t('pPrivacidad22')}</p>
                    </div>
                    <p className="font-bold text-secundary">{t('pPrivacidad23')}</p>
                    <p>{t('pPrivacidad24')}</p>
                    <ul>
                        <li>{t('pPrivacidad25')}</li>
                        <li>{t('pPrivacidad26')}</li>
                        <li>{t('pPrivacidad27')}</li>
                        <li>{t('pPrivacidad28')}</li>
                        <li>{t('pPrivacidad29')}</li>
                        <li>{t('pPrivacidad30')}</li>
                        <li>{t('pPrivacidad31')}</li>
                    </ul>
                    <p className="font-bold text-secundary">{t('pPrivacidad32')}</p>
                    <p>{t('pPrivacidad33')}</p>
                    <p>{t('pPrivacidad34')}</p>
                    <p>{t('pPrivacidad35')}</p>
                    <p>{t('pPrivacidad36')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad37')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad38')}</p>
                    <p>{t('pPrivacidad39')}</p>
                    <ul>
                        <li>{t('pPrivacidad40')}</li>
                        <li>{t('pPrivacidad41')}</li>
                        <li>{t('pPrivacidad42')}</li>
                        <li>{t('pPrivacidad43')}</li>
                        <li>{t('pPrivacidad44')}</li>
                    </ul>
                    <p className="font-bold text-secundary">{t('pPrivacidad45')}</p>
                    <p>{t('pPrivacidad46')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad47')}</p>
                    <p>{t('pPrivacidad48')}</p>
                    <p>{t('pPrivacidad49')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad50')}</p>
                    <p>{t('pPrivacidad51')}</p>
                    <p>{t('pPrivacidad52')}</p>
                    <p className="font-bold text-secundary">{t('pPrivacidad53')}</p>
                    <p>{t('pPrivacidad54')}</p>
                    <p>{t('pPrivacidad55')}</p>
                </div>
            </WrapperPage>
    )
}

export default PoliticaPrivacidadPage