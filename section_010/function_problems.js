// function isEven (num) {
//   if(num % 2 === 0) {
//     return true;
//   } else {
//       return false;
//   }
// } 


// problem1 = alert(isEven(10));
// problem2 = alert(isEven(5));

// function factorial(factor) {
//     if (factor === 0) {
//         let answer = 1;
//         return answer;
//     } else {
//         let answer = factor;
//         console.log(answer);
//         for (let i = factor; i > 1; i--) {
//             console.log(answer + ' ' + i);
//             answer = answer * (i - 1);
//             console.log(answer);
//         }
//         return answer;
//     }

// }

// alert(factorial(0));

function kebabToSnake (kebab) {
  let re = /-/gi;  
  let snake = kebab.replace(re, '_');
  return snake;

}

alert(kebabToSnake('dogs-are-awesome'));