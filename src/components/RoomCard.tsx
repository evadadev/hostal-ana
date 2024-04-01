import React from "react";
import { Room } from "./room.vm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWifi, faRadio, faTv, faFan, faPhone, faBathtub } from "@fortawesome/free-solid-svg-icons";


interface Props {
    room: Room
}

export const RoomCard: React.FC<Props> = (props) => {
    const { room } = props;

    return (
        <div className=" bg-slate-50 w-10/12 h-full flex flex-row p-10">
            <div className="flex flex-col gap-6 w-3/5">
                <h3 className="text-secundary uppercase font-bold">{room.name}</h3>
                <p className="text-grey-ligth">{room.description}                
                </p>
                <div className="text-grey-ligth grid grid-cols-2 gap-5">
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faWifi} />
                        <p> Internet Wifi gratis</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                    <FontAwesomeIcon icon={faRadio} />
                        <p>Hilo musical</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faTv} />
                        <p>Televisión por satélite</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faFan} />
                        <p>Aire acondicionado</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>Teléfono</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faBathtub} />
                        <p>Baño privado</p>
                    </div>
                </div>
            </div>
            <img src={room.img} alt="image-room" className="w-2/5 ml-6"/>
        </div>
    )
}