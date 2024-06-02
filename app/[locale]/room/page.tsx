'use client';
import React, { useEffect } from "react";
import { RoomCard } from "../components/RoomCard";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import { useTranslation } from "react-i18next";

const RoomsPage = () => {
    
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('habitaciones') + ' | Hostal Ana Nerja'
    }, [])

    const rooms = [
        {
            name: t('habitacionSimple'),
            description: t('despripcionHabSimple'),
            img: "/habitacion-eva-2.jpg"
        },
        {
            name: t('habitacionDoble'),
            description: t('despripcionHabDoble'),
            img: "habitacion-doble.jpg"
        },
        {
            name: t('habitacionDoble2'),
            description: t('descripcionHabDoble2'),
            img: "habitacion-jose2.jpg"
        }

    ]

    return (
            <WrapperPage>
                <TitlePage name={t('cabeceraHabitaciones')}/>
                {rooms.map(room => (
                    <RoomCard room={room}/>
                ))}
            </WrapperPage>
    )
}

export default RoomsPage