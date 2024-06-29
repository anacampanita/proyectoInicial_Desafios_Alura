//alert('Hola Mundo'); // alert-mostrar mensaje, script hay comillas simples '' y comillas dobles ""
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos =1;
//palabraVeces = 'vez';
let maximosintentos = 3;
/*la operacion seguira repitiendose mientras elnumero de usuario sea diferente a numero secreto */
while (numeroUsuario != numeroSecreto){ 
    numeroUsuario = parseInt(prompt("Me indicas un numero por favor:  "));  //prompt permite mandar un mensaje para preguntar al usuario
    /*Dejamos en la memoria del computador el
    numero del usuario, let declaramos la varible*/
    //console.log('valor de intento: ', numeroUsuario);
    //parseInt guarda la variable en un entero
    console.log(typeof(numeroUsuario)); /*observamos la variable numeroUsuario lo vemos en
     la cosola para eso usamos el metodo log */  /*typeof-funcion para ver el tipo de dato */
    //Viene la condición
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto); 
    if (numeroUsuario == numeroSecreto){ //comparamos A & B  si numeroUsario es igual a numeroSecreto viene la condición verdadera
        //acertamos, fue verdadera la condición 
        alert(`Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
                                                                            //si intentos es igual a 1 escribira una vez sino veces                
        //console.log(`Acertaste el numero es: ${numeroUsuario}`); //se muestra el mensaje
        /*Con las comillas invertidas o template string
        lo que hace es incorporar la variable numeroUsuario
        */
        /* temple string es una manera de decirle al 
        computador que se prepare que ya que le va enviar 
        tanto una cadena y una varible, con el simbolo
        dolar da a entender la separación entre cadena y variable*/ 
    } else{
        if(numeroUsuario>numeroSecreto){  //condiciones anidadas
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //cuando la persona no acierta
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++;

        //palabraVeces='veces';
        /*Se rompe el buble cuando sobre pasa el numero de intentos */
        if (intentos>maximosintentos){
            alert(`Llegastes al numero maximo de ${maximosintentos}intentos`);
            break; //Se libera la caja con la función break (analogía de que el while es una caja) 

        }
        //La condición no se cumplio
        //alert('No acertastes el numero'); //se muestra un mensaje en caso de que no se cumplio la condición
        console.log('Valor del número secreto:', numeroSecreto);
    }
}
