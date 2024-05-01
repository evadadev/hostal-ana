"use client";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import './globals.css'

// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n'; // Asegúrate de que esta configuración esté disponible

interface Props {
    children: React.ReactNode;
}

const RootLayout = (props: Props) => {
    const { children } = props;

    return (
        <html lang="es">
            <body >
                {/* <I18nextProvider i18n={i18n}>
                    <main className="min-h-mainScrren">{children}</main>
                </I18nextProvider> */}
                <Header />
                <main className="min-h-mainScrren">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout