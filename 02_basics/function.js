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