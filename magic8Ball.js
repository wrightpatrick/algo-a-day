//problem 1
// var floor = Math.floor(1.8);
// var ceiling = Math.ceil(Math.PI);
// var rando = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(rando);

//problem 2
// function d6(){
//     var roll = Math.ceil(Math.random() * 6);

//     return roll;
// }

// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

//group

function roll8ball(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes, definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
   
    var roll = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[roll];
   
}


console.log(roll8ball());