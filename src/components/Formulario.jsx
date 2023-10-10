import { useState } from "react";

const initialForm = {
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
}

export const Formulario = ({ handleNewColaborador }) => {

    const [formState, setFormState] = useState(initialForm);

    const { nombre, correo, edad, cargo, telefono } = formState;

    const handleOnSubmitForm = (event) => {
        event.preventDefault();

        // TODO: Validar que ningún campo esté vacío.

        const newColaborator = {
            ...formState,
            id: self.crypto.randomUUID()
        }

        handleNewColaborador(newColaborator);
        setFormState(initialForm);
    }

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return (
        <form onSubmit={handleOnSubmitForm}>
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
                    value={nombre}
                    onChange={handleInputChange}
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
                    value={correo}
                    onChange={handleInputChange}
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
                    value={edad}
                    onChange={handleInputChange}
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
                    value={cargo}
                    onChange={handleInputChange}
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
                    value={telefono}
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary my-2 w-100">
                Agregar Colaborador
            </button>
        </form>
    );
};
