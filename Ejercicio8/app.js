// se importan las librerías
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

// variables inicializadas
const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";
let intentos = 0;
let acceso = false;

// ciclo que permite hasta 3 intentos
while (intentos < 3) {
  // se solicita usuario y contraseña
  let usuario = prompt("Ingrese el usuario: ");
  let contrasena = prompt("Ingrese la contraseña: ");

  // condicional para verificar credenciales
  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    console.log("Bienvenido");
    acceso = true;
    break; // salir del ciclo si acierta
  } else {
    console.log("Usuario o contraseña incorrectos.");
    intentos++;
  }
}

// condicional si falla en todos los intentos
if (!acceso) {
  console.log("Acceso denegado");
}