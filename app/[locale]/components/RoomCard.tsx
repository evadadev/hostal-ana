import React from "react";
import { Room } from "./room.vm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWifi, faTv, faFan, faBathtub, faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

interface Props {
    room: Room
}

export const RoomCard: React.FC<Props> = (props) => {
    const { room } = props;
    const { t } = useTranslation();

    return (
        <>
        <div className="bg-slate-50 flex flex-col gap-4 lg:w-9/12">
            <h3 className="text-secundary uppercase font-bold mt-5 mx-5">{room.name}</h3>
            <div className="flex flex-col-reverse gap-2 lg:gap-6 lg:flex-row mx-5 mb-5">
                <div className="flex flex-col gap-3">
                <p className="text-grey-ligth">{room.description}</p>
                
                <div className="text-grey-ligth grid grid-cols-1 gap-1 sm:grid-cols-2 lg:gap-5">
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faWifi} />
                        <p>{t('iconInternet')}</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faTv} />
                        <p>{t('iconTelevision')}</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faFan} />
                        <p>{t('iconAireAcondicionado')}</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faTemperatureArrowUp} />
                        <p>{t('iconCalefaccion')}</p>
                    </div>
                    <div className="flex flex-row gap-4 text-secundary">
                        <FontAwesomeIcon icon={faBathtub} />
                        <p>{t('iconBaño')}</p>
                    </div>
                </div>
                </div>
            <img src={room.img} alt="image-room" className="w-full lg:w-1/2"/>
            </div> 
        </div>
        </>
    )
}