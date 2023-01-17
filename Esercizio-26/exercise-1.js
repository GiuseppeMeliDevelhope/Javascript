function sumTotal(...numbers) {
    let sum=0;
    for(let number of numbers) sum+=number;
    return sum;
}

console.log(sumTotal(1, 2, 3, 4, 5,));