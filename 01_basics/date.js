// //dates// starting from january 1, 1970,UTC
// let myDate=new Date()
// console.log(myDate)
// //now convert ot string
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);//it is a Object

// let my_created_date=new Date(2023, 0, 23);//month as mentioning starting from 0 index
// let modified=new Date(2023, 0, 23,5,3,45);
// console.log(my_created_date.toDateString());
// console.log(modified.toLocaleString());
// //our own format
// let more_date=new Date("2023-01-23")//here will start from 1 index
// console.log(more_date);
// let more2_date=new Date("02-01-2023");
// console.log(more2_date.toLocaleString());

// let myTimeStamp=Date.now();
// console.log(myTimeStamp);//in mili seconds
// console.log(my_created_date.getTime());//in mili seconds
//in mili
// console.log(Date.now());
// //to get in seconds
// console.log(Math.floor(Date.now()/1000));//using math.floor to remove the decimals and divided by thousand to get output in seconds
// let new_date=new Date()
// console.log(new_date);
// console.log(new_date.getMonth())//will start from 0 index
// console.log(new_date.getDate())//will give week day
// //we can also customize the output of localeString
// x=new_date.toLocaleString('default',{
//     weekday: 'long',
//     month: 'long'
// })
// console.log(new_date.toLocaleString());
// console.log(x)
