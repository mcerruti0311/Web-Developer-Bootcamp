let myPrompt = "Are we there yet?"
let answer = prompt(myPrompt);

while (!answer.toLowerCase().includes("yes") && !answer.toLowerCase().includes("yeah") ) {
    answer = prompt(myPrompt);
} 

alert("YAY, We made it!");
