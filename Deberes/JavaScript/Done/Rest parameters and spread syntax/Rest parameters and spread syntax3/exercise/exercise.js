const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo);
const { id, ...personInfo } = person;
console.log(person); 

//No entiendo por qué no funciona
//Preguntaré en clase
