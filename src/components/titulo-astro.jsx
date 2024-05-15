import React from "react";


export const TituloAstro = () => {
    {/* Este es un comentario, aqui vamos a definir el valor de número 1 */}
    let numero1 = 1;

    {/* Supongamos que ya tenemos toda la lógica lista y queremos pintar todo en DOM*/}
    return(
    <div className="bg-color-gray-100">
        <h1 className="text-red-600 text-3xl">Hola soy un titulo</h1>
        <h2 className="text-2xl text-blue-600">Subtitulo para no afectar al seo</h2>
        <p className="text-xl text-gray-600">Aquí vamos a hacer algo.</p> &nbsp; <span>Y vamos a imprimir el valor que sería igual a {numero1}</span> 
    </div>
    );

}