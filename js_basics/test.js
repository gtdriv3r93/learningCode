/* Arreglos y objetos
let paises = ["Alemania","Italia","Francia"];
let superficie = [3.5,1.8,2.9];
let pais1 = {
    nombre: paises[0],
    km: superficie[0]
};
let pais2 = {
    nombre: paises[1],
    km: superficie[1]
};
let pais3 = {
    nombre: paises[2],
    km: superficie[2]
};
let unionEuropea = {'pais1':pais1,'pais2':pais2,'pais3':pais3};
let edades = [13,15,67,43,22,12];
let mean = edades[0]+edades[1]+edades[2]+edades[3]+edades[4]+edades[5];
edades[6]=32;
mean = mean+edades[6]
mean = mean/edades.length;

// 
*/
// Hilo Principal
let arreglo  = [100,150,20,550];
let resultado = mean(arreglo);
console.log(resultado);
let arreglo2 = [65,34,234,89];
let arreglo3 = [123,234,345,456];
let resultado2 = mean(arreglo2);
let resultado3 = mean(arreglo3);
console.log(resultado2);
console.log(resultado3);
//Fin de hilo principal
// Funciones
function product(a,b){
    var prod = a*b;
    return prod;
}
function square(c){
    var sqr = Math.sqrt(c);
    return sqr;
}
function mean(arregloRecibido){
    let promedio = arregloRecibido[0]+arregloRecibido[1]+arregloRecibido[2]+arregloRecibido[3];
    promedio = promedio/arregloRecibido.length;
    return promedio;
}






