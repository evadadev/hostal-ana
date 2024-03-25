import React from "react";
import { Layout } from "../layout/LayoutApp";
import { RoomCard } from "../components/RoomCard";
import images from '../assets/images'
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";

export const HabitacionesPage: React.FC = () => {

    const rooms = [
        {
            name:"Habitación individual",
            description:"Las habitaciones son sencillas y disponen en algunos casos, balcón francés o terraza cerada.",
            img: images.habitacionAna
        },
        {
            name:"Habitación doble",
            description:"Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud.",
            img: images.habitacionDoble
        }

    ]

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Caracteristicas de las habitaciones"/>
                {rooms.map(room => (
                    <RoomCard room={room}/>
                ))}
            </WrapperPage>
        </Layout>
    )
}