//se importan las librerias
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//se define el saldo de la cuenta en una constante
const saldo = 30000000;

//inicia ciclo verdadero
while(true){
    //variable para solicitar el monto a retirar
    let retiro = parseFloat(prompt("¡Dinero a retirar?: "))

    //condicional para verificar si el monto a retirar es menor al saldo actual
    if (saldo>retiro){
        //se actualiza el saldo en la cuenta y se muestra el resultado
        let total = saldo - retiro;
        console.log (`El total en su cuenta bancaria es de: ${total}`)
        //si el saldo es insuficiente se corta el ciclo
    }else{
        console.log("Ha ocurrido un error, saldo insuficiente")
        break
    }
    
    //condicional para repetir el ciclo nuevamente 
    const continuar = prompt("¿Desea realizar otro retiro? (s/n): ").trim().toLowerCase();
    if (continuar !== "s") {
        console.log("Programa finalizado. ¡Gracias por usar el cajero automático!");
    break;
  }

    
}