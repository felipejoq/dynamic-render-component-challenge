import { useState } from "react";

export const Buscador = ({ searchColaborador, searchValue, setSearchValue}) => {
    // const [searchValue, setSearchValue] = useState("");
    const handleSearchInput = ({ target }) => {
        setSearchValue(target.value);
    };

    const onSearchValue = ({ target }) => {
        searchColaborador(target.value);
    };

    return (
        <input
            type="text"
            name=""
            className="form-control"
            placeholder="Busca un Colaborador"
            value={searchValue}
            onChange={(event) => {
                handleSearchInput(event);
                onSearchValue(event);
            }}
        />
    );
};
