//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularPromedio(numeros) {
    let sum = 0;
    for (let numero of numeros) {
        sum += Number(numero);
    }
    return sum / numeros.length;
}

function encontrarMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let numero of numeros) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
    return menorNumero;
}

function encontrarMayorNumero(numeros) {
    let mayorNumero = numeros[0];
    for (let numero of numeros) {
        if (numero > mayorNumero) {
            mayorNumero = numero;
        }
    }
    return mayorNumero;
}

function contarApariciones(numero, lista) {
    let vecesQueAparece = 0;
    for (let elemento of lista) {
        if (numero === elemento) {
            vecesQueAparece += 1;
        }
    }
    return vecesQueAparece;
}

function encontrarNumeroMasFrecuente(numeros) {
    let numeroMasFrecuente = numeros[0];
    let vecesQueAparece = contarApariciones(numeros[0], numeros);
    for (let numero of numeros) {
        if (contarApariciones(numero, numeros) > vecesQueAparece) {
            numeroMasFrecuente = numero;
            vecesQueAparece = contarApariciones(numero, numeros);
        }
    }
    return numeroMasFrecuente;
}

function armarLista() {
    const $numeros = document.querySelectorAll("li");
    const numeros = [];
    for (let i = 0; i < $numeros.length; i++) {
        numeros.push($numeros[i].innerText);
    }
    return numeros;
}

function calcularResultados(lista) {
    const resultados = {
        "promedio-numeros": calcularPromedio(lista),
        "numero-mas-pequeno": encontrarMenorNumero(lista),
        "numero-mas-grande": encontrarMayorNumero(lista),
        "numero-mas-frecuente": encontrarNumeroMasFrecuente(lista),
    };
    return resultados;
}

function mostrarResultados() {
    for (let key in resultados) {
        document.querySelector(`#${key}`).innerText += ` ${resultados[key]}.`;
    }
}

const numeros = armarLista();
const resultados = calcularResultados(numeros);
mostrarResultados();
