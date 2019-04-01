let nombreEvento = document.getElementById("idEvento");
let categoria = document.getElementById("idCategoria");
let accion = document.getElementById("idAccion");
let etiqueta = document.getElementById("idEtiqueta");
let valor = document.getElementById("idValor");
const enviar = document.getElementById("boton");
enviar.addEventListener('click', datosPorClic);

// Obtener valor para "Evento sin interacción"
let noInteraccion = '';
function textoInteraccion() {
    noInteraccion = document.getElementById("idInteraccion");
    if (noInteraccion.checked == true) {
        noInteraccion = `, noninteraction: true`;
        }
    if (noInteraccion.checked == false || noInteraccion == '') {
        noInteraccion = '';
        }
    }

function datosPorClic() {
    // Elegir el "Tipo de evento javascript"
    let selector = document.getElementById('eventSelect');
    let tipoEvento = selector[selector.selectedIndex].value;
    
    // Obtener valor para el "Nombre del evento"
    let varEvento = nombreEvento.value;
    if (varEvento == '') {
        varEvento = 'ESTE CAMPO NO DEBE IR VACIO';
    }

    // Obtener valor de "Categoría"
    let nombreCategoria = categoria.value;
    let varCategoria;
    if (nombreCategoria == '') {
        varCategoria = `'event_category': 'ESTE CAMPO NO DEBE IR VACIO', `;
    }
    if (nombreCategoria.length >= 1) {
        varCategoria = `'event_category': '${nombreCategoria}', `;
    }

    // Obtener valor de "Acción"
    let nombreAccion = accion.value;
    let varAccion;
    let nombreEtiqueta = etiqueta.value;
    let varEtiqueta;
    let nombreValor = valor.value;
    let varValor;
    if (nombreAccion == '') {
        varAccion = `'event_action': 'ESTE CAMPO NO DEBE IR VACIO'`;
    }
    if (nombreAccion.length >= 1 && nombreEtiqueta == '') {
        varAccion = `'event_action': '${nombreAccion}'`;
    }
    if (nombreAccion.length >= 1 && nombreEtiqueta.length >= 1) {
        varAccion = `'event_action': '${nombreAccion}', `;
    }
    if (nombreAccion.length >= 1 && nombreValor.length >= 1) {
        varAccion = `'event_action': '${nombreAccion}', `;
        varValor = `'value': '${nombreValor}'`;
    }

    // Obtener valor de "Etiqueta"
    if (nombreEtiqueta.length >= 1) {
        varEtiqueta = `'event_label': '${nombreEtiqueta}'`;
    }
    if (nombreEtiqueta == '') {
        varEtiqueta = '';
    }
    if (nombreEtiqueta.length >= 1 && nombreValor.length >= 1) {
        varEtiqueta = `'event_label': '${nombreEtiqueta}', `;
    }

    // Obtener valor de "Value"
    if (nombreValor.length >= 1) {
        varValor = `'value': '${nombreValor}'`;
    }
    if (nombreValor == '') {
        varValor = '';
    }

    document.getElementById('codigo').innerHTML = `${tipoEvento}="gtag('event', '${varEvento}', { ${varCategoria} ${varAccion} ${varEtiqueta}${varValor}${noInteraccion}});`;
    document.getElementById('gracias').innerHTML = 'Gracias por utilizarlo y compartirlo :) <a href="https://www.primerocomunico.es" target="_blank">@primerocomunico</a>'
}

