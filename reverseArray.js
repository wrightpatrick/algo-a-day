function reverse(arr){
     var start = 0;
     var end = array.lenth - 1;

     while(start < end){
         var temp = arr[start];
         arr[start] = arr[end];
         arr[end] = temp;
         start++;
         end--;
     }

 return arr;
 }

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse([4,8,15,16,23,42]));

function reverse(arr){
    var newarr = [];
    for(i = 0; i < arr.length; i++){ //new for loop!!
        newarr.push(arr[arr.length-1-i]); //adds the last value of the main array to our new array at the first position
        }
    return newarr; //returns new array
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse([4,8,15,16,23,42]));