function printAsyncName(callback,string){
    setTimeout(()=>{
      callback();
    },1000)
    setTimeout(()=>{
        console.log(string);
      },3000)
}

printAsyncName(()=>console.log("Hello"),"Giuseppe");
