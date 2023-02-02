function probarValidarSalario() {
    console.assert(
        validarSalario("240000") === "",
        "validarSalario rechazó un salario válido."
    );
    console.assert(
        validarSalario("") === "El salario no puede estar vacío.",
        "validarSalario no rechazó un salario vacío."
    );
    console.assert(
        validarSalario("-1321453") === "El salario debe ser mayor a 0.",
        "validarSalario no rechazó un salario menor a 0."
    );
    console.assert(
        validarSalario("ancsnkacsm") === "El salario solo debe contener números.",
        "validarSalario no rechazó un salario en letras."
    );
}

function probarHallarMayorNumero() {
    console.assert(
        hallarMayorNumero([1, 2, 3, 4, 5, 23, 42, 12.21, 15]) === 42,
        "hallarMayorNumero no devolvió el mayor número."
    );
    console.assert(
        hallarMayorNumero([-23, -21, 24, -756, 121]) === 121,
        "hallarMayorNumero no devolvió el mayor número."
    );
}

function probarHallarMenorNumero() {
    console.assert(
        hallarMenorNumero([2, 1, 3, 4, 5, 23, 42, 12.21, 15]) === 1,
        "hallarMenorNumero no devolvió el menor número."
    );
    console.assert(
        hallarMenorNumero([-23, -21, 24, -756, 121]) === -756,
        "hallarMenorNumero no devolvió el menor número."
    );
}

function probarHallarPromedio() {
    console.assert(
        hallarPromedio([2, 1, 3, 4, 5, 23, 42, 12, 15]) === 11.88888888888889,
        "hallarPromedio no devolvió el promedio correcto."
    );
    console.assert(
        hallarPromedio([-23, -21, 24, -756, 121]) === -131,
        "hallarPromedio no devolvió el promedio correcto."
    );
}

probarValidarSalario();
probarHallarMayorNumero();
probarHallarMenorNumero();
probarHallarPromedio();
