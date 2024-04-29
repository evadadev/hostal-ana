'use client';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = 'Hostal Ana Nerja'
    }, [])

    return (
            <div>
                <div className="static w-full h-96 bg-cover bg-no-repeat bg-center bg-[url(https://solaga.es/wp-content/uploads/2023/10/nerja-casco-antiguo-scaled-1.jpeg)]">
                </div>
                <article className="flex flex-col  p-5 gap-3 text-grey-ligth">
                    <p className="text-base md:text-xl">{t('textHome1')}</p>
                    <p>{t('textHome2')}</p>
                    <p>{t('textHome3')}</p>
                    <p>{t('textHome4')}</p>
                    <p>{t('textHome5')}</p> 
                </article>
            </div>
    )
}

export default HomePage