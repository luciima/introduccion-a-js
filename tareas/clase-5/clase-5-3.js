//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearLabel(i) {
    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", `video-${i}`);
    etiqueta.innerText = `Video ${i}`;
    return etiqueta;
}

function crearInput(nombreClass) {
    const input = document.createElement("input");
    input.className = nombreClass;
    input.type = "number";
    return input;
}

function crearBotonCalcular() {
    const $botonCalcular = document.createElement("button");
    $botonCalcular.setAttribute("id", "boton-calcular-total");
    $botonCalcular.innerText = "Calcular tiempo total";
    return $botonCalcular;
}

function convertirATiempoValido(horas, minutos, segundos) {
    minutos = minutos + parseInt(segundos / 60);
    segundos = segundos % 60;
    horas = horas + parseInt(minutos / 60);
    minutos = minutos % 60;
    if (segundos / 10 < 1) {
        segundos = "0" + segundos;
    }
    if (minutos / 10 < 1) {
        minutos = "0" + minutos;
    }
    return `${horas}:${minutos}:${segundos}`;
}

function calcularTotal(lista) {
    let total = 0;
    for (let node of lista) {
        total += Number(node.value);
    }
    return total;
}

function mostrarFraseResultado(resultado) {
    const $fraseResultado = document.querySelector("strong");
    $fraseResultado.innerText = `El tiempo total de los videos es ${resultado}`;
    $fraseResultado.className = "";
}

function borrarInputsAnteriores($form) {
    while ($form.lastElementChild !== $botonOK) {
        $form.lastElementChild.remove();
    }
}

function resetearResultado() {
    const $fraseResultado = document.querySelector("strong");
    $fraseResultado.innerText = "";
    $fraseResultado.className = "oculto";
}

const $botonOK = document.querySelector("#boton-ok");
const $botonCalcularTotal = crearBotonCalcular();
$botonOK.onclick = function () {
    const cantidadVideos = document.querySelector("#cantidad-videos").value;
    const $formulario = document.querySelector("form");
    borrarInputsAnteriores($formulario);
    resetearResultado();
    for (let i = 1; i <= cantidadVideos; i++) {
        $formulario.appendChild(document.createElement("br"));
        $formulario.appendChild(crearLabel(i));
        $formulario.appendChild(crearInput("horas"));
        $formulario.appendChild(crearInput("minutos"));
        $formulario.appendChild(crearInput("segundos"));
    }
    $formulario.appendChild($botonCalcularTotal);
    return false;
};

$botonCalcularTotal.onclick = function () {
    const horas = calcularTotal(document.querySelectorAll(".horas"));
    const minutos = calcularTotal(document.querySelectorAll(".minutos"));
    const segundos = calcularTotal(document.querySelectorAll(".segundos"));
    const resultado = convertirATiempoValido(horas, minutos, segundos);
    mostrarFraseResultado(resultado);
    return false;
};
