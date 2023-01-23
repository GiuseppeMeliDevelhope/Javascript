const isLogged = true;


function logIn(isLogged){
   
    return new Promise((resolve,reject)=>{
        let randNum=Math.random();
        if(isLogged===true) {
            resolve(randNum);
        }else{
            reject(new Error("Not logged in!"))
        }
    })
}



function person(randNum){
    return new Promise((resolve,reject)=>{
        
            if(randNum>0.5){
                resolve({name:"John",age:24})
            }else{
                reject(new Error("There is an error"))
            }

        })
    }


logIn(isLogged)
  .then(person)
  .then((val)=> console.log(val))
  .catch ((err)=> console.log(err))