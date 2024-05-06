'use client';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TitlePage } from "../components/TitlePage";
import { WrapperPage } from "../components/WrapperPage";
import Link from "next/link";
import { Resend } from "resend";
import { EmailTemplate } from "../components/email-template";

const ContactPage = () => {
    const [ dataForm, setDataForm] = React.useState({name: "", email: "", phone: "", message: "", option: "", accept: false});
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('contacto') + ' | Hostal Ana Nerja';
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

    const resend = new Resend('re_VzFGwG6D_8V6ak8KUHsYsVdZLqXK5nDsw');

    const handleFormSubmit = async() => {
            const {data}= await resend.emails.send({
                from: dataForm.email,
                to: 'dev.evada@gmail.com',
                subject: `Resere`,
                react:EmailTemplate({ form: dataForm }) as React.ReactElement
            })
            console.log(data)
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
            </WrapperPage>
    )
}

export default ContactPage


// import { EmailTemplate } from '../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
