import React from "react";

export const Footer: React.FC = () => {

    return(
        <footer className=" flex justify-center w-full h-32 gap-28 mt-6 bg-yellow-700">
            <ul className="flex flex-col justify-center items-center text-white">
                <li>DIRECCIÓN</li>
                <li>Nerja, Málaga</li>
                <li>Calle de la Cruz, 62, 29780</li>
                
            </ul>
            <ul className="flex flex-col justify-center items-center text-white">
                <li>CONTACTO</li>
                <li>Hostalananerja@gmail.com</li>
                <li>+34 952 52 30 43</li>
            </ul>
            <ul className="flex flex-col justify-center items-center text-white">
                <li className="flex flex-row ">
                    <img className="w-12 h-12 " src="src/assets/imgHostal.png" alt="logotipo" />
                    <span className="font-bold p-3">HOSTAL ANA</span>
                </li>
            </ul>
        </footer>
    )
}