const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

console.log(person1);

const person2={...person1,address:{...person1.address, city:'Milan'}};


console.log(person1);
console.log(person2);