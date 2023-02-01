/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function crearIntegrante($formulario, numeroIntegrante) {
    const contenedor = document.createElement("div");
    contenedor.id = `integrante-${numeroIntegrante}`;
    contenedor.classList.add("salario-integrante");
    const etiqueta = document.createElement("label");
    etiqueta.innerText = `Salario ${numeroIntegrante}`;
    const input = document.createElement("input");
    input.type = "number";
    contenedor.appendChild(etiqueta);
    contenedor.appendChild(input);
    $formulario.appendChild(contenedor);
}

function quitarIntegrante() {
    const integrantes = document.querySelectorAll(".salario-integrante");
    integrantes[integrantes.length - 1].remove();
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

function mostrarResultados(resultados) {
    for (let key in resultados) {
        document.querySelector(`#${key}`).textContent += ` ${resultados[key]}.`;
    }
    document.querySelector("strong").className = "";
}

function resetearResultados() {
    document.querySelector("#mayor-salario-anual").textContent =
        "El mayor salario anual en su familia es ";
    document.querySelector("#menor-salario-anual").textContent =
        "El menor salario anual en su familia es ";
    document.querySelector("#promedio-salario-anual").textContent =
        "El salario anual promedio en su familia es de ";
    document.querySelector("#promedio-salario-mensual").textContent =
        "El salario mensual promedio en su familia es de ";
}

const $botonAgregar = document.querySelector("#boton-agregar-integrante");
const $botonQuitar = document.querySelector("#boton-quitar-integrante");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonReset = document.querySelector("#boton-reset");
const $formulario = document.querySelector("form");
const $resultado = document.querySelector("#resultados");
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
    quitarIntegrante();
    const cantidadIntegrantes = document.querySelectorAll(".salario-integrante").length;
    if (cantidadIntegrantes === 1) {
        $botonQuitar.disabled = true;
    }
    return false;
};
$botonCalcular.onclick = function () {
    let $salariosAnuales = document.querySelectorAll(".salario-integrante input");
    let salariosAnuales = extraerNumerosNoNulos($salariosAnuales);
    let salariosMensuales = calcularSalariosMensuales(salariosAnuales);
    const resultados = {
        "mayor-salario-anual": hallarMayorNumero(salariosAnuales),
        "menor-salario-anual": hallarMenorNumero(salariosAnuales),
        "promedio-salario-anual": hallarPromedio(salariosAnuales),
        "promedio-salario-mensual": hallarPromedio(salariosMensuales),
    };
    mostrarResultados(resultados);
    $botonAgregar.disabled = true;
    $botonQuitar.disabled = true;
    $botonCalcular.disabled = true;
    $botonReset.className = "";
    return false;
};
$botonReset.onclick = function () {
    while (document.querySelectorAll(".salario-integrante").length !== 1) {
        quitarIntegrante();
    }
    $botonAgregar.removeAttribute("disabled");
    $botonCalcular.removeAttribute("disabled");
    $botonReset.className = "oculto";
    resetearResultados();
    $resultado.className = "oculto";
    return false;
};
