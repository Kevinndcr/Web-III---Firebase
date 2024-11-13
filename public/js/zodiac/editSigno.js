// Firebase initialization
var db = firebase.firestore();

// Obtener el ID del signo desde la URL
const urlParams = new URLSearchParams(window.location.search);
const signoId = urlParams.get('id');

// Elementos del formulario
const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const txtElemento = document.querySelector('#txtElemento');
const txtAstro = document.querySelector('#txtAstro');
const txtPiedra = document.querySelector('#txtPiedra');
const btnSave = document.querySelector('#btnSave');

// Cargar datos actuales del signo
db.collection("datosZodiaco").doc(signoId).get()
    .then(doc => {
        if (doc.exists) {
            txtPosic.value = doc.data().posic;
            txtSigno.value = doc.data().signo;
            txtRango.value = doc.data().rango;
            txtElemento.value = doc.data().elemento;
            txtAstro.value = doc.data().astro;
            txtPiedra.value = doc.data().piedra;
        } else {
            alert("No se encontró el signo zodiacal.");
        }
    })
    .catch(error => {
        alert("Error al cargar los datos: " + error.message);
    });

// Guardar cambios
btnSave.addEventListener('click', function() {
    db.collection("datosZodiaco").doc(signoId).update({
        posic: parseInt(txtPosic.value),
        signo: txtSigno.value,
        rango: txtRango.value,
        elemento: txtElemento.value,
        astro: txtAstro.value,
        piedra: txtPiedra.value
    })
    .then(() => {
        alert("Cambios guardados correctamente.");
        window.location.href = "lista.html";  // Redirigir a la lista
    })
    .catch(error => {
        alert("Error al guardar cambios: " + error.message);
    });
});
