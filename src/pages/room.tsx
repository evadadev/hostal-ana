import React from "react";
import { Layout } from "../layout/LayoutApp";
import { Card } from "../components/Card";
import habitacion1 from '../assets/habitacion1.png'



export const HabitacionesPage: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-5 mt-10 items-center z-10 w-screen h-auto">
                <div className=" flex flex-col items-center text-2xl text-secundary w-9/12">Caracteristicas de las habitaciones</div>
                <hr className="h-1.5 w-32 mt-1 bg-primary"/>
                <Card name="Habitación individual" description="Las habitaciones son sencillas y disponen en algunos casos, balcón francés o terraza cerada." img={habitacion1}/>
                <Card name="Habitación doble" description="Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud." img={habitacion1}/>
            </div>
        </Layout>
    )
}