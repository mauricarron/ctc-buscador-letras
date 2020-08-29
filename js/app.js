import { API } from "./api.js";
import * as UI from "./interfaz.js";

UI.$formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista !== "" || cancion !== "") {
    const api = new API(artista, cancion);
    api.resquestApi().then((data) => {
      if (data.lyrics) {
        const letra = data.lyrics;
        UI.$divResultado.textContent = letra;
        UI.$formulario.reset();
      } else {
        UI.mostrarMensaje("Letra no encontrada.", "error");
        UI.$formulario.reset();
      }
    });
  } else {
    UI.mostrarMensaje("Ambos campos son obligatorios.", "error");
  }
});
