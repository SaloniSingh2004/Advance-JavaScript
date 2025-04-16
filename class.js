//Class development reduced the complexity of applications and increased maintainability by a huge margin.
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

//The this keyword refers to the object it belongs to, so it is the first property of the instance of ClasName
//Classes are just some special function beneath the surface.

// class Dog{
//     constructor(dogname,weight,color,breed){
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript",2.4,"Brown","Chihuahua");
// console.log(dog.dogname, "is a",dog.breed,"and weighs",dog.weight,"kg");

//Classes
//It is convention to start class names with a capital letter.

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Saloni","Singh")
// console.log("Hi",p.firstname);
// console.log("Hi",p.firstname,p.lastname);

// class Person{
//     constructor(firstname,lastname="Singh"){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Saloni")
// console.log("Hi",p.firstname);
// console.log("Hi",p.firstname,p.lastname);

//Methods
//Functions on a class are called methods and when defining these methods we dont use the function keyword. We start directly with the name

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi! there I'm",this.firstname);
//     }
// }
// let p=new Person("Saloni","Singh");
// p.greet();

