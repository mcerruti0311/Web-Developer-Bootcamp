
console.log("Numbers from -10 to 19")
let num = -10;

while (num < 20) {
  console.log(num);
  num++;
}

num = 10;

console.log("All Even Numbers Between 10 and 40");

while (num < 41) {
  if(num % 2 === 0) {
      console.log(num);
  }
    num++
}

console.log("All Odd numbers between 300 and 333");

num = 300;

while(num < 334) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num++
}

console.log("All numbers divisible by 5 and 3 between 5 and 50");

num = 5;

while(num < 51) {

    if(num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++
}