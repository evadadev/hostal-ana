import React from "react";

interface Props {
    children: React.ReactNode
}

export const WrapperPage: React.FC<Props> = (props) => {
    const { children } = props;

    return(
        <div className="flex flex-col gap-5 p-4 items-center">
            {children}
        </div>
    )
}