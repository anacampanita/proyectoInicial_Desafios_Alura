//alert('Hola Mundo'); // alert-mostrar mensaje, script hay comillas simples '' y comillas dobles ""

let numeroSecreto = 4; 
let numeroUsuario = prompt("Me indicas un numero por favor:  ");  //prompt permite mandar un mensaje para preguntar al usuario
/*Dejamos en la memoria del computador el
numero del usuario, let declaramos la varible*/
console.log('valor de intento: ', numeroUsuario);

console.log(numeroUsuario); /*observamos la variable numeroUsuario lo vemos en la cosola para eso usamos el metodo log */
//Viene la condición
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto); 
if (numeroUsuario == numeroSecreto){ //comparamos A & B  si numeroUsario es igual a numeroSecreto viene la condición verdadera
    //acertamos, fue verdadera la condición 
    alert(`Acertaste el numero es: ${numeroUsuario}`);
    //console.log(`Acertaste el numero es: ${numeroUsuario}`); //se muestra el mensaje
    /*Con las comillas invertidas o template string
    lo que hace es incorporar la variable numeroUsuario
     */
    /* temple string es una manera de decirle al 
    computador que se prepare que ya que le va enviar 
    tanto una cadena y una varible, con el simbolo
    dolar da a entender la separación entre cadena y variable*/ 
} else{
    //La condición no se cumplio
    alert('No acertastes el numero'); //se muestra un mensaje en caso de que no se cumplio la condición
    console.log('Valor del número secreto:', numeroSecreto);
}
