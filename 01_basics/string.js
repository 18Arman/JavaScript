//strings
let user="arman"
let age=21
console.log(`Welcome ${user}! May I know, What's your ${age}`);
// this `` is known as string intepolation , means here we have placeholders where we inject our variable and this is more readable
// more relaiable
let game=new String("Genshin Impact")
console.log(game);
console.log(user[0]);
//string is basically a key value pair
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase())
console.log(game.charAt(2));
console.log(game.indexOf('G'));
const newgame=game.substring(0,4)
console.log(newgame);
//slice me ham negative values bhi use kar sakte hai
const newnew2=game.slice(-20,2)//how slice works?
console.log(newnew2,"Sliced");
// console.log(game);

//trim and replace

const newstring= "   arman  "
console.log(newstring.trim());// we can learn more about trim by changing it syntax, it works only on whitespace or new lines
const url="https://hitesh.com%20"
console.log(url.replace('%20','hoo'));
console.log(url.includes('hitesh'));
//convert string into array based on something
console.log(url.split('h'))







