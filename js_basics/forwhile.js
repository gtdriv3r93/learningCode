

// function mifuncion(a,b,c,d){
//     var prodcuto = a*b*c*d
//     return prodcuto
    
// }

// let resultado = mifuncion(123,45,32,8);
// console.log(resultado);

arreglo = [1,1,1,1,1,1,1,1,1,1,1,1,1,11,3,1,1,1,3,12,10];
for(let a = 0; a <arreglo.length; a++){
   if(arreglo[a] == 11){
       arreglo[a]=arreglo[a]-1
       }
    if(arreglo[a] == 12){
        arreglo[a]= arreglo[a]+2
    }
    
}
console.log(arreglo)