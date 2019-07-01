const age = prompt("What is your age");
console.log(age);

console.log(Math.sqrt(Math.pow(age, 2)) == age);

if (age < 0) {
 console.log("age must be a positive number")
} else if (age === 21) {
  console.log("Happy 21st Birthday, have a free shot");
} else if (age % 2 != 0) {
  console.log("Your age is odd");
} else if (Math.sqrt(Math.pow(age, 2)) === age) {
    console.log("You age is a perfect square.");
} else {
    console.log("Your age isn't weird");
}


// else if (age < 18) {
//     console.log("Sorry come back when you're 18");
// } else if (age < 21) {
//         console.log("Come in but you can't drink")
//     } else {
//         console.log("Come in and you can drink")
//     }