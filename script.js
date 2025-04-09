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

function getrecursive(nr){
    console.log("Started function:",nr);
    if(nr>0){
        getrecursive(nr-1);
    }
    else{
        console.log("done with recursion");
    }
    console.log("Ended function:",nr);
}
getrecursive(3);