
const numbersList = [];
let sum = 0;

while ( sum < 50 ){
    const userNumber = parseInt(prompt('Type a new number'));
    sum = sum + userNumber;
    numbersList.push(userNumber);
    console.log(userNumber)
}

console.log(sum);
console.log(numbersList);