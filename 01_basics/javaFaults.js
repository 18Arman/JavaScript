let num=123
console.log(typeof num)
console.log(num)
num="abc22"
console.log(typeof num)
console.log(num)
//converting to number
num=Number(num)//here we will se that type of num is now number but it's value is NaN means not a number
console.log(typeof num)
console.log(num)
num=Number(null)
console.log(typeof num)
console.log(num)
num=Number(undefined)
console.log(typeof num)//type is number
console.log(num)//NaN

//case student for datatype to number
// so string and undefined are giving Nan and type as number
// while null is giving 0 and type as number



// for boolean comparison
// 0 will give false ,1 will give true,"" empty string is false,"arman" is true

//string conversion
//if we convert a number to string then it will convert successfully
