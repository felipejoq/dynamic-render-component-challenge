import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { useColaborators } from "./hooks/useColaborators";


const ColaboradoresApp = () => {

  const {
    searchValue,
    searchResult,
    messages,
    colaboradores,
    searchColaborador,
    setSearchValue,
    dataToTable,
    handleNewColaborador,
    handleValidationsErrors,
    removeColaborador
  } = useColaborators();

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <h1><i className="bi bi-person-workspace"></i> Lista de Colaboradores</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12 col-lg-12 mb-2 mt-2">
              <Buscador
                searchColaborador={searchColaborador}
                searchValue={searchValue}
                setSearchValue={setSearchValue} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <Listado
                colaboradores={dataToTable()}
                removeColaborador={removeColaborador}
              />
              {
                (searchResult.length === 0 && searchValue || colaboradores.length === 0) &&
                <Alert message="No hay registros" color="info" />
              }
            </div>
          </div>
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
