//se importan las librerias
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//for anidado que informa sobre el estudiante evaluado 
for (let i=1; i <=5; i++){
    console.log(`Estudiante ${i}`)
    let sum = 0;

    //for que solicita las notas de cada estudiante y itera hasta que se cumpla la condicion
    for (let j= 1; j <=3; j++){
        let nota = parseFloat(prompt(`Ingrese la nota ${j}: `));
        sum += nota;
    }

    //se calcula el promedio 
    let promedio = sum/3;

    //se informa si el estudiante aprueba o reprueba
    let resultado = promedio >=3.0 ? "Aprueba": "Reprueba";

    //se muestran los resultados 
    console.log(`El estudiante ${i} obtuvo un promedio de: ${promedio} y ${resultado}`)
} 

