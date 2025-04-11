
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
//for of is helpful when we need the values, it does'nt works with objects directly
const arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}
//map, It is basically a datatype in which unique key value pairs are there and it remembers the order of insertion and it is iterable
const map=new Map();
map.set("in","india");
map.set('usa',"united states of america");
for (const element of map) {
    console.log(element);// In this way both will be printed key and value both
}
for (const [key,value] of map) {//de-structuring the array
    console.log(`${key} => ${value}`);
}
//we cannot use this directly with object, it is not iterable

//forin(it is usually for iterating over the keys, can work with map,array, obect)
const user={
    name:"arman",
    age:"20"
}
for (const key in user) {
    console.log(key,user[key]);//key and key-value
}
//can be used with array,Map

//forEach
const arr1=[{user:"Arman",Age:21},{user:"Jatin",Age:20}];
arr1.forEach((item,index,arr)=> {//so with the help of forEach we can get different types of values directly like value at index, index, whole array.. 
    //in this format we can get the values, as also mention in the code here!
    console.log(item.user);
    console.log(item.Age);
});



//lecture 30(Filter, map and reduce) : they are also improved version of for_each because in that we cannot return any values but here we can
//filter is like applying conditon on the values and returning the filtered out values
const arr3=[1,2,3,4,5];
const filter_values=arr3.filter((item)=>(item>3));
console.log(filter_values);

//map function: this function is mainly for modifying the values directly and then returning
const map_values=arr3.map((item)=>(item*10));
console.log(map_values);

//chaining: it is like connecting a lot of filter and map like functions and making a customized output
const chain_values=arr3.filter((item)=>item>3).map((item)=>item*10);
console.log(chain_values);

//reduce: this is like doing operation on all of the values of array but with a initial value
const reduce_values=arr3.reduce((acc,item)=> (acc+item),0);//here all the values will be added up in the accumulator which is having 0 as initial values
// and then we will iterate on the array and perform the given operation and store the returned value in accumulator 
console.log(reduce_values);

