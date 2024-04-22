import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchroutes } from "./routes";
import { RoomsPage } from "../pages/room";
import { LocationPage } from "../pages/location";
import { GalleryPage } from "../pages/gallery";
import { ContactPage } from "../pages/contact";
import { HomePage } from "../pages/home";
import { PoliticaPrivacidadPage } from "../pages/politicaPrivacidad";

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchroutes.root} element={<HomePage />} />
                <Route path={switchroutes.room} element={<RoomsPage />} />
                <Route path={switchroutes.location} element={<LocationPage />} />
                <Route path={switchroutes.gallery} element={<GalleryPage />} />
                <Route path={switchroutes.contact} element={<ContactPage />} />
                <Route path={switchroutes.privacidad} element={<PoliticaPrivacidadPage />}/>
            </Routes>
        </Router>
    )
}