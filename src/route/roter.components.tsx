import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchroutes } from "./routes";
import { HabitacionesPage } from "../pages/room";
import { UbicacionPage } from "../pages/location";
import { GaleriaPage } from "../pages/gallery";
import { ContactoPage } from "../pages/contact";
import { HomePage } from "../pages/home";

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchroutes.root} element={<HomePage />} />
                <Route path={switchroutes.room} element={<HabitacionesPage />} />
                <Route path={switchroutes.location} element={<UbicacionPage />} />
                <Route path={switchroutes.gallery} element={<GaleriaPage />} />
                <Route path={switchroutes.contact} element={<ContactoPage />} />
            </Routes>
        </Router>
    )
}