const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person);
const obj=JSON.parse(json,(key,val)=>{
  if(typeof val === "string") {
      return undefined;
  }
  return val;
})



console.log(obj); // Should return: { id: 1, age: 25 }
