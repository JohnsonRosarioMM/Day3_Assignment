// 1. Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array

let input = [1,2,3,4,5,6,7,8];
let oddfunc = function(){
    let output =[];
    for (i=0;i<input.length;i++){
    if(input[i]%2 !== 0){
        output.push(input[i]);
    }
}
console.log(output);
};
oddfunc();

// b. Convert all the strings to title caps in a string array

