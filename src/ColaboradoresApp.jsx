import { useEffect, useState } from "react";
import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { getAllColaborators } from "./services/colaboradores";

const ColaboradoresApp = () => {
    const [colaboradores, setColaboradores] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const colaboradoresData = getAllColaborators();
        setColaboradores([...colaboradoresData]);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Lista de Colaboradores</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 my-3">
                    <Buscador />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Listado colaboradores={colaboradores} />
                </div>
                <div className="col-4">
                    <Formulario />
                    <Alert />
                </div>
            </div>
        </div>
    );
};

export default ColaboradoresApp;
