const user = {
  id: 1,
  name: "John",
  age: 25,
};


localStorage.setItem("user", JSON.stringify(user));
let storage= localStorage.getItem("user");
console.log("storage:", JSON.parse(storage));