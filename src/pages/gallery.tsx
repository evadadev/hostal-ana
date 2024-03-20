import React from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";

export const GaleriaPage: React.FC = () => {

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Galería"/>
            </WrapperPage>
        </Layout>
    )
}