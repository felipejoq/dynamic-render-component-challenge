import { useEffect, useState } from "react";
import { getAllColaborators, searchColaborators } from "../services/colaboradores";
import { confirmAlert, successAlert } from "../helpers/sweetalerts";

export const useColaborators = () => {
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
        setSearchValue("");
        successAlert(`${colaborador.nombre} fue agregado con éxito!`);
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
    
    const removeColaborador = async (id) => {
        const colaborator = colaboradores.find(colaborador => colaborador.id === id);
        const title = `¿Quiere borrar a ${colaborator.nombre}?`;
        const message = "Esta es una acción irreversible. Confirme si quiere eliminar.";
        const {isConfirmed} = await confirmAlert(title, message);
        if(isConfirmed) {
            const result = colaboradores.filter(colaborador => colaborador.id !== id ? colaborador : null);
            setColaboradores(result);
            setSearchValue("");
            successAlert(`Colaborador borrado con éxito!`);
        }
    }

    return {
        colaboradores,
        searchResult,
        searchValue,
        messages,
        setSearchValue,
        dataToTable,
        searchColaborador,
        handleValidationsErrors,
        handleNewColaborador,
        removeColaborador
    }
}
