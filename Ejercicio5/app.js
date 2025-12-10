//se importan las librerias
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//variable inicializada 
let total = 0;

//se solicita la cantidad de productos a agregar
let cantidad = parseInt(prompt("¿cuantos productos desea comprar?: "))

//ciclo que itera la cantidad de veces ingresadas por el usuario
for (let i = 1; i <=cantidad; i++){

    //se solicita el producto y el precio
    let productos = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio del producto: "))

    //se suman los precios de los productos y se muestra el total
    total += precio;
    console.log(`producto: ${productos}: ${precio} total: ${total}`)

}

//condicional si aplica descuento 
if (total > 100000) {
  const descuento = total * 0.10;
  const totalConDescuento = total - descuento;
  console.log(`Total de la compra: $${total}`);
  console.log(`Se aplica un descuento del 10%: -$${descuento}`);
  console.log(`Total a pagar: $${totalConDescuento}`);
} else {
  console.log(` Total de la compra: $${total}`);
}

console.log("¡Gracias por su compra!");
