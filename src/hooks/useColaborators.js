import { useEffect, useState } from "react";
import { getAllColaborators, searchColaborators } from "../services/colaboradores";

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
    
    const removeColaborador = (id) => {
        // TODO: Desarrollar la lógica para borrar un colaborador.
        console.log('Borrar colaborador con id:', id);
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
