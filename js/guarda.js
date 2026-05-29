
const boton = document.getElementById("favbtn");

boton.addEventListener("click", () => {
    localStorage.setItem("paginaFavorita", "Inicio");
    alert("Página favorita guardada.");
});