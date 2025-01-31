/*
summay:
primitive and non-primitive datatypes on the basis of storation and access of data
   primitive(call by value): 7 categories:String,Number,Boolean,null,undefined
                            ,Symbol(uniquefication of a value),BigInt
  
   Non-primitive(call by reference): //data type object hota hai function ka functional object hai
        Arrays,Objects,Functions



ques: java is statically typed or dynamically types?
sol:
JavaScript is a dynamically typed language. This means that you don't need to
 specify the data type of a variable when you declare it.

*/
//Symbol datatype use
// let value='123'
// let value2='123'
// console.log(value===value2)
// let value3=Symbol('123')
// let value4=Symbol('123')
// console.log(value3===value4)//here value3 and value4 values are same but due to symbol being here they are uniquely identified so
//they will be different

// const bignumber=133531234324n //to mark them as bigInt we write n at last

// let samples=[2,4,12,'qerqwer',123423n,Symbol(3),[3,2]]
// console.log(samples)
// console.log(samples[4])
// let Dictionary={
//     A:"arman",
//     B:"Ball"
// }
// console.log(Dictionary)

// let first_function=function(){
//     console.log("Hello World!")
// }
// let value=null
// console.log(typeof value);//datatype is object
// console.log(typeof first_function);//data type is function 


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// ++++++++++++++++++++++++++++++++++++++++++++++++++
/*
memory
stack : in primitive type: means jab bhi koi element declare hota hai to uska copy milta hai apne ko

heap : in non-primitive type: means head reference milta hai value ka


//datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

*/
// //Example of reference
// let user1={
//     mail:"xyz@gmail.com",
//     upi:"123&ybl"
// }
// let user2=user1
// user2.mail="arman@gmail.com"// it will be updated on both side
// console.log(user1.mail);
// console.log(user2.mail);

