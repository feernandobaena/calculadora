let pantalla = document.getElementById('pantalla');
let num1 = 0;
let num2 = 0;
let operacion = null;


function agregarNumero(numero) {
    pantalla.value += Number(numero);
}
function elegirOperacion(op) {
    num1 = Number(pantalla.value);
    operacion = op;
    pantalla.value = '';
}

function calcular() {
    num2 = Number(pantalla.value)
    let resultado = 0;
    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;

    }

    pantalla.value= resultado;
}

function limpiar(){
    pantalla.value = '';
    num1 = 0;
    num2 = 0;
    operacion = null;
}