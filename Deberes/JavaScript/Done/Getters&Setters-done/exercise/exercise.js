class Person {
  _firstName="";
  _lastName="";
  _age=0;

  constructor(_firstName,_lastName,_age){
    this._firstName=_firstName;
    this._lastName=_lastName;
    this._age=_age;
  }
  /**
   * @param {number} newAge
   */
  set firstName(newName){
    this._firstName=newName;
  }
  set lastName(newSurName){
    this._lastName=newSurName;
  }
  set age (newAge) {
    if(newAge>=18 && newAge<=100 && typeof(newAge)==="number"){
      this.age = newAge;
    } else if (typeof(newAge)!="number"){
      this.age= Number(newAge);
    }
  }
  get getName(){
    return this._firstName;
  }
  get getSurName(){
    return this._lastName;
  }
  get getAge(){
    return this._age;
  }
  get fullName(){
    return this._firstName+" "+this._lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);