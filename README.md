# Cachipún VS Tú Computador!

¡Bienvenido! Este proyecto permite a los usuarios jugar el clásico Cachipún, (juego de piedra, papel o tijera) contra el computador.

## Descripción del Proyecto

Este juego, también conocido como "piedra, papel o tijera", es un juego simple entre dos personas (en este caso, tú y el computador). Cada jugador elige una de las tres opciones de manera secreta y compara su elección con la del oponente para determinar quién gana.

### Reglas del Juego

- **Tijera** le gana a **Papel**
- **Papel** le gana a **Piedra**
- **Piedra** le gana a **Tijera**
- Si ambos jugadores eligen la misma opción, es un **Empate**

## Requerimientos del Juego

1. **Solicitar las veces que se repetirá el juego**:
   - El usuario debe indicar cuántas veces desea jugar contra la computadora consecutivamente.
   - Después de cada juego, se muestra el resultado y se continúa hasta alcanzar el número de juegos especificado.

2. **Solicitar la jugada del usuario**:
   - El usuario elige entre `Piedra`, `Papel` o `Tijera`.

3. **Generar la jugada automática para la máquina**:
   - La jugada de la máquina se determina usando una función aleatoria (`Math.random()`).

4. **Determinar al ganador**:
   - Comparar la jugada del usuario con la de la máquina para definir al ganador.

5. **Mostrar el resultado de cada partida**:
   - **Felicitar** al usuario si gana.
   - **Indicar la derrota** si pierde contra la máquina.
   - **Declarar un empate** si ambos eligen la misma opción.

## Cómo Jugar

1. **Abrir el archivo `index.html`**:
   - Puedes abrir el archivo directamente en un navegador web para comenzar a jugar.
   - https://pablo-troncoso.github.io/cachipun/

2. **Ingresar el número de juegos**:
   - Introduce cuántas veces quieres jugar contra la máquina.

3. **Seleccionar tu movimiento**:
   - Haz clic en `Piedra`, `Papel` o `Tijera` para jugar cada ronda.

4. **Ver el resultado**:
   - El resultado de cada ronda se mostrará inmediatamente después de hacer tu elección.

5. **Jugar nuevamente**:
   - Después de completar todas las rondas, puedes elegir volver a jugar.

## Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio**:
   - Usa `git clone` para descargar el proyecto en tu máquina local.
     ```bash
     git clone https://github.com/pablo-troncoso/cachipun.git
     ```
2. **Navegar al directorio del proyecto**:
   - Abre la terminal y navega hasta el directorio del proyecto.
     ```bash
     cd cachipun
     ```
3. **Abrir el archivo `index.html`**:
   - Abre el archivo `index.html` en tu navegador preferido para iniciar el juego.

4. **También puedes ingresar y jugar por el sitio de GitHub Pages**:
   - https://pablo-troncoso.github.io/cachipun/

## Estructura del Proyecto

- `index.html`: Archivo principal que contiene la estructura del juego.
- `assets/css/styles.css`: Archivo CSS que contiene los estilos del juego.
- `assets/js/script.js`: Archivo JavaScript que contiene la lógica del juego.

## Autor

- **Pablo Troncoso**

¡Disfruta del juego!


