// ==============================
// FECHAS CORRECTAS
// ==============================

const fechaConocimos = "2026-05-14";
const fechaNovios = "2026-06-14";

// ==============================
// ELEMENTOS
// ==============================

const unlockButton = document.getElementById("unlockButton");
const message = document.getElementById("message");
const loginSection = document.getElementById("loginSection");
const content = document.getElementById("content");
const music = document.getElementById("music");

// ==============================
// DESBLOQUEAR
// ==============================

unlockButton.addEventListener("click", function () {

    const meetDate = document.getElementById("meetDate").value;
    const loveDate = document.getElementById("loveDate").value;

    if (meetDate === fechaConocimos && loveDate === fechaNovios) {

        // Ocultar pantalla de acceso
        loginSection.style.display = "none";

        // Mostrar contenido
        content.style.display = "block";

        // Iniciar música (si existe el archivo)
        if (music) {
            music.play().catch(function () {});
        }

        // Ir al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        message.innerHTML = "❤️ Las fechas no son correctas. Inténtalo nuevamente.";

    }

});