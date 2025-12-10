// se importan las librerías
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

// variables inicializadas
let pares = 0;
let impares = 0;

// se solicita la cantidad de números a ingresar
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));

// ciclo que itera la cantidad de veces ingresadas por el usuario
for (let i = 1; i <= cantidad; i++) {

  // se solicita el número
  let numero = parseFloat(prompt(`Ingrese el número ${i}: `));

  // se determina si es par o impar y se contabiliza
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

// mostrar resultados finales
console.log(`Números pares: ${pares}`);
console.log(`Números impares: ${impares}`);