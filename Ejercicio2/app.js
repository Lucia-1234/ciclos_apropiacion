//se importan las librerias
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//se crea variable que ayuda a repetir el for d
let continuar;

//se solicita el numero 
do{
  let num = parseInt(prompt("Ingrese un numero: "));

// inicia ciclo que se itera hasta 12 y muestra los resultados realizando la multiplicacion
for (let i = 1; i <= 12; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

//se pregunta al usuario si desea continuar 
continuar = prompt("¿Desea consultar otra tabla? (s/n):");

// se lee la resppuesta y se ejecuta segun corresponda 
} while (continuar.toLowerCase() === "s");

console.log("Programa finalizado. ¡Gracias por usarlo!");
