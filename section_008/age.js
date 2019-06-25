const yearsOld = prompt("How many years old are you?");

const daysOld = yearsOld * 365;

const leapDays = Math.round(yearsOld / 4);

const totalDays = daysOld + leapDays;

console.log(daysOld);
console.log(leapDays);
console.log(totalDays)
