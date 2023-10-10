export const Formulario = () => {
    return (
        <form>
            <h2>Agregar Colaborador</h2>
            <div className="my-2">
                <label htmlFor="nombre" className="form-label">
                    Nombre:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre del colaborador"
                />
            </div>
            <div className="my-2">
                <label htmlFor="correo" className="form-label">
                    Email:
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    placeholder="Email del colaborador"
                />
            </div>
            <div className="my-2">
                <label htmlFor="edad" className="form-label">
                    Edad:
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    name="edad"
                    placeholder="Edad del colaborador"
                />
            </div>
            <div className="my-2">
                <label htmlFor="cargo" className="form-label">
                    Cargo:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="cargo"
                    name="cargo"
                    placeholder="Cargo del colaborador"
                />
            </div>
            <div className="my-2">
                <label htmlFor="telefono" className="form-label">
                    Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono del colaborador"
                />
            </div>
            <button className="btn btn-primary my-2 w-100">
                Agregar Colaborador
            </button>
        </form>
    );
};
