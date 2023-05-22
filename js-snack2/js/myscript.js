
const randomTargetNumber = Math.floor( (Math.random() * 100 ) + 1 );
let userNumber = parseInt(prompt('Guess a number between 1 and 100'));
let attempts = 1;

while ( randomTargetNumber != userNumber ){
    attempts++; // attempts = attempts + 1;

    if ( userNumber > randomTargetNumber){
        console.log('Your number is too high!');
    } else {
        console.log('Your number is too low!');
    }
    userNumber = parseInt(prompt('Guess a number between 1 and 100'));
}

console.log('You guessed it! The number was: ', randomTargetNumber, ', you did it in', attempts, 'attemps.');