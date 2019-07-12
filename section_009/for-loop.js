console.log("Print all numbers between -10 and 19.");
for(let i = -10; i < 20; i++){
  console.log(i);
}

console.log("Print all even numbers between 10 and 40.");
for (let i = 10; i < 41; i+=2) {
    console.log(i);
}

console.log("Print all odd numbers between 300 and 333.");
for (let i = 301; i < 334; i+=2) {
    console.log(i);
}

console.log("Print all numbers that are divisible by 5 and 3 between 5 and 50.");
for (let i = 5; i < 51; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}