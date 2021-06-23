// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 2
function reverse(str){
    let reversed = '';

    for(i=0 ; i< String.length; i++){
        let reversed = i + reversed
    }
    return console.log(reversed);
}

// solution 1: Unoptimised
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join();

// }

module.exports = reverse;
