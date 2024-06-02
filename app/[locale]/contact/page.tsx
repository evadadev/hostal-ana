'use client';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import Link from "next/link";

const ContactPage = () => {
    const [showMessage, setShowMessage] = React.useState({status: false, success: false, content: ""})
    const [ dataForm, setDataForm] = React.useState({name: "", email: "", phone: "", message: "", option: "", accept: false});
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('contacto') + ' | Hostal Ana Nerja';
        dataForm.option = "Reservar"
    }, [])
    
    const setFormData = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setDataForm({
            ...dataForm,
            [key]: e.target.value,
        })
    }
    const setFormTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setDataForm({
            ...dataForm,
            [key]: e.target.value,
        })
    }
    const setFormsSelec = (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
        setDataForm({
            ...dataForm,
            [key]: e.target.value,
        })
    }
    const setFormsChecked = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        console.log(e)
        setDataForm({
            ...dataForm,
            [key]: e.target.checked,
        })
    }

    const handleFormSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const response = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(dataForm)
        })

        const content = response.ok ? "El mensaje fue enviado correctamente" : "El mensaje no pudo ser enviado"

        setShowMessage({status: true, success:response.ok, content})
    };

    return (
            <WrapperPage>
                <TitlePage name={t('cabeceraContacto')}/>
                <p className="text-grey-ligth md:w-9/12 text-justify">{t('pContacto')}</p>
            <form className="w-full md:w-9/12" onSubmit={handleFormSubmit}>
                <div className="flex flex-col items-center w-full gap-4 sm:grid-cols-6">
                    <div className="w-full">
                        <label htmlFor="username" className=" text-sm font-medium leading-6 text-secundary">{t('labelNombre')}</label>
                        <input type="text" required value={dataForm.name} onChange={(e) => setFormData(e, "name")} name="username" id="username" autoComplete="Nombre" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className=" text-sm font-medium  text-secundary">Email*</label>
                        <input type="email" required value={dataForm.email} onChange={(e) => setFormData(e, "email")} name="email" id="email" autoComplete="Email" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="text-sm font-medium  text-secundary">{t('labelTelefono')}</label>
                        <input type="text" required value={dataForm.phone} onChange={(e) => setFormData(e, "phone")} name="phone" id="phone" autoComplete="Phone" className="flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="affair" className="text-sm font-medium text-secundary">{t('labelAsunto')}</label>
                        <select id="affair" name="affair" required onChange={(e) => setFormsSelec(e, "option")} className="block w-full rounded-md border-0 text-secundary  ring-1 ring-gray-300  focus:ring-slate-300 sm:text-sm sm:leading-6">
                            <option value="Reservar">{t('textReservar')}</option>
                            <option value="Información">{t('textInformación')}</option>
                            <option value="Otros">{t('textOtros')}</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="text-sm font-medium leading-6 text-secundary">{t('labelMensaje')}</label>
                        <textarea name="message" id="message" autoComplete="message" value={dataForm.message} onChange={(e) => setFormTextarea(e, "message")} className="w-full flex-1 border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="flex flex-row">
                        <input type="checkbox" checked={dataForm.accept} required onChange={(e) => setFormsChecked(e, "accept")} className="h-4 w-4 rounded  border-slate-300 text-secundary"/>
                        <p className="ml-2 text-sm font-medium text-primary">{t('politicaPrivacidad')}
                            <Link href="/politicaPrivacidad" className="underline-offset-1 font-bold text-primary cursor-pointer">{t('pPrivacidad')}</Link>
                        </p>                  
                    </div>
                    <button type="submit" className="text-sm font-medium bg-primary border-slate-300 text-white px-4 py-2 rounded">{t('enviar')}</button>
                </div>
            </form>
            {showMessage.status && (<div className={showMessage.success ? "bg-green-600 p-2 text-white" : "bg-red-600 p-2 text-white"}>{showMessage.content}</div>) }
            </WrapperPage>
    )
}

export default ContactPage