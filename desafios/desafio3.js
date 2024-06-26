/*1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
Muestra cada número. */
let contador =0;
while (contador<=10){
    console.log(contador);
    contador = contador + 1;

}
/*2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
 Muestra cada número. */
let contador2 = 10;
while (contador2>=0){
    console.log(contador2);
    contador2 = contador2 - 1;
}
/*3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número
 utilizando un bucle 'while' en la consola del navegador. */
let numero = prompt('Ingrese un numero');
while (numero>=0){
    console.log(numero);
    numero= numero -1;
}
/*4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número
 utilizando un bucle 'while' en la consola del navegador. */
let numero2 = prompt('Ingrese un numero');
let contador3=0;
while (contador3<=numero){
    console.log(contador3);
    contador3= contador3 + 1;
}