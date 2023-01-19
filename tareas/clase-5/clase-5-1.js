//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/

function mostrarInformacion(nombres, apellidos, edad) {
    const $fraseAMostrar = document.querySelector("#informacion-ingresada");
    $fraseAMostrar.className = "";
    $fraseAMostrar.innerText = `La información ingresada es: nombres: ${nombres}; apellidos: ${apellidos}; edad: ${edad}.`;
}

function cambiarTitulo(fraseTitulo) {
    const $titulo = document.querySelector("h1");
    $titulo.innerText = fraseTitulo;
}

const $botonEnviar = document.querySelector("#boton-enviar");

$botonEnviar.onclick = function () {
    const nombresUsuario = document.querySelector("#nombres-usuario").value.trim();
    const apellidosUsuario = document.querySelector("#apellidos-usuario").value.trim();
    const edadUsuario = document.querySelector("#edad-usuario").value.trim();
    mostrarInformacion(nombresUsuario, apellidosUsuario, edadUsuario);
    cambiarTitulo(`Bienvenido, ${nombresUsuario} ${apellidosUsuario}!`);
    return false;
};
