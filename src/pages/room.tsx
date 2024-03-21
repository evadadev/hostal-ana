import React from "react";
import { Layout } from "../layout/LayoutApp";
import { RoomCard } from "../components/RoomCard";
import habitacion1 from '../assets/habitacion1.png'
import habitacionAna from '../assets/habitacion-ana.jpg'
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";

export const HabitacionesPage: React.FC = () => {

    const rooms = [
        {
            name:"Habitación individual",
            description:"Las habitaciones son sencillas y disponen en algunos casos, balcón francés o terraza cerada.",
            img: habitacionAna
        },
        {
            name:"Habitación doble",
            description:"Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud.",
            img: habitacion1
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