// se importan las librerías
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

// se genera un número aleatorio entre 1 y 20
const numeroSecreto = Math.floor(Math.random() * 20) + 1;

// variable para almacenar el intento del usuario
let intento;

// ciclo que se repite hasta que el usuario adivine
do {
  // se solicita el número al usuario
  intento = parseInt(prompt("Ingrese un número entre 1 y 20: "));

  // condicionales para comparar con el número secreto
  if (intento < numeroSecreto) {
    console.log("El número secreto es mayor.");
  } else if (intento > numeroSecreto) {
    console.log("El número secreto es menor.");
  } else {
    console.log(`¡Correcto! El número secreto era ${numeroSecreto}.`);
  }

} while (intento !== numeroSecreto);

// mensaje final
console.log("Fin del juego. ¡Gracias por jugar!");