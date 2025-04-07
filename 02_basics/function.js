//here we will practice function and get to know how they are working:
//basics function
function solve(){
    console.log("This is my first function");
}
solve();
//if I write solve only then this means it is a reference of function while solve() this means execution of function
//if we print the output of such function which is not returning anything then it will give undefined
console.log(solve());
console.log(solve);

// a function to find power of a number
function power(a,b){
    if(b==0){
        return 1; 
    }
    return a*power(a,b-1);
}
console.log(power(2,3));
//whenever there is a function in which parameters are there and we are not passing the arguments then, undefined values will be 
//assigned to them automatically

//rest operator(...): On the basis of usage we say this either rest or spread operator...
// in function when there is only one parameter but we want to pass multiple arguments then this will be used
// one more thing this arguments will be converted to array when the function will be called:)
function fun1(...num){
    return num;
}
console.log(fun1(1,2,3,4));

//how to pass object in function
function fun2(anyObject){
    console.log(anyObject);
}
fun2({name:"arman",age:"20"});

//how to pass array in function
function fun3(getArray){
    console.log(getArray);
}
fun3([2,4,"a"]);
// In javascript there is a flaw that we need to check whether the parameter datatype as we are expecting exists or not, so
//everytime we should apply check in function to validate the datatype and value existance otherwise there will be a flaw in 
//code


//lecture 21
// DOM( document object modal ): means it helps in manipulating html page using JS

//Technique to declare function

// //method 1
// const fun1=function(){

// }
// //method 2
// function fun(){

// }

//difference is we can call method 1 function only after it's declaration. but method 2 function can be called before and after 
//it's declaration in code

//lecture 23 (This & => function)

//this is used to represent the current context

// in node environment if you use this in console.log then it will give empty object while in browser it will give a window object
//which contains a lot of web page manipulation things like chicking , submitting forms, etc

// if we are using this inside function then also it willnot work properly like console.log(this) inside function will give a lot of
//details relative to function and if we print any member of function using this then it will give undefined because this is not 
//for function
const ob1={
    name: "arman"
    ,age:20,
    ident:function(){
        value:29;
        console.log(this)
    }
} 
ob1.ident()

//ARROW FUNCTION, short form of function
const fun=()=>{
    console.log("this is arrow function")
    return "Hello";
}
const funn=()=> ("hello");//this will return this, write the returning part in bracket it will be good practice when
// we will be shift to other language similar to js
const funnn=()=>({name:"Amrna"});//that's how object will be passed in arrow function

// //syntax for using for each loop with function,(Three methods)
// arr.forEach(function () {}){

// }
// arr.forEach(()=>{}){

// }
// arr.forEach(()=>()){

// }

//Immediately Invoked function Execution[IIFE]
// Useful in:
// ->When we want to execute a function immediately when the program starts(Note you have to declare them at starting of the code)
// ->Prevent the function from getting polluted from global variables

//Note: When we are declaring one IIFE and want more IIFE then we have to use semicolon in IIFE at the end, because IIFE 
//know when to start but does'nt know when to end so semicolon is required

//IIFE declaration methods
(
    function iife1(){
        console.log("IIFE1");
    }
)();

(
    ()=>{
        console.log("IIFE2");
    }
)();