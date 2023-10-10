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
        const result = colaboradores.filter(colaborador => colaborador.id !== id ? colaborador : null)
        setColaboradores(result);
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
