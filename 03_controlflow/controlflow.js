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
// for(let i=0;i<5;i++){
//     console.log(`value of i: ${i}`);
// }
//use case of break
// for(let i=0;i<5;i++){
//     if(i==2){
//         break;
//     }
//     console.log(`value of i: ${i}`);
// }
//use case of continue
// for(let i=0;i<5;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(`value of i: ${i}`);
// }

//while loop: same as for loop just same changes are there
// let wh=4;
// while(wh!=0){
//     console.log(wh);
//     wh--;
// }
//do while: it will first print and then check the condition, so will be used in those cases where we need to implement at least once,
// wh=10;
// do {
//     console.log(wh);
// } while (wh<10);



//types of for loop

//there are many types of loop like forOf, forIn, forEach and have different use cases,

//forOf can be used with any Iterable Datatype, can be used with maps also
const arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}
//map, It is basically a datatype in which unique key value pairs are there and it remembers the order of insertion
const map=new Map();
map.set("in","india");
map.set('usa',"united states of america");
for (const element of map) {
    console.log(element);// In this way both will be printed key and value both
}
for (const [key,value] of map) {//de-structuring the array
    console.log(`${key} => ${value}`);
}
//we cannot use this with object, it is not iterable

//forin
const user={
    name:"arman",
    age:"20"
}
for (const key in user) {
    console.log(key,user[key]);//key and key-value
}
//can be used with array

//forEach
const arr1=[{user:"Arman",Age:21},{user:"Jatin",Age:20}];
arr1.forEach((item,index,arr)=> {//so with the help of forEach we can get different types of values directly like value at index, index, whole array.. 
    //in this format we can get the values, as also mention in the code here!
    console.log(item.user);
    console.log(item.Age);
});





