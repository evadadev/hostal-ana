import React from "react";
import { Layout } from "../layout/LayoutApp";
import { Map } from "../components/Map";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";

export const LocationPage: React.FC = () => {

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="La localización perfecta"/>
                <div className="text-grey-ligth w-9/12">
                    <p>El Hostal Ana es un encantador alojamiento situado a menos de 12 minutos a pie de la Playa de Burriana. Situado en el mismísimo corazón de Nerja, esta pensión está relativamente cerca del Museo de Nerja. La plaza Balcón de Europa se encuentra a 10 minutos andando del hotel y el aeropuerto Málaga se sitúa a 75 km. Los amantes de la naturaleza apreciarán la proximidad de la Playa El Salón, que está a 1 km de distancia. La ubicación a 2 km del Acueducto del Águila es una ventaja para los huéspedes que se alojen en el alojamiento. </p>
                    <p>Este hotel sencillo se encuentra a 6 minutos a pie de la playa más cercana, a 3 minutos a pie de las exposiciones hitóricas del Museo de Nerja y a 4 minutos a pie del parque Verano Azul.</p>
                    <p>El hotel cuenta con una terraza en la azotea con tumbonas y asientos a la sombra.</p>
                </div>
                <Map />                   
            </WrapperPage>
        </Layout>
    )
}