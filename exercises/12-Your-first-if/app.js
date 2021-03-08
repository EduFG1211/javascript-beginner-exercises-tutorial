var total = prompt('How many km are left to go?');

// Your code below:
let totalValue = parseInt(total);
if (totalValue > 100) {
    console.log('We still have a bit of driving left to go');
} else if (totalValue > 50) {
    console.log('Well be there in 5 minutes');
} else {
    console.log('Im parking. Ill see you right now');
}