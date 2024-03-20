import React from "react";

interface Props {
    name: string
}

export const HeaderPage: React.FC<Props> = (props) => {
    const { name } = props;

    return(       
        <div className=" flex flex-col items-center text-2xl text-secundary w-9/12 gap-5">
            {name}
            <hr className="h-1.5 w-32 mt-1 bg-primary"/>
        </div>
    
    )
}