/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function hallarMayorEdad(listaEdades) {
    let mayorEdad = 0;
    for (let edad of listaEdades) {
        if (edad > mayorEdad) {
            mayorEdad = edad;
        }
    }
    return mayorEdad;
}

function hallarMenorEdad(listaEdades) {
    let menorEdad = 0;
    for (let edad of listaEdades) {
        if (edad < menorEdad) {
            menorEdad = edad;
        }
    }
    return menorEdad;
}

function hallarPromedio(listaEdades) {
    let sumaEdades = 0;
    for (let edad of listaEdades) {
        sumaEdades += Number(edad);
    }
    return sumaEdades / listaEdades.length;
}

function crearLabel(i) {
    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", `edad-integrante-${i}`);
    etiqueta.innerText = `Edad de integrante ${i}`;
    return etiqueta;
}

function crearInput(i) {
    const input = document.createElement("input");
    input.className = "edades-integrantes";
    input.id = `edad-integrante-${i}`;
    input.type = "number";
    return input;
}

function crearBotonCalcular() {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.id = "boton-calcular";
    $botonCalcular.textContent = "Calcular";
    return $botonCalcular;
}

function mostrarResultados(resultados) {
    for (let key in resultados) {
        document.querySelector(`#${key}`).textContent += ` ${resultados[key]}.`;
    }
    document.querySelector("strong").className = "";
}

function pasarNodelistAArray(nodelist) {
    let array = [];
    for (let i = 0; i < nodelist.length; i++) {
        array.push(nodelist[i].value);
    }
    return array;
}

function crearBotonReset() {
    const $botonReset = document.createElement("button");
    $botonReset.id = "boton-reset";
    $botonReset.textContent = "Empezar de nuevo";
    $botonReset.className = "oculto";
    return $botonReset;
}

const $botonOK = document.querySelector("#boton-OK");
const $botonCalcular = crearBotonCalcular();
const $botonReset = crearBotonReset();
const $formulario = document.querySelector("form");

$botonOK.onclick = function () {
    const cantidadIntegrantes = Number(
        document.querySelector("#cantidad-integrantes").value
    );
    const $resultados = document.querySelector("strong");
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        const etiqueta = crearLabel(i);
        const input = crearInput(i);
        const br = document.createElement("br");
        $formulario.insertBefore(etiqueta, $resultados);
        $formulario.insertBefore(input, $resultados);
        $formulario.insertBefore(br, $resultados);
    }
    $formulario.insertBefore($botonCalcular, $resultados);
    return false;
};

$botonCalcular.onclick = function () {
    let edadesIntegrantes = document.querySelectorAll(".edades-integrantes");
    edadesIntegrantes = pasarNodelistAArray(edadesIntegrantes);
    const resultados = {
        "resultado-mayor-edad": hallarMayorEdad(edadesIntegrantes),
        "resultado-menor-edad": hallarMenorEdad(edadesIntegrantes),
        "resultado-edad-promedio": hallarPromedio(edadesIntegrantes),
    };
    mostrarResultados(resultados);
    $formulario.appendChild($botonReset);
    $botonReset.className = "";
    return false;
};
