// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

/*
Primer intento de solución
*/

// let numberStore=[0,1,2];
// let newNumber=3;
// let newNumberStore=[...numberStore,newNumber];
// function sum(...rest){
//     return rest.reduce((a,b)=>a+b);
// }
// console.log(sum(newNumberStore));

/*
Resultado final;
*/
class myArray extends Array{
    constructor(...rest){
        super(...rest);
    }
    sum(){
        return this.reduce((a,b)=>a+b);
    }
}

let numberStore= new myArray(0,1,2);

console.log(numberStore);
console.log(numberStore.sum());