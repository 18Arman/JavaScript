const arr1=[1,2,3,"Apple"];
console.log(arr1);
//start
arr1.push(2);
console.log(arr1);
arr1.unshift(-1);
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.pop();
console.log(arr1);
const st=arr1.join("")
console.log(st);
//slice
console.log("A ",arr1);
console.log(arr1.slice(1,3));
//splice
console.log("B ",arr1);
console.log(arr1.splice(1,3));
console.log("B ",arr1);


//part 2
console.log("Part2");
//combining two arrays
const a1=[1,4,6];
const a2=[2,3,5];
// a1.push(a2)//this will push whole a2 to a1
// console.log(a1);
// method1
const a3=a1.concat(a2);
console.log(a3);
//method 2(spread)
const new_comb=[...a1,...a2];
console.log(new_comb);
//method 3
a1.push(a2);
const new_arr=a1.flat(Infinity);
console.log(new_arr);

//array construction from string using (from)
const a8=Array.from("Hitesh");
console.log(a8);
//in case of key value pair, it will give empty array
const sp=Array.from({1:"arman"})
console.log(sp);

//to create an array from a set of elements
let g1=2,g2=3,g4=5;
const el_array=Array.of(g2,g1,g4);
console.log(el_array);


