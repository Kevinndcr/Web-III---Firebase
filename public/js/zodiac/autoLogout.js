// JavaScript Document: Auto-logout after 3 minutes of inactivity

var inactivityTimeout;

// Función para cerrar sesión
function cerrarSesion() {
    alert("Sesión cerrada por inactividad.");
    firebase.auth().signOut().then(() => {
        // Redireccionar a la página de inicio de sesión después de cerrar sesión
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Error al cerrar sesión:", error);
    });
}

// Función para reiniciar el temporizador de inactividad
function reiniciarTemporizador() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(cerrarSesion, 180000); // 180000 ms = 3 minutos
}

// Asigna eventos para reiniciar el temporizador con cada acción del usuario
window.onload = reiniciarTemporizador;
window.onmousemove = reiniciarTemporizador;
window.onkeypress = reiniciarTemporizador;
window.ontouchstart = reiniciarTemporizador;
