let estadoLinterna = "false";

let bati_boton = document.querySelector("#bati_boton");
let encendido = document.querySelector("#batiEncendido");
let batman = document.querySelector("#batman");
let click = document.querySelector("#batiClick");


const controlar_linterna = () => {
    click
        ? (estadoLinterna === "false")
            ? (estadoLinterna = "true", batman.classList.add("batman_activo"))
            : (estadoLinterna = "false", batman.classList.remove("batman_activo"))
        : null;
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

