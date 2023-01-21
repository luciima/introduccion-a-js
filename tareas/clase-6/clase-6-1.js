/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function crearIntegrante($formulario, numeroIntegrante) {
    const contenedor = document.createElement("div");
    contenedor.classList.add(`edades-integrantes`);
    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", `edad-integrante-${numeroIntegrante}`);
    etiqueta.classList.add("form-label");
    etiqueta.innerText = `Edad de integrante ${numeroIntegrante}`;
    const input = document.createElement("input");
    input.classList.add("edades-integrantes", "form-control");
    input.id = `edad-integrante-${numeroIntegrante}`;
    input.type = "number";
    contenedor.appendChild(etiqueta);
    contenedor.appendChild(input);
    $formulario.appendChild(contenedor);
}

function crearBotonCalcular() {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.id = "boton-calcular";
    $botonCalcular.textContent = "Calcular";
    $botonCalcular.classList.add("btn", "btn-primary");
    return $botonCalcular;
}

function ocultarElemento(elemento) {
    elemento.classList.add("oculto");
}

function mostrarElemento(elemento) {
    elemento.classList.remove("oculto");
}

function mostrarResultados(resultados) {
    for (let key in resultados) {
        document.querySelector(`#${key}`).textContent += ` ${resultados[key]}.`;
    }
    mostrarElemento($resultados);
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
    ocultarElemento($botonReset);
    $botonReset.classList.add("btn", "btn-primary");
    return $botonReset;
}

function borrarInputsAnteriores() {
    const inputsAnteriores = document.querySelectorAll(".edades-integrantes");
    inputsAnteriores.forEach(function (input) {
        input.remove();
    });
    ocultarElemento($resultados);
    $botonCalcular.remove();
    $botonReset.remove();
    $botonCalcular.removeAttribute("disabled");
}

function resetearListaResultados(resultadosIniciales) {
    for (let key in resultadosIniciales) {
        document.querySelector(`#${key}`).textContent = `${resultadosIniciales[key]}`;
    }
}

function manejarErrores(errores) {
    for (let error in errores) {
        if (errores[error] !== "") {
            document.querySelector(`#${error}`).classList.add("is-invalid");
        } else {
            document.querySelector(`#${error}`).classList.remove("is-invalid");
        }
    }
}

const $botonOK = document.querySelector("#boton-ok");
const $botonCalcular = crearBotonCalcular();
const $botonReset = crearBotonReset();
const $formulario = document.querySelector("form");
const $resultados = document.querySelector("#lista-resultados");
const $contenedorCantidadIntegrantes = document.querySelector(".cantidad-integrantes");

$botonOK.onclick = function () {
    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
    let errores = {
        "cantidad-integrantes": validarCantidadIntegrantes(cantidadIntegrantes),
    };
    manejarErrores(errores);
    let hayErrores = document.querySelector(".is-invalid");
    if (hayErrores) {
        return false;
    }
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        crearIntegrante($formulario, i);
    }
    $formulario.appendChild($botonCalcular);
    ocultarElemento($contenedorCantidadIntegrantes);
    return false;
};

$botonCalcular.onclick = function () {
    let edadesIntegrantes = document.querySelectorAll(".edades-integrantes input");
    let errores = {};
    edadesIntegrantes.forEach(function (edad) {
        errores[edad.id] = validarEdad(edad.value);
    });
    edadesIntegrantes = extraerNumeros(edadesIntegrantes);
    manejarErrores(errores);
    hayErrores = document.querySelector(".is-invalid");
    if (hayErrores) {
        return false;
    }
    const resultados = {
        "resultado-mayor-edad": hallarMayorNumero(edadesIntegrantes),
        "resultado-menor-edad": hallarMenorNumero(edadesIntegrantes),
        "resultado-promedio-edad": hallarPromedio(edadesIntegrantes),
    };
    mostrarResultados(resultados);
    $formulario.appendChild($botonReset);
    mostrarElemento($botonReset);
    return false;
};

$botonReset.onclick = function () {
    borrarInputsAnteriores();
    const resultadosIniciales = {
        "resultado-mayor-edad": "La mayor edad en su familia es ",
        "resultado-menor-edad": "La menor edad en su familia es ",
        "resultado-promedio-edad": "La edad promedio en su familia es ",
    };
    resetearListaResultados(resultadosIniciales);
    mostrarElemento($contenedorCantidadIntegrantes);
    return false;
};
