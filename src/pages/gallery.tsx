import React from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";
import habitacion1 from '../assets/habitacion1.png'

export const GaleriaPage: React.FC = () => {

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Galería"/>
                <p className="text-grey-ligth w-9/12 text-justify">En nuestro hostal encontrarás todas las comodidades y entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España</p>
                <div className="grid grid-cols-3 gap-4 w-9/12 place-self-auto mt-5">
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />         
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={habitacion1} alt="habitacion individual" />                    
                </div>
            </WrapperPage>
        </Layout>
    )
}