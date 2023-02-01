// salario válido: mayor a 0, no vacío, solo números

function validarSalario(salario) {
    if (salario === "") {
        return "El salario no puede estar vacío.";
    }
    if (salario <= 0) {
        return "El salario debe ser mayor a 0.";
    }
    if (/^[0-9]+$/.test(salario) === false) {
        return "El salario solo debe contener números.";
    }
    return "";
}
