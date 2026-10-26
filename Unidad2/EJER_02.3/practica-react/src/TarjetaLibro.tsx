import type{ ReactNode } from "react";

type PropsTarjetaLibro={

    Titulo: string,
    Autor: string,
    Estado?: 'disponible' | 'prestado' | 'reservado',
    children?: ReactNode,
    alprestar?:()=>void;
};

export default function TarjetaLibro({
    Titulo,
    Autor,
    Estado='disponible',
    children,
    alprestar,
}:PropsTarjetaLibro){
    return(
        <>
        <article>
            <h2>{Titulo}</h2>
            <p>{Autor}</p>
            <p>{Estado}</p>
            {children}

            {Estado==='disponible' &&(
                <button onClick={()=>alprestar?.()}>
                    Prestar
                </button>
            )}
        </article>
        </>
    )
}