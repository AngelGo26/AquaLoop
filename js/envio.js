document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("miniformulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío predeterminado
        alert("Formulario enviado con éxito.");
        window.location.href = "index.html"; // Redirige a index.html
    });

    // Función para reiniciar los datos
    window.resetearDatos = function () {
        document.getElementById("miniformulario").reset();
    };
});
