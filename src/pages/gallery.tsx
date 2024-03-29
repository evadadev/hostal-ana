import React from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";
import images from '../assets/images'

export const GaleriaPage: React.FC = () => {
    const [ isModalOpen, setIsModalOpen ] = React.useState(false);
    const [ imgModal, setImgModal ] = React.useState("");

    const openModal = (image: string) => { 
        setImgModal(image)
        setIsModalOpen(true)
    };

    const closeModal = () => setIsModalOpen(false);

    const photos = [
        {
            image: images.habitacionAna,
            id: '1'
        },
        {
            image: images.habitacionAna2,
            id: '2'
        },
        {
            image: images.habitacionJose,
            id: '3'
        },
        {
            image: images.habitacionJose2,
            id: '4'
        },
        {
            image: images.habitacionEva,
            id: '5'
        },
        {
            image: images.habitacion3,
            id: '6'
        },
        {
            image: images.habitacionDoble,
            id: '7'
        },
        {
            image: images.habitacionDoble2,
            id: '8'
        },
        {
            image: images.terraza,
            id: '9'
        },
        {
            image: images.patio,
            id: '10'
        },
        {
            image: images.aseo,
            id: '11'
        }
    ]

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Galería"/>
                <p className="text-grey-ligth w-9/12 text-justify">En nuestro hostal encontrarás todas las comodidades y entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España</p>
                <div className="grid grid-cols-3 gap-4 w-9/12 place-self-auto mt-5"> 
                {photos.map(photo => (<img src={photo.image} className="hover:opacity-50" onClick={() => openModal(photo.image)}/>))}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black-modal" onClick={closeModal} >
                            <img
                            className="flex w-[50%] " 
                            src={imgModal} 
                            alt="habitacion individual" />
                    </div>
                )}      
                </div>                  
            </WrapperPage>
        </Layout>
    )
}
