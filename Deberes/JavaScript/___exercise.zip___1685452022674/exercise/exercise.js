
let sum=(a,b)=> {
   return a+b;
}
let subtract =  (a, b) =>{
   return a - b;
}

let multiply =  (a, b)=> {
   return a * b;
}

let divide= (a, b)=> {
   return a / b;
}

const log = (value)=> {
  console.log(value);
}

console.log("((2+4)*(2+5)-2)/5");

function calc(sum, subtract,multiply,divide) {
   let a= sum(2,4);
   let b= sum(5,2);
   let c= multiply(a,b);
   let d= subtract(c,2);
   let e= divide(d,5);
   
   log(e);
   
   log(divide(subtract(multiply(sum(2,4),sum(5,2)),2),5));
}

calc(sum, subtract,multiply,divide);

/*
function calculator() {

   let operation= prompt("Introduce tu operacion:");
}

calculator();
*/