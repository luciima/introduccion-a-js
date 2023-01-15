/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

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
    etiqueta.setAttribute("for", `edad-integrante-${numeroIntegrante}`);
    etiqueta.innerText = `Edad de integrante ${numeroIntegrante}`;
    const input = document.createElement("input");
    input.className = "edades-integrantes";
    input.id = `edad-integrante-${numeroIntegrante}`;
    input.type = "number";
    const br = document.createElement("br");
    $formulario.appendChild(br);
    $formulario.appendChild(etiqueta);
    $formulario.appendChild(input);
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

function extraerNumeros(elementos) {
    let array = [];
    for (let i = 0; i < elementos.length; i++) {
        array.push(elementos[i].value);
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

function borrarInputsAnteriores($form) {
    while ($form.lastElementChild !== $botonOK) {
        $form.lastElementChild.remove();
    }
    $resultados.className = "oculto";
    $botonCalcular.removeAttribute("disabled");
}

function resetearListaResultados() {
    document.querySelector("#resultado-mayor-edad").textContent =
        "La mayor edad en su familia es ";
    document.querySelector("#resultado-menor-edad").textContent =
        "La menor edad en su familia es ";
    document.querySelector("#resultado-promedio-edad").textContent =
        "La edad promedio en su familia es ";
}

const $botonOK = document.querySelector("#boton-ok");
const $botonCalcular = crearBotonCalcular();
const $botonReset = crearBotonReset();
const $formulario = document.querySelector("form");
const $resultados = document.querySelector("strong");

$botonOK.onclick = function () {
    const cantidadIntegrantes = Number(
        document.querySelector("#cantidad-integrantes").value
    );
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        crearIntegrante($formulario, i);
    }
    $formulario.appendChild(document.createElement("br"));
    $formulario.appendChild($botonCalcular);
    $botonOK.disabled = true;
    return false;
};

$botonCalcular.onclick = function () {
    let edadesIntegrantes = document.querySelectorAll(".edades-integrantes");
    edadesIntegrantes = extraerNumeros(edadesIntegrantes);
    const resultados = {
        "resultado-mayor-edad": hallarMayorNumero(edadesIntegrantes),
        "resultado-menor-edad": hallarMenorNumero(edadesIntegrantes),
        "resultado-promedio-edad": hallarPromedio(edadesIntegrantes),
    };
    mostrarResultados(resultados);
    $formulario.appendChild($botonReset);
    $botonReset.className = "";
    $botonCalcular.disabled = true;
    return false;
};

$botonReset.onclick = function () {
    borrarInputsAnteriores($formulario);
    resetearListaResultados();
    $botonOK.removeAttribute("disabled");
    return false;
};
