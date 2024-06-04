import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './globals.css'

interface Props {
    children: React.ReactNode;
}

const RootLayout = (props: Props) => {
    const { children } = props;

    return (
        <html lang="es">
            <body >
                <Header />
                <main className="min-h-mainScrren">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout