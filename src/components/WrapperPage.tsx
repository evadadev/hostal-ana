import React from "react";

interface Props {
    children: React.ReactNode
}

export const WrapperPage: React.FC<Props> = (props) => {
    const { children } = props;

    return(
        <div className="flex flex-col gap-5 mt-10 items-center z-10 w-screen h-auto">
            {children}
        </div>
    )
}