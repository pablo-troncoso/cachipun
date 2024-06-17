// Variables Contadores
let juegos = 1;
let contadorJuegos = 1;
let victorias = 0;
let empates = 0;
let derrotas = 0;

// Íconos Movimientos
const iconos = [
    '<i class="fa-regular fa-hand-back-fist icono" id="piedra"></i>',
    '<i class="fa-regular fa-hand icono" id="papel"></i>',
    '<i class="fa-regular fa-hand-scissors icono" id="tijera"></i>'
];

// Función para comenzar el juego
function comenzar() {
    document.getElementById("contenedorJuego").style.display = "block";
    document.getElementById("contenedorInicial").style.display = "none";
    juegos = parseInt(document.getElementById("juegos").value);
    contadorJuegos = 1; // Reiniciar el contador de juegos cada vez que se comienza
    actualizarJuegosRestantes(); // Mostrar los juegos restantes al inicio
    resetearContadores(); // Reiniciar los contadores de resultados

    // Asegurarse de que el icono de reinicio vuelva a su color original
    document.querySelector('.icon-reset').style.color = '#333';
}

// Función para jugar
function jugar(obj) {
    let res;
    const objetos = ["piedra", "papel", "tijera"];

    if (contadorJuegos <= juegos) {
        let pc = Math.floor(Math.random() * 3);

        // MANTENER EL ÍCONO SELECCIONADO EN AZUL
        document.querySelectorAll('.icono').forEach(icono => icono.classList.remove('selected'));
        document.getElementById(objetos[obj]).classList.add('selected');

        // MOVIMIENTOS DEL COMPUTADOR
        let movpc = iconos[pc]; // Usar los mismos iconos que los movimientos del jugador

        // Crear un nuevo div para contener el ícono del computador
        let pcIcon = document.createElement('div');
        pcIcon.innerHTML = movpc;
        let pcElement = pcIcon.firstChild;
        pcElement.classList.add('icon-appear'); // Aplicar la clase de aparición rápida

        // Limpiar cualquier contenido previo y añadir el nuevo ícono con la clase de aparición
        document.getElementById("pc").innerHTML = '';
        document.getElementById("pc").appendChild(pcElement);

        // Después de una pequeña demora, añadir la clase selected para la animación de aparición
        setTimeout(() => {
            pcElement.classList.add('selected');
        }, 10); // Pequeña demora para la aparición

        // LÓGICA PARA DETERMINAR EL GANADOR
        if (obj == 0 && pc == 1 || obj == 1 && pc == 2 || obj == 2 && pc == 0) {
            res = "Perdiste!";
            derrotas++;
        } else if (obj == pc) {
            res = "Empate!";
            empates++;
        } else {
            res = "Ganaste!";
            victorias++;
        }

        // MOSTRAR RESULTADO
        document.getElementById("resultado").innerHTML = res;
        document.getElementById("resultado").style.fontSize = "36px";
        document.getElementById("resultado").style.color = "#007bff";
        contadorJuegos++;
        actualizarJuegosRestantes(); // Actualizar los juegos restantes después de cada turno
        actualizarContadores(); // Actualizar los contadores de victorias, empates y derrotas

        // Cambiar color del ícono de reinicio si se acaban las jugadas
        if (contadorJuegos > juegos) {
            document.querySelector('.icon-reset').style.color = '#007bff';
        }
    }
}

// Función para resetear todo y volver al inicio
function nuevoJuego() {
    document.querySelectorAll('.icono').forEach(icono => icono.classList.remove('selected'));
    document.getElementById("pc").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("juegosRestantes").innerHTML = "";
    document.getElementById("juegos").value = "";
    contadorJuegos = 1;
    juegos = 1;
    resetearContadores(); // Reiniciar los contadores de resultados
    document.getElementById("contenedorJuego").style.display = "none";
    document.getElementById("contenedorInicial").style.display = "flex"; // Volver a mostrar el contenedor inicial
    document.getElementById("btnNuevo").style.display = "none";

    // Restaurar posición del texto inicial
    document.getElementById("contenedorInicial").style.marginTop = "20px";

    // Aplicar animación al título "CACHIPÚN"
    aplicarAnimacionTitulo();
}

// Función para aplicar la animación al título
function aplicarAnimacionTitulo() {
    const titulo = document.querySelector('.titulo');
    titulo.style.animation = 'none'; // Detener cualquier animación en curso
    titulo.offsetHeight; // Forzar un reflow
    titulo.style.animation = ''; // Reanudar la animación definida en CSS

    // Añadir una pequeña demora para asegurarnos de que el cambio se perciba
    setTimeout(() => {
        titulo.classList.remove('selected'); // Remover la clase actual
        void titulo.offsetWidth; // Forzar un reflow
        titulo.classList.add('selected'); // Añadir la clase para iniciar la animación
    }, 10);
}

// Función para actualizar el número de juegos restantes
function actualizarJuegosRestantes() {
    let juegosRestantes = juegos - contadorJuegos + 1;
    document.getElementById("juegosRestantes").innerHTML = `Juegos Restantes: ${juegosRestantes > 0 ? juegosRestantes : 0}`;
}

// Función para actualizar los contadores de resultados
function actualizarContadores() {
    document.getElementById("victorias").innerHTML = `Victorias: ${victorias}`;
    document.getElementById("empates").innerHTML = `Empates: ${empates}`;
    document.getElementById("derrotas").innerHTML = `Derrotas: ${derrotas}`;
}

// Función para resetear los contadores de resultados
function resetearContadores() {
    victorias = 0;
    empates = 0;
    derrotas = 0;
    actualizarContadores();
}

// Función para aplicar el efecto de aparición al título al cargar la página
function aplicarEfectoTitulo() {
    const titulo = document.querySelector('.titulo');
    setTimeout(() => {
        titulo.classList.add('selected'); // Añadir la clase selected para iniciar la animación
    }, 10); // Pequeña demora para la aparición inicial
}

// Llamar a la función para aplicar el efecto de aparición al cargar la página
document.addEventListener('DOMContentLoaded', aplicarEfectoTitulo);

// Añadir animación de presionado al hacer clic en el ícono de reset
document.querySelector('.icon-reset').addEventListener('click', function() {
    const resetIcon = this;
    resetIcon.classList.add('pressed');
    setTimeout(() => {
        resetIcon.classList.remove('pressed');
        nuevoJuego(); // Llamar a la función de nuevo juego después de la animación
    }, 200); // Tiempo de la animación (0.2s)
});
