import React from "react";

interface Props {
    name: string
}

export const TitlePage: React.FC<Props> = (props) => {
    const { name } = props;

    return(       
        <div className="flex flex-col items-center text-lg md:text-2xl text-secundary gap-5">
            {name}
            <hr className="md:h-1.5 md:w-32 md:mt-1  md:bg-primary "/>
        </div>
    
    )
}