import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";

export const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Hostal Ana Nerja'
    }, [])

    return (
        <Layout>
            <div>
                <div className="relative z-10  w-full h-96 bg-cover bg-no-repeat bg-center bg-[url(https://solaga.es/wp-content/uploads/2023/10/nerja-casco-antiguo-scaled-1.jpeg)]">
                </div>
                <article className=" p-5 text-grey-ligth">Teniendo WiFi en toda la propiedad, el Hostal Ana - Adults Recommended Nerja, de 2 estrellas, está a menos de 12 minutos a pie de la Playa de Burriana.
                    Situado en el mismísimo corazón de Nerja, esta pensión está relativamente cerca del Museo de Nerja. La plaza Balcón de Europa se encuentra a 10 minutos andando del hotel y el aeropuerto Málaga se sitúa a 75 km. Los amantes de la naturaleza apreciarán la proximidad de la Playa El Salón, que está a unos 1 km de distancia. La ubicación a 2 km del Acueducto del Águila es una ventaja para los huéspedes que se alojen en el alojamiento. El Hostal Ana - Adults Recommended está bien conectado con numerosos lugares de interés, a poca distancia andando de la parada de autobús la Fuente Hostal Ermita.</article>
            </div>
        </Layout>
    )
}