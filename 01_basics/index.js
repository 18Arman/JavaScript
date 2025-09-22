console.log("Hello,Arman");
const CustomerID="12206043";
console.log(typeof(CustomerID));
var CustomerName="Arman"
console.log(typeof(CustomerName));
let CustomerYear="3rd"
console.log(typeof(CustomerYear));
let cus_name='3rd'
console.log(typeof(cus_name));
console.log(cus_name);
let Age=20
console.log(typeof(Age));
City='Kapurthala'
console.log(typeof(City));
let mail
console.log(mail);
console.log("Printing Customer Details")
console.table([CustomerID,CustomerName,CustomerYear,Age,City,mail])//Object
/*preferable not to use var, use let instead because of block scope and functional scope */