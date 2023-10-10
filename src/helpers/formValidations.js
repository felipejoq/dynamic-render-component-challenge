import { emailRegex } from "./regexs"

export const validateInputs = (formState) => {

    const validations = [];

    const pushErrorMessages = (message, color) => {
        validations.push({
            message, color
        });
    }

    for (let value in formState) {

        if(formState[value].length <= 0){
            pushErrorMessages('Complete todos los campos', 'warning');
            return validations;
        }

        if (value === "correo") {
            if (!emailRegex.test(formState[value])) {
                pushErrorMessages('Ingrese un email válido.', 'danger');
            }
        }
    }

    return validations;


}