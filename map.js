//Create a map
// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

//Using set method 
// const fruits =new Map();

// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// console.log(fruits);
// fruits.set("apples",600);
// console.log(fruits);
// console.log(fruits.get("apples"));
// console.log(typeof fruits);
// console.log(fruits.size);
// fruits.delete("apples");
// console.log(fruits);
// console.log(fruits.size);
// // fruits.clear();
// console.log(fruits);
// console.log(fruits.has("bananas"));

//List all entries
// let text="";
// fruits.forEach(function(value,key){
//     text+= key +' = '+ value+" ";
// })
// console.log(text);

//Map.entries
// let text="";
// for(const x of fruits.entries()){
//     text+=x+" ";
// }
// console.log(text);

//Map.keys
// let text="";
// for(const x of fruits.keys()){
//     text+=x+" ";
// }
// console.log(text);

//Map.values
// let text="";
// for(const x of fruits.values()){
//     text+=x+" ";
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

//Objects
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};
// //create a map
// const fruits=new Map();
// //Add new elements to the map
// fruits.set(apples,500)
// fruits.set(bananas,300);
// fruits.set(oranges,200);

// console.log(fruits.get("apples"));
// console.log(fruits.get(apples));

//Destructuring

//Create an object
// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20
// };
// let{firstname,lastname,age}=person;
// console.log(firstname);
// console.log(lastname);
// console.log(age);

// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20
// };
// let{lastname,firstname,age}=person;
// console.log(firstname);
// console.log(lastname);
// console.log(age);

//Destructuring is not destructive and does not change the original object.

// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20
// };
// let{lastname,firstname,age,country="India"}=person;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(country);

//Alias Object Property
// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20
// };
// let{lastname,firstname,age,country="India"}=person;
// let{lastname:name}=person;
// console.log(firstname);
// console.log(name);
// console.log(age);
// console.log(country);
