import React, { useState } from "react";
import Header from "components/Header";
import Accordion from "components/Accordion";
import ExternalInfo from "components/ExternalInfo";

const AccordionDemo = () => {
    const AccordionData = [
        {
            title: "¿Qué es React?",
            content:
                "Es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario.",
        },
        {
            title: "Diferencia entre angular y react",
            content:
                "Angular es desarrollado por Google y se presenta como el One framework para crear tu aplicación web o mobile  Y  "
                + "  React es desarrollado por Facebook y se presenta como una librería de JavaScript para construir interfaces de usuario."
            },
            {
                title: "Plugins",
                content:
                    "Es un paquete de código que permite la webview Cordova dentro de la cual hace que la aplicación para comunicarse con la plataforma nativa en la que se ejecuta. Los plugins comprenden una única interfaz JavaScript junto con bibliotecas de código nativo correspondiente para cada plataforma soportada."
                },
        
    ];

    return (
        <>
            <Header title="Componente accordion" />

            <ExternalInfo page="accordion" />

            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="row">
                        <div className="col-12">
                            <h3>Conceptos</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-left">
                            <Accordion data={AccordionData} />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionDemo;
