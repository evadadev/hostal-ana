'use client';
import React, { useEffect } from "react";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

interface imageInterface  {
    id: number,
    image: string 
}

const GalleryPage = () => {

    const [ isModalOpen, setIsModalOpen ] = React.useState(false);
    const [ imgModal, setImgModal ] = React.useState<imageInterface>({id: 0, image: ""});
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
            image: "/habitacion-ana.jpg"
        },
        {
            id: 2,
            image: "/habitacion-ana2.jpg"
        },
        {
            id: 3,
            image: "/habitacion-jose.jpg"
        },
        {
            id: 4,
            image: "/habitacion-jose2.jpg"
        },
        {
            id: 5,
            image: "/habitacion-eva.jpg"
        },
        {
            id: 6,
            image: "/habitacion-eva-2.jpg"
        },
        {
            id: 7,
            image: "/habitacion-doble.jpg"
        },
        {
            id: 8,
            image: "/habitacion-doble-2.jpg"
        },
        {
            id: 9,
            image: "/terraza.jpg"
        },
        // {
        //     id: 10,
        //     image: "/patio.jpg"
        // },
        {
            id: 11,
            image: "aseo.jpg"
        }
    ]

    return (
            <WrapperPage>
                <TitlePage name={t('galeria')}/>
                <p className="text-grey-ligth md:w-9/12 text-justify">{t('textGaleria')}</p>
                <div className="grid grid-cols-3 gap-4 md:w-9/12 place-self-auto mt-5"> 
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
    )
}

export default GalleryPage
