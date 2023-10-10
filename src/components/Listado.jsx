export const Listado = ({ colaboradores }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Teléfono</th>
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
    );
};
