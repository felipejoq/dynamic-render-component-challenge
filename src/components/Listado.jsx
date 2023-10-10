export const Listado = ({ colaboradores }) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col-3">Nombre</th>
                        <th scope="col-4">Correo</th>
                        <th scope="col-1">Edad</th>
                        <th scope="col-3">Cargo</th>
                        <th scope="col-1">Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map(
                        ({ id, nombre, correo, edad, cargo, telefono }) => (
                            <tr key={id}>
                                <td>{nombre}</td>
                                <td>{correo}</td>
                                <td>{edad}</td>
                                <td>{cargo}</td>
                                <td>{telefono}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};
