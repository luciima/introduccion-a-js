function calcularSalariosMensuales(salariosAnuales) {
    const MESES_ANIO = 12;
    let salariosMensuales = [];
    for (let salarioAnual of salariosAnuales) {
        salariosMensuales.push(salarioAnual / MESES_ANIO);
    }
    return salariosMensuales;
}

function hallarMayorNumero(numeros) {
    let mayorNumero = Number(numeros[0]);
    for (let numero of numeros) {
        if (numero > mayorNumero) {
            mayorNumero = numero;
        }
    }
    return mayorNumero;
}

function hallarMenorNumero(numeros) {
    let menorNumero = Number(numeros[0]);
    for (let numero of numeros) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
    return menorNumero;
}

function hallarPromedio(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += Number(numero);
    }
    return suma / numeros.length;
}
