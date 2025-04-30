//Asynchronous code and some options for multitasking with code. This concept is called concurrency.
//Concurrency is whenever different things happen at the same time

//Callbacks is a function that takes another function as an argument, which is then called when the rest of the initial function has finished.
// function dosomething(callback){
//     callback();
// }
// function sayhi(){
//     console.log("Hi!");
// }
// dosomething(sayhi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("You got an", grade,": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got an", grade,": well done!");
//             break;
//         case grade == "C":
//             console.log("You got an", grade,": alright.");
//             break;
//         case grade == "D":
//             console.log("You got an", grade,": hmm...");
//             break;
//         default:
//             console.log("An", grade,"! What?!");
//     }
// }
// function getgrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade = "A";
//             break;
//         case score>=80:
//             grade = "B";
//             break;
//         case score>=70:
//             grade = "C";
//             break;
//         case score>=60:
//             grade = "D";
//             break;
//         default:
//             grade="F";
        
//     }
//     callback(grade);
// }
// getgrade(95,judge);
// getgrade(85,judge);
// getgrade(50,judge);

//Callbacks become really valuable in an asynchronous context, for example, when one function is still waiting for the results of a call to the database before calling the callback function that is going to process the data.

// setInterval(encourage,500);
// function encourage(){
//     console.log("You are doing great, keep going!");
// }

//Promises can help to organize the sequence of our code in a slightly easier to maintain way.
//Promises need two parameters that are both callbacks and we have called them resolve and reject here.
//When resolve() is called the promise is preasumed to be successful and whatever is between the arrows is returned and used as input for the then method on the promise object.
//if reject() is called the promise failed and the catch() method on the promise object(if present) is executed with the argument of the reject()function.

// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success:", value);
//     },
//     function(error){
//         console.log("Error:", error);
//     }
// );

// const promise = new Promise((resolve,reject) => { 
    // resolve("Success!");
    // reject("Oops!!");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promises";
// })
// .then(value => {
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// })

//Async Await , with async keyword we can make a function return a promise 

// function saysomething(x){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something " + x);
//         },5000);
//     });
// }
// async function talk(x){
//     const words = await saysomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//Event loop
//Java Script is a single threaded language. A thread in this context means a path of execution. If there is only a single path, this means that tasks will have to wait for one another and only one thing can happen at a time.

//This single executor is the event loop. Its a process that executes the actual work.
//Call stack and callback queue

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"),1000);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }

// the settimeout task gets outsourced to the browser's web API. When it is done this appears ina special place: callback queue. When the call stack is empty (and only then!) the event loop will check the callback queue for work to do. If there are an callback wating they will be executed one by one. After every action the event loop will check the call stack for work first.

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"),0);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }