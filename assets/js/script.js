// Variables Contadores
let juegos = 1;
let contadorJuegos = 1;
let victorias = 0;
let empates = 0;
let derrotas = 0;

// Íconos Movimientos
const iconos = [
    '<i class="fa-regular fa-hand-back-fist icono"></i>', // Piedra
    '<i class="fa-regular fa-hand icono"></i>', // Papel
    '<i class="fa-regular fa-hand-scissors icono"></i>' // Tijera
];

// NÚMERO DE JUEGOS
function comenzar() {
    document.getElementById("contenedorJuego").style.display = "block";
    document.getElementById("contenedorInicial").style.display = "none";
    juegos = parseInt(document.getElementById("juegos").value);
    console.log("Número de juegos: ", juegos);
    contadorJuegos = 1; // Reiniciar el contador de juegos cada vez que se comienza
    actualizarJuegosRestantes(); // Mostrar los juegos restantes al inicio
    resetearContadores(); // Reiniciar los contadores de resultados
}

// COMPARADOR RESULTADOS USUARIO VS COMPUTADOR
function jugar(obj) {
    let res;
    const objetos = ["piedra", "papel", "tijera"];

    // JUEGOS
    if (contadorJuegos <= juegos) {
        let pc = Math.floor(Math.random() * 3);

        // MOVIMIENTOS DEL COMPUTADOR
        let movusuario = objetos[obj];
        let movpc = objetos[pc];

        // MOSTRAR RESULTADOS DEL USUARIO Y EL COMPUTADOR
        document.getElementById("usuario").innerHTML = iconos[obj]; // Mostrar el ícono para el movimiento del usuario
        document.getElementById("pc").innerHTML = iconos[pc]; // Mostrar el ícono para el movimiento del computador

        // LÓGICA PARA DETERMINAR EL GANADOR
        if (movusuario == 'piedra') {
            switch (movpc) {
                case 'papel':
                    res = "Perdiste!";
                    derrotas++;
                    break;
                case 'tijera':
                    res = "Ganaste!";
                    victorias++;
                    break;
                default:
                    res = "Empate!";
                    empates++;
            }
        } else if (movusuario == 'papel') {
            switch (movpc) {
                case 'tijera':
                    res = "Perdiste!";
                    derrotas++;
                    break;
                case 'piedra':
                    res = "Ganaste!";
                    victorias++;
                    break;
                default:
                    res = "Empate!";
                    empates++;
            }
        } else if (movusuario == 'tijera') {
            switch (movpc) {
                case 'piedra':
                    res = "Perdiste!";
                    derrotas++;
                    break;
                case 'papel':
                    res = "Ganaste!";
                    victorias++;
                    break;
                default:
                    res = "Empate!";
                    empates++;
            }
        }

        // MOSTRAR RESULTADO
        document.getElementById("resultado").innerHTML = res;
        contadorJuegos++;
        actualizarJuegosRestantes(); // Actualizar los juegos restantes después de cada turno
        actualizarContadores(); // Actualizar los contadores de victorias, empates y derrotas
    }

    // SI SE TERMINAN LOS JUEGOS
    if (contadorJuegos > juegos) {
        document.getElementById("btnNuevo").style.display = "block";
    }
}

function nuevoJuego() {
    document.getElementById("contenedorJuego").style.display = "none";
    document.getElementById("contenedorInicial").style.display = "block";
    document.getElementById("btnNuevo").style.display = "none";
    document.getElementById("usuario").innerHTML = "";
    document.getElementById("pc").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("juegosRestantes").innerHTML = ""; // Reiniciar la visualización de juegos restantes
    document.getElementById("juegos").value = "";
    contadorJuegos = 1;
    juegos = 1;
    resetearContadores(); // Reiniciar los contadores de resultados
}

function actualizarJuegosRestantes() {
    let juegosRestantes = juegos - contadorJuegos + 1; // Calcula los juegos restantes
    document.getElementById("juegosRestantes").innerHTML = `Juegos Restantes: ${juegosRestantes > 0 ? juegosRestantes : 0}`;
}

function actualizarContadores() {
    document.getElementById("victorias").innerHTML = `Victorias: ${victorias}`;
    document.getElementById("empates").innerHTML = `Empates: ${empates}`;
    document.getElementById("derrotas").innerHTML = `Derrotas: ${derrotas}`;
}

function resetearContadores() {
    victorias = 0;
    empates = 0;
    derrotas = 0;
    actualizarContadores();
}
