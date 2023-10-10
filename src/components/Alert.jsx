export const Alert = ({ message = "Este es un error", color = "danger" }) => {
    return <p className={`alert alert-${color} my-2`}>{message}</p>;
};
