//function in JS
// function add(a,b){
//     return a+b
// }

// var add= function(a,b){
//     return a+b;
// }

// var add= (a,b) => {return a+b};

// var add = (a,b) => a+b;

// var res=add(133,10);
// console.log(res)

//calling the function while writing itself
// (function(){
//     console.log('Pavan is called');
// })();

//callback function is a type of function in which the main function is executed fiest and followed by callback function
// function callback(){
//     console.log("Callback function is called");
// }

// var add=function(a,b,callback){
//     var res=a+b;
//     console.log("result "+res);
//     callback();
// }

// // add(348,3209,callback);
// add(2,3,() => console.log("add compleete"));

//important Node modeles = Filesysytem and OS
// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greet.txt", "Hi" + user.username + "!\n", () => {
//   console.log("kaisa laga mere jalak");
// });

// console.log(os);


//importing the files
//every data cannot be accessed  directly is server to access it we use export function
// const notes=require("./notes.js")
// console.log("we are in server.js");

// var age=notes.age;
// console.log(age);

// var res=notes.myAge(age+18,44);
// console.log(res);



//using of lodash function
var _ = require("lodash");
var data=['papa','pap',1,1,3,3,'name','age']
var filter=_.uniq(data);
console.log(filter);