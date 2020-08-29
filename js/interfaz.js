export const $formulario = document.querySelector("#formulario-buscar"),
  $divBuscar = document.querySelector("#buscar"),
  $divMensaje = document.querySelector("#mensajes"),
  $divResultado = document.querySelector("#resultado");

export function mostrarMensaje(mensaje, clase) {
  $divMensaje.innerHTML = `${mensaje}`;
  $divMensaje.classList.add(`${clase}`);
  setTimeout(() => {
    $divMensaje.innerHTML = "";
    $divMensaje.classList.remove(`${clase}`);
  }, 3000);
}
