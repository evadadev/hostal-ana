import React from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";
import images from '../assets/images'

export const GaleriaPage: React.FC = () => {
    const [ isModalOpen, setIsModalOpen ] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Galería"/>
                <p className="text-grey-ligth w-9/12 text-justify">En nuestro hostal encontrarás todas las comodidades y entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España</p>
                <div className="grid grid-cols-3 gap-4 w-9/12 place-self-auto mt-5">
                    {isModalOpen && (  
                        <div className="fixed w-full h-full " onClick={closeModal}> 
                            <img className="hover:opacity-50" onClick={openModal} src={images.habitacionAna} alt="habitacion individual" />                
                        </div>                  
                        )}
                    <img className="hover:opacity-50" src={images.habitacionAna2} alt="habitacion individual" />         
                    <img className="hover:opacity-50" src={images.habitacionJose} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.habitacionJose2} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.habitacionEva} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.habitacion3} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.habitacionDoble} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.habitacionDoble2} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.terraza} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.patio} alt="habitacion individual" />                    
                    <img className="hover:opacity-50" src={images.aseo} alt="habitacion individual" />                   
                </div>
            </WrapperPage>
        </Layout>
    )
}