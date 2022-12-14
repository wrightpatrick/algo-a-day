//array where each element is an object [{}{}]

// for(var i = 0; i < 3; i++){
//     console.log("first loop" +i)
//     for(var j = 0; j < 3; j++){
//         console.log("nested loop" + j);
//     }
// }

var arr2d = [
    [2,5,8],
    [3,6,1],
    [5,7,7],
];

// console.log(arr2d[1][2]);

// nested loop with an array that is printing all values inside the object. the nested array will console log at each array when running the first loop
//using the first loops variable in the second array allows us to be at each object in the array and do what we want

// for(var i = 0; i < arr2d.length; i++){
//     for(var j = 0; j < arr2d[i].length; j++){
//         console.log(arr2d[i][j]);
//     }
// }

function flatten(arr2d) {
    var flat = [];
    //loop through arr2d
    for(var i = 0; i < arr2d.length; i++){
        //loop through indexes inside of the arrays
        for(var j = 0; j < arr2d[i].length; j++){
            //push the indexes into flat array
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);