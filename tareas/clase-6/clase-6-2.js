/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

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

function crearIntegrante($formulario, numeroIntegrante) {
    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", `integrante-${numeroIntegrante}`);
    etiqueta.innerText = `Salario ${numeroIntegrante}`;
    const input = document.createElement("input");
    input.className = "salario-integrante";
    input.id = `integrante-${numeroIntegrante}`;
    input.type = "number";
    const br = document.createElement("br");
    $formulario.appendChild(br);
    $formulario.appendChild(etiqueta);
    $formulario.appendChild(input);
}

function quitarIntegrante($formulario) {
    $formulario.lastElementChild.remove();
    $formulario.lastElementChild.remove();
    $formulario.lastElementChild.remove();
}

function extraerNumerosNoNulos(elementos) {
    const numeros = [];
    for (let elemento of elementos) {
        if (Number(elemento.value) !== 0) {
            numeros.push(Number(elemento.value));
        }
    }
    return numeros;
}

const $botonAgregar = document.querySelector("#boton-agregar-integrante");
const $botonQuitar = document.querySelector("#boton-quitar-integrante");
const $botonCalcular = document.querySelector("#boton-calcular");
const $formulario = document.querySelector("form");
$botonAgregar.onclick = function () {
    const siguienteIntegrante =
        document.querySelectorAll(".salario-integrante").length + 1;
    crearIntegrante($formulario, siguienteIntegrante);
    if ($botonQuitar.disabled === true) {
        $botonQuitar.removeAttribute("disabled");
    }
    return false;
};
$botonQuitar.onclick = function () {
    quitarIntegrante($formulario);
    const cantidadIntegrantes = document.querySelectorAll(".salario-integrante").length;
    if (cantidadIntegrantes === 1) {
        $botonQuitar.disabled = true;
    }
    return false;
};
$botonCalcular.onclick = function () {
    let $salariosAnuales = document.querySelectorAll(".salario-integrante");
    let salariosAnuales = extraerNumerosNoNulos($salariosAnuales);
    let salariosMensuales = calcularSalariosMensuales(salariosAnuales);
    const resultados = {
        "mayor-salario-anual": hallarMayorNumero(salariosAnuales),
        "menor-salario-anual": hallarMenorNumero(salariosAnuales),
        "promedio-salario-anual": hallarPromedio(salariosAnuales),
        "promedio-salario-mensual": hallarPromedio(salariosMensuales),
    };
    return false;
};
