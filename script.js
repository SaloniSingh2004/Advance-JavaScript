// let spread=["so","much","fun"];
// let message=["javascript","is",...spread,"and","very"];
// console.log(message);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);

// function someFunction(param1,param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");

// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");

//Returning Function Values

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result=addTwoNumbers(4,5);
// console.log(result);

// let addTwoNumbers=(x,y)=>
//     {
//         console.log(x+y);
//     }
// let result=addTwoNumbers(4,5);
// console.log(result);

// function addTwoNumbers(x,y){
//     return x+y;
// }
// let resultArr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Returning with arrow function

// let addTwoNumbers = (x,y) => x+y;
// let result=addTwoNumbers(4,5);
// console.log(result);

//Variable scope in function

// function testavailability(x){
//     console.log("Available here:",x);
// }
// testavailability("hi!");
// console.log("Not available here:",x);

// function testavailability(){
//     let y="Local Variable!";
//     console.log("Available here:",y);
// }
// testavailability();
// console.log("Not Available here:",y);

// function testavailability(){
//     let y="i'll return";
//     console.log("Available here:",y);
//     return y;
// }
// let z=testavailability();
// console.log("Outside the function:",z);
// console.log("Not Available here:",y);

// function doingstuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         let x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingstuff();

//Constant scope

// function doingstuff(){
//     if(true){
//         const x="local";
//     }
//     console.log(x);
// }
// doingstuff();

//Global Variable

// let globalvar="accessible everywhere!";
// console.log("Outside The function:",globalvar);

// function creatingNewscope(x){
//     console.log("Access to global vars inside function:",globalvar);
// }
// creatingNewscope("some parameter");
// console.log("Still available:",globalvar)

// let x="global";
// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x="global";
// function doingstuff(){
//     x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x="global";
// function doingstuff(x){
//     console.log(x);
// }
// doingstuff("param");

// function confusereader(){
//     x="Guess my scope...";
//     console.log("Inside the function:",x);
// }
// confusereader();
// console.log("Outside the function:",x);

//Immediately invoked function expression
// The immediately invoked function expression(IIFE) is a way of expressing function so that it gets invoked immediately

// (function (){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("run right away");
// })();

//Recursive function

// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         getrecursive(--nr);
//     }
// }
// getrecursive(3);

// function getrecursive(nr){
//     console.log("Started function:",nr);
//     if(nr>0){
//         getrecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function:",nr);
// }
// getrecursive(3);

// function getrecursive(nr){
//         if(nr>0){
//             getrecursive(--nr);
//         }
//         console.log(nr);
// }
// getrecursive(3);

//The performance of recursion is slightly worse than the performance of regular iteration using a loop. So it causes a bottleneck situation that would really slow down 

//Nested Functions

// function doouterfunctionstuff(nr){
//     console.log("Outer function");
//     doinnerfunctionstuff(nr);
//     function doinnerfunctionstuff(x){
//         console.log(x+7);
//         console.log("I can access the outer variables:",nr);
//     }
// }
// doouterfunctionstuff(2);

//Anonymous functions

// let functionvariable=function(){
//     console.log("Not so secret though.");
// };

//Like passing a function as parameters. This concept adds another abstract layer to the coding. This concept is called callbacks

//Function Callbacks

// function doflexiblestuff(executestuff){
//     executestuff();
//     console.log("Inside doflexibleStufffunction");
// }
// doflexiblestuff(functionvariable);

//In JavaScript there are many built in functions as you may know by now. One of them is the setTimeout() function, It is a very special function that is executing a certain function after a specified amount of time that it will wait first

// let youGotthis=function(){
//     console.log("You are doing really well, keep coding!");
// };
// // setTimeout(youGotthis,1000);
// setInterval(youGotthis,1000);

//If you need more encouragement you can use the setInterval() function instead it works very similarly, but instead of executing the specified function once it will keep on executing 

// let testfunction=function(){
//     console.log("Hello");
// }();

// (function(){
//     console.log("Welcome");
// })();
// (function(){
//     let firstname="Laurence";
// })();
// let result=(function(){
//     let firstname="Laurence";
//     return firstname;
// })();
// console.log(result);
// (function(firstname){
//     console.log("My Name is "+firstname);
// })("Laurence");

// var addfive1=function addfive1(num){
//     return num+2;
// };
// let addfive2=(num)=>num+2;
// console.log(addfive1(14));