/*1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/
 let dia = prompt('Que dia de la semana es: ');
 if(dia=='sabado'|| dia=='domingo'){
    alert("Buen fin de semana");
 }else{
    alert("buena semana");
 }
 /*2. Verifica si un número ingresado por el usuario es positivo o negativo.
  Muestra una alerta informativa. */
let numero = prompt('Ingresa un numero');
if(numero>0){
    alert("El numero es positivo ");
} else if(numero<0){
    alert("El numero es negativo");
}else{
    alert("El numero es cero");
}
/*3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.". */
let puntuacion =300;
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo de nuevo para ganar");
}
/*4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
 utilizando un template string para incluir el valor del saldo. */
let saldoActual=3000;
let saldo = prompt("Desea ver su saldo actual, ¿si o no?");
if(saldo=='si'){
    alert(`Su saldo actua es: ${saldoActual}`);
}else{
    alert('vuelva mas tarde');
}
/*Pide al usuario que ingrese su nombre mediante un prompt.
Luego, muestra una alerta de bienvenida usando ese nombre. */
let nombre = prompt('Ingrese su nombre');
alert(`Bienvenido a mi pagina ${nombre}`);