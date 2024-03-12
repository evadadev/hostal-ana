import React from "react";
import { Link } from "react-router-dom";
import { switchroutes } from "../route/routes";

export const Header: React.FC = () => {

    return (        
        <div className="flex flex-row justify-center items-center gap-10 w-full h-24  text-orange-800">
            <Link to={switchroutes.room}>Habitaciones</Link>
            <Link to={switchroutes.location}>Ubicación</Link>
            <Link to={switchroutes.root} className="flex flex-col items-center gap-1">
                <img className="w-12 h-12" src="src/assets/imgHostal.png" alt="logotipo" />
                <span className="font-bold">HOSTAL ANA</span>
            </Link>
            <Link to={switchroutes.gallery}>Galería</Link>
            <Link to={switchroutes.contact}>Contactos</Link>
        </div>
    )
}