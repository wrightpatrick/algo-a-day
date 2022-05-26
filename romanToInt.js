var romanToInt = function(s) {
    let answer = 0;
    let tempStr = [];
    let numberStr = [];
    for(i=0; i<s.length; i++){
        tempStr.push(s[i]);
        // console.log(tempStr);
    }
        for(j=0; j<tempStr.length; j++){
            if (tempStr[j] === "I"){
                numberStr.push(1);}
            else if (tempStr[j] === "V"){
                numberStr.push(5);}
            else if (tempStr[j] === "X"){
                numberStr.push(10);}
            else if (tempStr[j] === "L"){
                numberStr.push(50);}
            else if (tempStr[j] === "C"){
                numberStr.push(100);}
            else if (tempStr[j] === "D"){
                numberStr.push(500);}
            else if(tempStr[j] === "M"){
                numberStr.push(1000);}
            }
            // console.log(numberStr);
        for(k=0; k<numberStr.length; k++){
            if(numberStr[k]<numberStr[k+1]){
                answer += (numberStr[k+1]-numberStr[k])
                k++;
            }
            else answer += numberStr[k];
            // console.log(answer);
        }
    return answer;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MCMXCIV"));