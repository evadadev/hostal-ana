import React from "react";
// import {imgHostal} from './src/assets/imgHostal.pmg'

export const Header: React.FC = () => {

    return (
        <div>
              <div className="flex flex-row justify-center items-center gap-10 w-full h-24  text-orange-800">
                <div>Habitaciones</div>
                <div>Ubicación</div>
                <div className="flex flex-col items-center gap-1">
                    <img className="w-12 h-12" src="src/assets/imgHostal.png" alt="logotipo" />
                    <strong >HOSTAL ANA</strong>
                </div>
                <div>Galería</div>
                <div>Contactos</div>
              </div>
        </div>
    )
}