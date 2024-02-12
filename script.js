// 1. Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array
let input1 = [1,2,3,4,5,6,7,8];
let oddfunc = function(){
    let output1 =[];
    for (i=0;i<input1.length;i++){
    if(input1[i]%2 !== 0){
        output1.push(input1[i]);
    }
}
console.log(output1);
};
oddfunc();

// b. Convert all the strings to title caps in a string array
let input2 = ["ram","ravi","krishna","mahesh"];
let output2 = input2.map(function(str){
    return str.toUpperCase();
});
console.log(output2);

// c. Sum of all numbers in an array
let input3 = [2,3,4,5,6];
(function(){
    let output3 = 0;
    for (i=0;i<input3.length;i++){
    output3 += input3[i];
    }
    console.log(output3);
})
()

// d. Return all the prime numbers in an array
let input4 = [1,2,3,4,5,6,7,8,9,10];
let output4 = input4.filter(function(num){
    if (num < 2) return false;
    for(i=2;i<= Math.sqrt(num);i++){
        if(num % i === 0)
        return false;
    }
    return true;
})
console.log(output4);

// e. Return all the palindromes in an array
let 