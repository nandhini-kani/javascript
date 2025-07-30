

//function declaration
function sri(a,n){
    return a*n;
}
console.log(sri(4,6))
console.log(typeof sri)

//hosting
console.log("even :", arr(4))
function arr(s){
    if(s%2==0)
    return s;
}

//default parameters
function def(s="default"){
    return s
}
console.log(def("nandhini"))
console.log(def())

//recursion function
function factorial(n){
    if(n==1)
        return 1;
    return n*factorial(n-1)
}
console.log(factorial(6))

//Expression function
let ar=[4,6,8,0,3,6];
let nans=function(ar){
     let sum=0;
     for(let val of ar){
        sum+=val
     }
     return sum;
}
console.log(nans(ar))

//Arrow function
let arrow=(l,b,h)=>{
     return l*b*h;
}
console.log(arrow(5,5,6))

let sum=(a)=>{
    return a*a*a;
}
console.log(sum(2))

//ternary operator

let age=17;

let type= age>18 ? "eligible for vote" : "not eligible for vote"

console.log(type)