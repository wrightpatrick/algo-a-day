const classArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function FisherYates(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }
    return arr;
}

console.log(FisherYates(classArray));