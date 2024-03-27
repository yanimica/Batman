let estadoLinterna = "false";

let bati_boton = document.querySelector("#bati_boton");
let encendido = document.querySelector("#batiEncendido");
let batman = document.querySelector("#batman");
let click = document.querySelector("#batiClick");
batman.classList.add("batman_inactivo");



/* const controlar_linterna = () => {

    if (estadoLinterna) {
        batman.style.backgroundImage = 'url("./img/batmanON.gif")';
        sonido();
    } else {
        batman.style.backgroundImage = 'url("./img/batmanOFF.jpg")';
    }
} */

const controlar_linterna = () => {
    if (estadoLinterna) {
        batman.style.backgroundImage = 'url("./img/batmanON.gif")';
        sonido(true); // Se pasa true para indicar que la linterna se está encendiendo
        estadoLinterna = false; // Se actualiza el estado de la linterna
    } else {
        batman.style.backgroundImage = 'url("./img/batmanOFF.jpg")';
        sonido(true); // Se pasa false para indicar que la linterna se está apagando
        estadoLinterna = true; // Se actualiza el estado de la linterna
    }
}


bati_boton.addEventListener("click", controlar_linterna)

function sonido() {
    if (encendido.paused) {
        click.play();
        encendido.play();
    } else {
        click.play();
        encendido.pause();
        encendido.currentTime = 0;
    }
}

