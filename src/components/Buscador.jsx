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
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-search"></i>&nbsp;&nbsp;Buscador
                </span>
                <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Ingresar búsqueda..."
                    value={searchValue}
                    onChange={(event) => {
                        handleSearchInput(event);
                        onSearchValue(event);
                    }}
                />
            </div>
        </>
    );
};
