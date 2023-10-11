import Swal from 'sweetalert2';

export const confirmAlert = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar!'
    });
}

export const successAlert = async (message = 'Mensaje por defecto') => {
    await Swal.fire({
        position: 'top',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}