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

// Alias Object Property
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
// console.log(lastname);

// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let[fruit1,fruit2]=fruits;
// console.log(fruit1,fruit2);

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1,fruit2);

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// let{[3]:fruit1,[2]:fruit2}=fruits;
// console.log(fruit1,fruit2);

//Rest Property
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;
// console.log(a,b,rest);

// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

//Swapping the elements
// let firstname="Saloni";
// let lastname="Singh";
// [firstname,lastname]=[lastname,firstname];
// console.log(firstname,lastname);

//JavaScript exponentiation
// let x=5;
// let z=x**2;
// let z=Math.pow(x,2);
// console.log(z);

// let x=5;
// x**=2;
// console.log(x);

//Array Includes
// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Mangoes"));

// const fruits=["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Bananas",3));

//The include method is case sensitive,default is 0

//Trailing Comma
// const arr=[
//     "one","two","three",,
// ];
// console.log(arr,arr.length);

// const person={
//     firstname:"Saloni",
//     lastname:"Singh",
//     age:20,
// };
// console.log(person);

// const person={
//     firstname:"Saloni",
//     ,
//     age:20,
// };
// console.log(person);

