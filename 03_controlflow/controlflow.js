// control flow in js
// types of comparators: < , > , <= , >= , == , === , != , !== 
// const userloggedin=true;
// if( userloggedin )
// {
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }
// const temperature=50;
// if(temperature==50){
//     console.log("Yes , it is 50");
// }
// else{
//     console.log("no");
// }
// we can use && || like these also

// //switch
// const month=1// if can change the key of switch to other data types like string alsoo
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     default:
//         console.log("No month");
//         break;
// }


//truthy.js
//empty string is false
// full string is true
//empty array is true
// false: 0 , -0, BigInt 0n, "", null, undefined, NaN
// truthy: "0", 'false', " ",[],{}, function(){},

// how to check for Array or Object that does there is value or not
// const ar1=[];
// const ob1={};
// if(ar1.length === 0 || Object.keys(ob1).length===0){
//     console.log("yes");
// }

// //nullish  coalescing Operator (??): null undefined
// let val1= null ?? 5;//this if for that case if by someflow we get null value then this will take 
// // other value that we have setted in place we get null
// console.log(val1);
// val1=undefined?? 19;
// console.log(val1);
// val1=undefined ?? null ?? 100;
// console.log(val1);

// //terniary Operator
// // condition?true:false
// const price=80;
// (price>80)?console.log("Greater than 80"):console.log("Under 80");





//for and while and do-while loop 
//use of for loop
for(let i=0;i<5;i++){
    console.log(`value of i: ${i}`);
}
//use case of break
for(let i=0;i<5;i++){
    if(i==2){
        break;
    }
    console.log(`value of i: ${i}`);
}
//use case of continue
for(let i=0;i<5;i++){
    if(i==2){
        continue;
    }
    console.log(`value of i: ${i}`);
}

//while loop: same as for loop just same changes are there
let wh=4;
while(wh!=0){
    console.log(wh);
    wh--;
}
//do while: it will first print and then check the condition, so will be used in those cases where we need to implement at least once,
wh=10;
do {
    console.log(wh);
} while (wh<10);