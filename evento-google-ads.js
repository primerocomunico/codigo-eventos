let evento = document.getElementById("idEvento");
let categoria = document.getElementById("idCategoria");
let accion = document.getElementById("idAccion");
let etiqueta = document.getElementById("idEtiqueta");
let valor = document.getElementById("idValor");
const enviar = document.getElementById("boton");
enviar.addEventListener('click', datosPorClic);

let goodEvento = false;
let goodCategoria = false; 
let goodAccion = false; 
let goodEtiqueta; 
let goodValor; 
let noInteraccion = '';

function textoInteraccion() {
    noInteraccion = document.getElementById("idInteraccion");
    if (noInteraccion.checked == true) {
        noInteraccion = `noninteraction: true`;
        }
    if (noInteraccion.checked == false || noInteraccion == '') {
        noInteraccion = '';
        }
    }

function datosPorClic() {
    
    goodEvento = evento.value;
    if (goodEvento == false) {
        goodEvento = 'ESTE CAMPO NO DEBE IR VACIO';
    }
    goodCategoria = categoria.value;
    if (goodCategoria == false) {
        goodCategoria = 'ESTE CAMPO NO DEBE IR VACIO';
    }
    goodAccion = accion.value;
    if (document.getElementById("idAccion").value.length >= 1)  {
        goodAccion = `'event_action': '${accion.value}',`;
    }
    if (document.getElementById("idAccion").value.length == '') {
        goodAccion = "'event_action': ESTE CAMPO NO DEBE IR VACIO";
    }

    // Obtener valor de event_label
    goodEtiqueta = accion.value;
    if (document.getElementById("idEtiqueta").value.length >= 1)  {
        goodEtiqueta = `'event_label': '${etiqueta.value}',`;
    }
    if (document.getElementById("idEtiqueta").value.length == '') {
        goodEtiqueta = '';
        goodAccion = `'event_action': '${accion.value}'`;
    }
    // Obtener valor de value
    goodValor = valor.value;
    if (document.getElementById("idValor").value.length >= 1)  {
        goodValor = `'value': '${valor.value}',`;
    }
    if (document.getElementById("idValor").value.length == '') {
        goodValor = '';
        goodEtiqueta = `'event_label': '${etiqueta.value}'`;
    }
    
}



    var selector = document.getElementById('eventSelect');
    var tipoEvento = selector[selector.selectedIndex].value;

    document.getElementById('codigo').innerHTML = `${tipoEvento}="gtag('event', '${goodEvento}', {'event_category': '${goodCategoria}', ${goodAccion} ${goodEtiqueta} ${goodValor} ${noInteraccion}});`;