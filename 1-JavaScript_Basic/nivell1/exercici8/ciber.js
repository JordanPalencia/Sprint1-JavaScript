/*
    - Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
    - Estructura de la funció que faci sumes, restes i multiplicacions.
    - El resultat haurà de ser mostrar per pantalla.
*/

function calculadora(operador, valor1 ,valor2){
              
    if(operador === 'suma'){
        document.write('suma' + (valor1 + valor2) + '<br>');
    }
    if(operador === 'resta'){
        document.write('resta' + (valor1 - valor2) + '<br>');
    }
    if (operador === 'multiplicació'){
        document.write('multiplicació' + (valor1 * valor2) + '<br>');
    }
}
let operador, valor1, valor2;
var resultat = calculadora('suma', 40 , 20);
var resultat = calculadora('resta', 40 , 20);
var resultat = calculadora('multiplicació', 40 , 20);