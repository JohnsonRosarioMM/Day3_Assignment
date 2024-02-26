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
var input5 = ['moon','noon','Radar','Ravi','dad','done','mom'];

(function(){
var output5 = [];
var rev = input5.toString().split("").reverse().join("").split(",");

for (let i = 0; i < input5.length; i++) {
  for (let k = 0; k < rev.length; k++) {
    if (input5[i] == rev[k]) {
      output5.push(input5[i])
    }
  }
}
console.log(output5);
})
()

// f. Return median of two sorted arrays of the same size.*
var input6 = [1, 12, 15, 26, 38];
var input7 = [2, 13, 17, 30, 45];
var n1 = input6.length;
var n2 = input7.length;

(function(input6, input7, n){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
for (count = 0; count <= n; count++){
        if (i == n){
            m1 = m2;
            m2 = input7[0];
        }
        else if (j == n){
            m1 = m2;
            m2 = input6[0];
        }
        if (input6[i] <= input7[j]){
            m1 = m2; 
            m2 = input6[i];
            i++;
        }
        else{
            m1 = m2; 
            m2 = input7[j];
            j++;
        }
    }
    console.log( (m1 + m2)/2);
})
(input6, input7, n1);

// g. Remove duplicates from an array
let input8 = ['john','john','rio','ravi','josva','ravi'];
 
let removeDup = function (input8) {
    let ouput8 = [];
    for (i = 0; i < input8.length; i++) {
        if (ouput8.indexOf(input8[i]) === -1) {
            ouput8.push(input8[i]);
        }
    }
    console.log(ouput8);
}
removeDup(input8);

// h. Rotate an array by k times.*
let input9 = [1,4,7,9,8];
let ouput9 = [];
let Rotate = function RightRotate (a, k){ 
    k = k % a.length; 
    for (let i = 0; i < a.length; i++) { 
        if (i < k) { 
            ouput9.push(a[a.length + i - k]); 
        } 
        else { 
            ouput9.push(a[i - k]); 
        } 
    }  
    console.log(ouput9)
}
Rotate(input9,4);

//2. Do the below programs in arrow functions.
