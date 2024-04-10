import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";
import images from '../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

interface imageInterface  {
    id: number,
    image: string
}

export const GalleryPage: React.FC = () => {

    const [ isModalOpen, setIsModalOpen ] = React.useState(false);
    const [ imgModal, setImgModal ] = React.useState({id: 0, image: ""});
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('galeria') + ' | Hostal Ana Nerja';
    }, [])

    const openModal = (photo: imageInterface) => { 
        setImgModal(photo)
        setIsModalOpen(true)
    };

    const closeModal = () => setIsModalOpen(false);

    const nextImg = () => {
        const id = imgModal.id + 1
        const img = photos.find(photo => photo.id === id)

        if(img) {
            setImgModal(img)
        }
    }

    const prevImg = () => {
        const id = imgModal.id - 1;
        const img = photos.find(photo => photo.id === id);
        if(img) {

            setImgModal(img)
        }
    }

    const photos = [
        {
            id: 1,
            image: images.habitacionAna
        },
        {
            id: 2,
            image: images.habitacionAna2
        },
        {
            id: 3,
            image: images.habitacionJose
        },
        {
            id: 4,
            image: images.habitacionJose2
        },
        {
            id: 5,
            image: images.habitacionEva
        },
        {
            id: 6,
            image: images.habitacion3
        },
        {
            id: 7,
            image: images.habitacionDoble
        },
        {
            id: 8,
            image: images.habitacionDoble2
        },
        {
            id: 9,
            image: images.terraza
        },
        {
            id: 10,
            image: images.patio
        },
        {
            id: 11,
            image: images.aseo
        }
    ]

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name={t('galeria')}/>
                <p className="text-grey-ligth w-9/12 text-justify">{t('textGaleria')}</p>
                <div className="grid grid-cols-3 gap-4 w-9/12 place-self-auto mt-5"> 
                {photos.map(photo => (<img src={photo.image} className="hover:opacity-50" onClick={() => openModal(photo)}/>))}
                {isModalOpen && (
                    <>
                    <FontAwesomeIcon icon={faXmark} size="2xl" color="white" className="fixed z-20 top-32 right-11 cursor-pointer" onClick={closeModal}/>
                    <div className="fixed inset-0 gap-10 flex items-center justify-center z-10 bg-black-modal" >
                            <FontAwesomeIcon icon={faAngleLeft} size="2xl" color="white" onClick={prevImg} className={imgModal.id === 1 ? "cursor-not-allowed" : "cursor-pointer"}/>
                            <img
                            className="flex w-[50%] " 
                            src={imgModal.image} 
                            alt="habitacion individual" 
                            onClick={closeModal}
                            />
                            <FontAwesomeIcon icon={faAngleRight} size="2xl" color="white" onClick={nextImg} className={imgModal.id === photos.length ? "cursor-not-allowed" : "cursor-pointer"}/>
                    </div>
                    </>
                )}      
                </div>                  
            </WrapperPage>
        </Layout>
    )
}
