const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const {id,age}=person;

const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }


//No sé cómo hacerlo, he intentado con template string y el método actual
//Pero no funciona como debería
//Necesito una explicación sobre cómo debería hacerlo
//Y sobre todo saber por qué y cómo funciona