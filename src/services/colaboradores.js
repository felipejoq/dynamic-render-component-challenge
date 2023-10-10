import { BaseColaboradores } from "../data/BaseColaboradores";

export const getAllColaborators = () => {
    return BaseColaboradores;
};

export const searchColaborators = (colaborators, term) => {
    return colaborators.filter((colaborador) => {
        for (let value in colaborador) {
            if (colaborador[value].toLowerCase().includes(term.toLowerCase().trim())) {
                return colaborador;
            }
        }
    });
}