import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";
import { useTranslation } from "react-i18next";

export const HomePage: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = 'Hostal Ana Nerja'
    }, [])

    return (
        <Layout>
            <div>
                <div className="relative z-10  w-full h-96 bg-cover bg-no-repeat bg-center bg-[url(https://solaga.es/wp-content/uploads/2023/10/nerja-casco-antiguo-scaled-1.jpeg)]">
                </div>
                <article className=" p-5 text-grey-ligth">{t('textHome')}</article>
            </div>
        </Layout>
    )
}