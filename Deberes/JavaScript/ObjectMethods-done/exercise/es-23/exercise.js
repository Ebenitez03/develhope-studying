const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys= Object.keys(person);
console.log(keys);
let values= Object.values(person);
console.log(values);
let entries =Object.entries(person);

for (let entry of entries) {
  let [key, val]=entry;
  console.log(key);
  console.log(val);
}
