var db = firebase.apps[0].firestore();
const tabla = document.querySelector('#tabla');

db.collection("datosZodiaco").orderBy('posic', 'asc').get().then(function(query) {
    tabla.innerHTML = "";
    var salida = "";
    query.forEach(function(doc) {
        salida += `<div class="divAnuncio m-3">
                        <div class="imgBlock"><img src="${doc.data().url}" width="100%" /></div>
                        <div>${doc.data().signo} <br/> ${doc.data().rango}</div>
                        <a href="editar.html?id=${doc.id}" class="btn btn-primary mt-2">Editar</a>
                   </div>`;
    });
    tabla.innerHTML = salida;
});
