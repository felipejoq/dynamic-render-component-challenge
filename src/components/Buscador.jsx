export const Buscador = ({ searchColaborador, searchValue, setSearchValue }) => {
    // const [searchValue, setSearchValue] = useState("");
    const handleSearchInput = ({ target }) => {
        setSearchValue(target.value);
    };

    const onSearchValue = ({ target }) => {
        searchColaborador(target.value);
    };

    return (
        <>
            <label htmlFor="search" className="form-label">
                Buscador:
            </label>
            <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Busca un Colaborador"
                value={searchValue}
                onChange={(event) => {
                    handleSearchInput(event);
                    onSearchValue(event);
                }}
            />
        </>
    );
};
