// //problem 1
// var isSunny = true; //with boolean helpful to start with is
// var temperature = 45;
// var isRaining = false;
// var whatToBring = "I should bring:";

// if(isRaining){
//     whatToBring += "an umbrella,"
// }

// if(isSunny){
//     whatToBring += "sunglasses,"
// }

// //any if condition needs condition which is boolean (so this would be boolean)
// if(temperature < 50){
//     whatToBring += "a coat,"
// }

// whatToBring += "and a smile!"

// console.log(whatToBring)


//problem 2

for(var i=10; i>0; i--){
    if(i!= 2){
        console.log(i);
    }
    else{
        console.log("ignition!")
    }
}

console.log("liftoff!"); //10 9 8 7 6 5 4 3 ignition 1 liftoff!

//problem 3

var countPositives = 0;
var numbers = [3, 4, 2, 7, 16, -8, 0, 5]

for (var i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        countPositives +=1;
        console.log(countPositives);
    }
    // else{
    //     countPositives = countPositives; //no need because if works, nothing else happens to var
    // }
}

console.log("there are " + countPositives +" positive values in the array");                  