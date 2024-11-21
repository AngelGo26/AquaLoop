document.getElementById("miniformulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado
    alert("Formulario enviado con éxito.");
    window.location.href = "index.html"; // Redirige a index.html
});

function resetearDatos() {
    document.forms['miniformulario'].reset();
}
