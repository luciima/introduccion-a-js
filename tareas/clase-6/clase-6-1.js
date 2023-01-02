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
