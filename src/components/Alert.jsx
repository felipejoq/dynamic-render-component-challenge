export const Alert = ({ message = "Este es un error", color = "danger" }) => {
    return <div className={`alert alert-${color} my-2`}>{message}</div>;
};
