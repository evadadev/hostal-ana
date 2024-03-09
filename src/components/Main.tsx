import React from "react";

// interface Props {
//     children: ReactNode
// }

export const Main: React.FC = () => {

    return(
        <div className="relative z-10  w-full h-96 bg-cover bg-no-repeat bg-center bg-[url(https://solaga.es/wp-content/uploads/2023/10/nerja-casco-antiguo-scaled-1.jpeg)]">
            <aside >aquí irá Aside con la imagen de nerja</aside>
            <article>aquí irá el enlance donde te llevará los enlaces del header</article>
        </div>
    )
}