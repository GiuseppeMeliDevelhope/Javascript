class Person {
  constructor(firstName,lastName, age){
    this._firstName=firstName;
    this._lastName=lastName;
    this._age=age;
  }
  
  set firstName(val){
    this._firstName=val;
  }

  set lastName(val){
    this._lastName=val;
  }
  
  set age(val){
    this._age=val;
  }
  
  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get age(){
    return this._age;
  }
  get fullName(){
    return this._firstName + " " + this._lastName;
  }
}



const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);