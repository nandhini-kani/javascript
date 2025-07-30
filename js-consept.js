
//Arithmetic operator
var a=30;
var b=30;

 c=a+b;
 d=a-b;
 e=a*b;
 f=a/b;
 g=a%b;
console.log("a+b=",c);
console.log("a-b=",d);
console.log("a*b=",e);
console.log("a/b=",f);
console.log("a%b=",g);

//for loop
for(let num=0; num<10;num++){
    if(num%2==0){
        console.log("even=",num)
    }
    else{
        console.log("odd",num)
    }

}

//condtional statement 
//if else:
if(a==b){
    console.log("both are equal");
}
else{
    console.log("not equal")
}

// else if
let mark=99;
if(mark>59 && mark<70){
  console.log(" 'C' grade ")
}
else if(mark>69 && mark<80){
  console.log("'B' grade");
}
else if(mark>79 && mark<90){
    console.log("'A' grade");
}
else if(mark>89 && mark<100){
    console.log("'A++' grade")
}

//Switch
let fruit="orange";

switch(fruit){
    case 'apple':
       console.log("red fruit");
        break;
    case 'mango':
        console.log("yello fruit");
        break;
    case 'orange':
        console.log("orange fruit");
        break
    default:
        console.log("can't find the fruit color");
        break;
}

//Array operation

let arr=["sri","subi","kani"];
//update
arr[2]="nandhu";
console.log(arr)
//add 
arr.push("vaji");
arr.unshift("latha");
console.log(arr);
//remove
arr.pop();
arr.shift();
console.log(arr);
//loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr.length);
console.log(arr.reverse());

//String operation
let str="nandhini";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("nandhu"));
console.log(str.indexOf("i"));
console.log(str.substring(0,4));
console.log(str.replace("ini","u"));

//function
function sri(){
    console.log(" I am a web developer");
}
sri()

//parameter
function sri(a,b){
    c=a+b;
    return  c;
}
console.log(sri(3,4));
