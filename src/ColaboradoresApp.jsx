import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";

const ColaboradoresApp = () => {
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
                    <Listado />
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
