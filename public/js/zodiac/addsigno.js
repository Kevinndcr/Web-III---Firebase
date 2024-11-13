// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const txtElemento = document.querySelector('#txtElemento');  // Nuevo campo para el elemento
const txtAstro = document.querySelector('#txtAstro');        // Nuevo campo para el astro celeste
const txtPiedra = document.querySelector('#txtPiedra');      // Nuevo campo para la piedra preciosa
const txtArchi = document.querySelector('#txtArchi');
const btnLoad  = document.querySelector('#btnLoad');

btnLoad.addEventListener('click', function() {
    const archivo = txtArchi.files[0];
    const nomarch = archivo ? archivo.name : null;

    if (!archivo) {
        alert('Debe seleccionar una imagen');
    } else {
        const metadata = {
            contentType: archivo.type
        };
        const subir = container.child('zodiaco/' + nomarch).put(archivo, metadata);

        subir
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                db.collection("datosZodiaco").add({
                    "posic": parseInt(txtPosic.value),
                    "signo": txtSigno.value,
                    "rango": txtRango.value,
                    "elemento": txtElemento.value,  // Guardar el elemento
                    "astro": txtAstro.value,        // Guardar el astro celeste
                    "piedra": txtPiedra.value,      // Guardar la piedra preciosa
                    "url": url
                }).then(function(docRef) {
                    alert("ID del registro: " + docRef.id);
                    limpiar();
                }).catch(function(FirebaseError) {
                    alert("Error al subir la imagen: " + FirebaseError);
                });
            });
    }
});

function limpiar() {
    txtPosic.value = '';
    txtSigno.value = '';
    txtRango.value = '';
    txtElemento.value = '';  // Limpiar el campo elemento
    txtAstro.value = '';     // Limpiar el campo astro
    txtPiedra.value = '';    // Limpiar el campo piedra
    txtArchi.value = '';
    txtPosic.focus();
}
