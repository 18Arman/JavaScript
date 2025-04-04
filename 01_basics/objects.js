//two type of objects, Singleton, literal
// Singleton: these are those which are created using constructors
// eg: const ob1=new Object();
// literal: these are using the normal method 
// const user={};

const mysym=Symbol("yoursymbol");//we will see how to use an external symbol through object and also print it:>
const user={
    name:"Arman",
    Age:"20",
    mail:"1807arman@gmail.com",
    //using mysym outside symbol here as symbol
    [mysym]:"Symbol"
}
console.log(user.name);
console.log(user["name"]);
console.log(user[mysym]);
user.greetings=function(){
    console.log("Namaste!");
}
user.greetings2=function(){
    console.log(`Namaste Again!,${this.name}`)
}

//we can freeze or lock the change of key values of object
Object.freeze(user);
user.name="Jatin";
console.log(user.name);

//calling the functions
user.greetings();
user.greetings2();


//Object class 2

//nested object
const new_user={
    name:{
        fullname:{
            username:{
                firstname:"arman",
                lastname:"soni"
            }
        }
    }
}
console.log(new_user.name.fullname.username);
//combining two objects
//method 1
let ob3=Object.assign({},new_user,user);
console.log(ob3);
//method2, using spread
ob3={...user,...new_user}
console.log(ob3);

//Objects inside array
const arr=[
    user,new_user
]
console.log((arr[0].Age));

//print only keys/values
console.log(Object.keys(user))

//entries: convert the key value pair to array and return a big array
const arr2=Object.entries(user)
console.log(arr2);

//check whether user has a key or not
console.log(user.hasOwnProperty("name"));

//Object class-3
//destructuring the objects
//first thing we can rename the keys of objects when we are actually using names of keys often, like this:
const {name:n}=user;//like here I have writed name of user object as n or if we don't write n then we can normally use name also
console.log(n);

//Api's 
//old format: XML file
//new format: JSON type(JavaScipt Object notation)
// formal of json
// {
//     name: "arman"
//     age: "20"
// }
//like this but it can also be array or objects anything just we need to study that thing