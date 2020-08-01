

// function mifuncion(a,b,c,d){
//     var prodcuto = a*b*c*d
//     return prodcuto
    
// }

// let resultado = mifuncion(123,45,32,8);
// console.log(resultado);

// arreglo = [];
// for(let a = 0; a <16; a++){
//  arreglo.push(a*a)
// }
//console.log(arreglo)

// function numeroPrimo(a,b){
//     for(let index = a; index<=b; index++){
//         if(index )
//     }
// }

// let index = 23;
// let cociente = index/index;
// if(cocinete == 1){
//     if(index/1 == index)
// }

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
let numeroPrimo = 0;
let numeroDePrimos = 0;
let restoDeNumeros = 0;
//  for(let index = 2; index <=200000; index++){
//       numeroPrimo = isPrime(index)
//       //console.log(index,"Es Primo",numeroPrimo)
//       if(numeroPrimo == true){
//          numeroDePrimos++;
//       }else{
//         restoDeNumeros++;
//       }    
//   }
//   console.log("Primos", (numeroDePrimos),"- No Primos", (restoDeNumeros))
numeroPrimo = 0;

 let index = 10000;
 
 while(numeroPrimo == false){
    numeroPrimo = isPrime(index)
       
    index++;   
 }c
 console.log(index-1,"Es Primo",numeroPrimo)
 //console.log("Primos", (numeroDePrimos),"- No Primos", (restoDeNumeros))

 let names=["luke","vader","windu","obi-wan"]
 let weaponColor =["blue","green","red","purple"]
 let side=["dark","light"]

 let characters = {
   name:"example",
   lightsaber:"example",
   side:"example",
 }

 //crear objetos por cada personaje con sus respectivas caracteristicas, usar for loop, funciones, etc...