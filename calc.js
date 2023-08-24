// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync

var nombre; 
var n1,n2, suma;

seguir=prompt("Bienvenido, quiere seguir?");
if(seguir=="s") {
    opcion=parseInt(prompt("(1)Suma (2)Resta (3)Multiplicacion (4)Division"));
    if (opcion==1){
        nombre = prompt("Ingrese nombre: ");
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        suma = n1+n2;
        console.log("Esto es suma")
        console.log(suma);
    }
    else if (opcion==2)
    {
        console.log("Resta")
    }
    else if(opcion==3)
    {
        console.log("Multiplicacion");
    }
    else {
        console.log("Division")
    }
}
else{
    console.log("Chau")
}      