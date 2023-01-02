/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function hallarMayorEdad(listaEdades) {
    let mayorEdad = listaEdades[0];
    for (let edad of listaEdades) {
        if (edad > mayorEdad) {
            mayorEdad = edad;
        }
    }
    return mayorEdad;
}

function hallarMenorEdad(listaEdades) {
    let menorEdad = listaEdades[0];
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
        sumaEdades += edad;
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
    input.class = "edades-integrantes";
    input.id = `edad-integrante-${i}`;
    input.type = "number";
    return input;
}

const $botonOK = document.querySelector("#boton-OK");

$botonOK.onclick = function () {
    const cantidadIntegrantes = Number(
        document.querySelector("#cantidad-integrantes").value
    );
    const $formulario = document.querySelector("form");
    const $resultados = document.querySelector("strong");
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        const etiqueta = crearLabel(i);
        const input = crearInput(i);
        const br = document.createElement("br");
        $formulario.insertBefore(etiqueta, $resultados);
        $formulario.insertBefore(input, $resultados);
        $formulario.insertBefore(br, $resultados);
    }
    return false;
};
