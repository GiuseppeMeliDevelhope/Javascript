const number = 15;
const promise= new Promise((res,rej) => number > 10 ? res(number) : rej("10"))
promise.then(res => console.log(res)).catch(rej=> console.error(rej))
