let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

const elMayor = gente.reduce((oldest, currentPerson) => {
    return currentPerson.age > oldest.age ? currentPerson : oldest;
  }, gente[0]);
console.log(elMayor);