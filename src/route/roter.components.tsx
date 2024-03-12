import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchroutes } from "./routes";
import { HabitacionesPage } from "../pages/habitaciones";
import { UbicacionPage } from "../pages/ubicacion";
import { GaleriaPage } from "../pages/galeria";
import { ContactoPage } from "../pages/contactos";
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