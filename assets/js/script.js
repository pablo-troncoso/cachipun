//JUEGOS
var juegos = 1;
var contadorJuegos = 1;

// NÚMERO DE JUEGOS
function comenzar() {
    document.getElementById("contenedorJuego").style.display = "block";
    document.getElementById("contenedorInicial").style.display = "none";
    juegos = document.getElementById("juegos").value;
    console.log(juegos);
}

//COMPARADOR RESULTADOS USUARIO VS COMPUTADOR
function jugar(obj) {
    var res;
    var objetos = ["piedra", "papel", "tijera"];

// JUEGOS
    if (contadorJuegos <= juegos) {

        var pc = Math.floor(Math.random() * 3);

// COMPUTADOR
        var movusuario = objetos[obj];
        var movpc = objetos[pc]

        // USUARIO y EL COMPUTADOR
        document.getElementById("usuario").innerHTML = objetos[obj];
        document.getElementById("pc").innerHTML = objetos[pc];

        if (movusuario == 'piedra') {
            switch (movpc) {
                case 'papel':
                    res = "Perdiste, intenta de nuevo!";
                    break;
                case 'tijera':
                    res = "Ganaste!!! :)";
                    break;
                default:
                    res = "Empate";
                    break;
            }
        } else if (movusuario == 'tijera') {
            switch (movpc) {
                case 'papel':
                    res = "Ganaste!!! :)";
                    break;
                case 'tijera':
                    res = "Empate";
                    break;
                default:
                    res = "Perdiste, intenta de nuevo!";
                    break;
            }
        } else {
            switch (movpc) {
                case 'papel':
                    res = "Empate";
                    break;
                case 'tijera':
                    res = "Perdiste, intenta de nuevo!";
                    break;
                default:
                    res = "Ganaste!!! :)";
                    break;
            }
        }

//RESULTADO
        document.getElementById("resultado").innerHTML = res;
        document.getElementById("jugadasrestantes").innerHTML = juegos - contadorJuegos;
        contadorJuegos++;

    } else {
        alert("FIN del Juego");
        document.getElementById("btnNuevo").style.display = "block";
    }

}

// NUEVO JUEGO
function nuevoJuego() {
    contadorJuegos = 1;
    juegos = 1;
    document.getElementById("btnNuevo").style.display = "none";
    document.getElementById("contenedorJuego").style.display = "none";
    document.getElementById("contenedorInicial").style.display = "block";
}