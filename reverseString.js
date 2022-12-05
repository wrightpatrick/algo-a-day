// #1) Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    // loop through input string to access each letter
    var newArr = [];
    // construct final string with reverse letters
    for(let i = 0; i < str.length; i++) {
        newArr.unshift(str[i]);
    }
    //console.log(newArr);
    //construct final string with reversed letters
    return newArr.join("");
    

}

console.log(reverseString("hello"));
console.log(reverseString("creature")); // "erutaerc"



// #2) Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    // your code here
    // var newArr = [];
    // for(let i = 0; i <str.length; i++) {
    //     newArr.unshift(str[i]);
    // take the first letter only and capitalize it
    // console.log(newArr[0]);
    var arr = (str.split(' '))
    var string = ""
    for(var i = 0; i < arr.length; i ++) {
        string += arr[i][0];
    }
    return string.toUpperCase();
}

    //put the new letters into a string and capitalize it
    // return newArr.join


console.log(acronym("there's no free lunch - gotta pay yer way"));