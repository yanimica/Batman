let estadoLinterna = "false";

let bati_boton = document.querySelector("#bati_boton");
let encendido = document.querySelector("#batiEncendido");
let batman = document.querySelector("#batman");
let click = document.querySelector("#batiClick");
batman.classList.add("batman_inactivo");



const controlar_linterna = () => {
    estadoLinterna = !estadoLinterna;
    if (estadoLinterna) {
        batman.style.backgroundImage = 'url("./img/batmanON.gif")';
    } else {
        batman.style.backgroundImage = 'url("./img/batmanOFF.jpg")';
    }
    sonido();
}

bati_boton.addEventListener("click", controlar_linterna)

function sonido() {
    if (encendido.paused) {
        click.play();
        encendido.play();
    } else {
        click.play();
        encendido.pause();
    }
}

