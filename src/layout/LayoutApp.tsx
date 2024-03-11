import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Latyout: React.FC = () => {

    return (
        <div className="w-screen h-screen">
        <Header />
        <Main />
        <Footer />
        </div>
    )
}