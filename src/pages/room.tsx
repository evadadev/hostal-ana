import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";
import { RoomCard } from "../components/RoomCard";
import images from '../assets/images'
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import { useTranslation } from "react-i18next";

export const RoomsPage: React.FC = () => {
    
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('habitaciones') + ' | Hostal Ana Nerja'
    }, [])

    const rooms = [
        {
            name: t('habitacionSimple'),
            description: t('despripcionHabSimple'),
            img: images.habitacionAna
        },
        {
            name: t('habitacionDoble'),
            description: t('despripcionHabDoble'),
            img: images.habitacionDoble
        }

    ]

    return (
        <Layout>
            <WrapperPage>
                <TitlePage name={t('cabeceraHabitaciones')}/>
                {rooms.map(room => (
                    <RoomCard room={room}/>
                ))}
            </WrapperPage>
        </Layout>
    )
}