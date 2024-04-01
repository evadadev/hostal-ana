import React from "react";
import { Layout } from "../layout/LayoutApp";
import { HeaderPage } from "../components/HeaderPage";
import { WrapperPage } from "../components/WrapperPage";

export const ContactPage: React.FC = () => {
    const [ data, setData] = React.useState({name: "", email: "", phone: "", message: "", option: "", accept: false});

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

    return (
        <Layout>
            <WrapperPage>
                <HeaderPage name="Contacta con nosotros"/>
                <p className="text-grey-ligth w-9/12 text-justify">Puedes realizar tus consultasa o sugerencias tanto por teléfono como por correo electrónico o utilizando el formulario de contacto que ponemos a su disposición</p>
            <form className=" w-9/12">
                <div className="flex flex-col items-center w-full gap-4 sm:grid-cols-6">
                    <div className="w-full">
                        <label htmlFor="username" className=" text-sm font-medium leading-6 text-secundary">Nombre*</label>
                        <input type="text" value={data.name} onChange={(e) => setFormData(e, "name")} name="username" id="username" autoComplete="Nombre" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className=" text-sm font-medium  text-secundary">Email*</label>
                        <input type="email" value={data.email} onChange={(e) => setFormData(e, "email")} name="email" id="email" autoComplete="Email" className=" flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="text-sm font-medium  text-secundary">Teléfono*</label>
                        <input type="text" value={data.phone} onChange={(e) => setFormData(e, "phone")} name="phone" id="phone" autoComplete="Phone" className="flex-1 w-full border-slate-300 text-secundary placeholder:text-grey-ligth sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="text-sm font-medium leading-6 text-secundary">Mensaje</label>
                        <textarea name="message" id="message" autoComplete="message" value={data.message} onChange={(e) => setFormTextarea(e, "message")} className="w-full flex-1 border-slate-300 text-secundary placeholder:text-grey-ligth focus:right-0 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="affair" className="text-sm font-medium text-secundary">Asunto*</label>
                        <select id="affair" name="affair" onChange={(e) => setFormsSelec(e, "option")} className="block w-full rounded-md border-0 text-secundary  ring-1 ring-gray-300  focus:ring-slate-300 sm:text-sm sm:leading-6">
                            <option value="Reservar">Reservar</option>
                            <option value="Información">Información</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                    <div>
                        <input type="checkbox" checked={data.accept} onChange={(e) => setFormsChecked(e, "accept")} className="h-4 w-4 rounded  border-slate-300 text-secundary"/>
                        <span className="ml-2 text-sm font-medium  text-primary">He leído y acepto la política de privacidad.*</span>
                    </div>
                    <button type="submit" className="text-sm font-medium bg-primary border-slate-300 text-white px-4 py-2 rounded">Enviar</button>
                </div>
            </form>
            </WrapperPage>
        </Layout>
    )
}