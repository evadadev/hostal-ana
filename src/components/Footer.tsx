import React from "react";

export const Footer: React.FC = () => {

    return(
        <div>
        <div className=" flex  fixed justify-center w-full h-32 bg-yellow-700">
            <ul className="flex flex-col justify-center items-center p-5 gap-0 text-white">
                <li>DIRECCIÓN</li>
                <li>Nerja, Málaga</li>
                <li>Calle de la Cruz, 62, 29780</li>
                
            </ul>
            <ul className="flex flex-col justify-center items-center p-5 gap-0 text-white">
                <li>CONTACTO</li>
                <li>Hostalananerja@gmail.com</li>
                <li>+34 952 52 30 43</li>
            </ul>
            <ul className="flex flex-col justify-center items-center p-5 gap-0 text-white">
                <li className="flex flex-row ">
                    <img className="w-12 h-12 " src="src/assets/imgHostal.png" alt="logotipo" />
                    <span className="font-bold p-3">HOSTAL ANA</span>
                </li>
            </ul>
        </div>
        </div>
    )
}