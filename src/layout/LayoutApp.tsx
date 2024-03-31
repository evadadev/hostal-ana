import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}