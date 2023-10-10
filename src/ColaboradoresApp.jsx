import { useEffect, useState } from "react";
import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { getAllColaborators, searchColaborators } from "./services/colaboradores";

const ColaboradoresApp = () => {
  const [colaboradores, setColaboradores] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  const [messages, setMessages] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const colaboradoresData = getAllColaborators();
    setColaboradores([...colaboradoresData]);
  };

  const handleNewColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setSearchResult([]);
    setSearchValue("");
  };

  const handleValidationsErrors = (messages) => {
    if (messages.length > 0) {
      setMessages(messages);
    } else {
      setMessages([{
        message: "Colaborador agregado con éxito!",
        color: "success",
      }]);
    }
  };

  const searchColaborador = (searchValue) => {
    const result = searchColaborators(colaboradores, searchValue)
    setSearchResult(result);
  };

  const dataToTable = () => {
    return searchValue ? searchResult : colaboradores;
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
          <Buscador
            searchColaborador={searchColaborador}
            searchValue={searchValue}
            setSearchValue={setSearchValue} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 ">
          <Listado colaboradores={dataToTable()} />
          {
            searchResult.length === 0 && searchValue &&
            <Alert message="No hay resultados" color="info" />
          }
        </div>
        <div className="col-12 col-lg-4">
          <Formulario
            handleNewColaborador={handleNewColaborador}
            handleValidationsErrors={handleValidationsErrors}
          />
          {
            messages.length > 0
              && messages.map((error) => (
                <Alert
                  key={self.crypto.randomUUID()}
                  message={error.message}
                  color={error.color}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default ColaboradoresApp;
