import React from "react";
import { Layout } from "../layout/LayoutApp";

export const ContactoPage: React.FC = () => {

    return (
        <Layout>
            <div className=" flex flex-col gap-5 items-center z-10 w-screen h-auto">
                <div className=" flex flex-col items-center text-2xl text-slate-500 w-9/12">Contacta con nosotros</div>
                <hr className="h-1.5 w-32 mt-1 bg-yellow-700"/>
                <p className="text-slate-400 w-9/12 text-justify">Puedes realizar tus consultasa o sugerencias tanto por teléfono como por correo electrónico o utilizando el formulario de contacto que ponemos a su disposición</p>
            <form className=" w-9/12">
                <div className="flex flex-col items-center w-full gap-4 sm:grid-cols-6">
                    <div className="w-full">
                        <label htmlFor="username" className=" text-sm font-medium leading-6 text-slate-500">Nombre*</label>
                        <input type="text" name="username" id="username" autoComplete="Nombre" className=" flex-1 w-full border-slate-300 text-slate-500 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className=" text-sm font-medium  text-slate-500">Email*</label>
                        <input type="email" name="email" id="email" autoComplete="Email" className=" flex-1 w-full border-slate-300 text-slate-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone" className="text-sm font-medium  text-slate-500">Teléfono*</label>
                        <input type="text" name="phone" id="phone" autoComplete="Phone" className="flex-1 w-full border-slate-300 text-slate-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="text-sm font-medium leading-6 text-slate-500">Mensaje</label>
                        <textarea name="message" id="message" autoComplete="message" className="w-full flex-1 border-slate-300 text-slate-500 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="affair" className="text-sm font-medium text-slate-500">Asunto*</label>
                        <select id="affair" name="affair"  className="block w-full rounded-md border-0 text-slate-500  ring-1 ring-gray-300  focus:ring-slate-300 sm:text-sm sm:leading-6">
                            <option>Reservar</option>
                            <option>Información</option>
                            <option>Otros</option>
                        </select>
                    </div>
                    <div>
                        <input type="checkbox" className="h-4 w-4 rounded  border-slate-300 text-slate-600"/>
                        <span className="ml-2 text-sm font-medium  text-yellow-700">He leído y acepto la política de privacidad.*</span>
                    </div>
                    <button type="submit" className="text-sm font-medium bg-yellow-700 border-slate-300 text-white px-4 py-2 rounded">Enviar</button>
                </div>
            </form>
            </div>
        </Layout>
    )
}