let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    let guestsValue = parseInt(guests);
    if (guestsValue > 200) {
        cost = '$20,000';
    } else if (guestsValue > 100) {
        cost = '$15,000';
    } else if (guestsValue > 50) {
        cost = '$10,000';
    } else {
        cost = '$4,000';
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
