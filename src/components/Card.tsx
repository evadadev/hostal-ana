import React from "react";

interface Props {
    name: string,
    description: string,
    img: string
}

export const Card: React.FC<Props> = (props) => {
    const {name, description, img} = props;

    return (
        <div className=" bg-slate-50 w-10/12 h-full flex flex-row p-10">
            <div className="flex flex-col gap-6 w-3/5">
                <h3 className="text-secundary uppercase">{name}</h3>
                <p className="text-grey-ligth">{description}

                
                </p>
                <ul className="text-grey-ligth">
                    <li>Wi-Fi gratis</li>
                    <li>hilo musical</li>
                    <li>Televisión por satélite</li>
                    <li>Aire acondicionado</li>
                </ul>
                <button type="submit" className="text-sm font-medium bg-yellow-700 border-slate-300 text-white px-4 py-2 rounded">Ver Habitación</button>  
            </div>
            <img src={img} alt="image-room" className="w-2/5 ml-6"/>
        </div>
    )
}