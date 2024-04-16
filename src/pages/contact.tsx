import React, { useEffect } from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";
import { useTranslation } from "react-i18next";

export const ContactPage: React.FC = () => {
    const [ data, setData] = React.useState({name: "", email: "", phone: "", message: "", option: "", accept: false});
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('contacto') + ' | Hostal Ana Nerja';
    }, [])

    const setFormData = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setData({
            ...data,
            [key]: e.target.value,
        })
    }
    const setFormTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>, key: string) => {
        setData({
            ...data,
            [key]: e.target.value,
        })
    }
    const setFormsSelec = (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
        setData({
            ...data,
            [key]: e.target.value,
        })
    }
    const setFormsChecked = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        console.log(e)
        setData({
            ...data,
            [key]: e.target.checked,
        })
    }

    const handleFormSubmit = () => {
        const recipient = 'dev.evada@gmail.com';
        const body = `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`; 
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(data.option)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
    };

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name={t('cabeceraContacto')}/>
                <p className="text-grey-ligth md:w-9/12 text-justify">{t('pContacto')}</p>
            <form className="w-full md:w-9/12" onSubmit={handleFormSubmit}>
                <div className="flex flex-col items-center w-full gap-4 sm:grid-cols-6">
                    <div className="w-full">
                        <label htmlFor="username" className=" text-sm font-medium leading-6 text-secundary">{t('labelNombre')}</label>
                        <input type="text" value={data.name} onChange={(e) => setFormData(e, "name")} name="username" id="username" autoComplete="Nombre" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className=" text-sm font-medium  text-secundary">Email*</label>
                        <input type="email" value={data.email} onChange={(e) => setFormData(e, "email")} name="email" id="email" autoComplete="Email" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="text-sm font-medium  text-secundary">{t('labelTelefono')}</label>
                        <input type="text" value={data.phone} onChange={(e) => setFormData(e, "phone")} name="phone" id="phone" autoComplete="Phone" className="flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="affair" className="text-sm font-medium text-secundary">{t('labelAsunto')}</label>
                        <select id="affair" name="affair" onChange={(e) => setFormsSelec(e, "option")} className="block w-full rounded-md border-0 text-secundary  ring-1 ring-gray-300  focus:ring-slate-300 sm:text-sm sm:leading-6">
                            <option value="Reservar">{t('textReservar')}</option>
                            <option value="Información">{t('textInformación')}</option>
                            <option value="Otros">{t('textOtros')}</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="text-sm font-medium leading-6 text-secundary">{t('labelMensaje')}</label>
                        <textarea name="message" id="message" autoComplete="message" value={data.message} onChange={(e) => setFormTextarea(e, "message")} className="w-full flex-1 border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <input type="checkbox" checked={data.accept} onChange={(e) => setFormsChecked(e, "accept")} className="h-4 w-4 rounded  border-slate-300 text-secundary"/>
                        <span className="ml-2 text-sm font-medium  text-primary">{t('politicaPrivacidad')}</span>
                    </div>
                    <button type="submit" className="text-sm font-medium bg-primary border-slate-300 text-white px-4 py-2 rounded">{t('enviar')}</button>
                </div>
            </form>
            </WrapperPage>
        </Layout>
    )
}