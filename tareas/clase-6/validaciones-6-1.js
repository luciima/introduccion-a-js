function validarEdad(edad) {
    if (edad === "") {
        return "Los campos edad no pueden estar vacíos.";
    }
    if (edad <= 0) {
        return "La edad debe ser mayor a 0.";
    }
    if (/^[0-9]/.test(edad) === false) {
        return "Los campos edad deben tener solo números.";
    }
    if (edad % 1) {
        return "Los campos edad deben tener un número entero.";
    }
    if (/^[0-9]{1,3}$/.test(edad) === false) {
        return "Los campos edad deben tener entre 1 y 3 números.";
    }
    return "";
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes === "") {
        return "La cantidad de integrantes no puede estar vacía.";
    }
    if (cantidadIntegrantes <= 0) {
        return "La cantidad de integrantes debe ser mayor a 0.";
    }
    if (/^[0-9]+/.test(cantidadIntegrantes) === false) {
        return "El campo de cantidad de integrantes solo puede contener números.";
    }
    if (cantidadIntegrantes % 1) {
        return "El campo de cantidad de integrantes debe tener un número entero.";
    }
    return "";
}
