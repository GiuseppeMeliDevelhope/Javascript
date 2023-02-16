const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveData(user){
  localStorage.setItem('user',JSON.stringify(user));
}

function getSavedData(){
    const user= localStorage.getItem('user');
       console.log(user);
}