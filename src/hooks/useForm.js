import { useState } from "react";

export const useForm = (initialForm) => {

    const [formState, setFormState] = useState(initialForm);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const cleanValue = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value.trim(),
        });
    }

    const resetForm = () => {
        setFormState(initialForm)
    }

    return {
        handleInputChange,
        cleanValue,
        resetForm,
        formState
    }
}
