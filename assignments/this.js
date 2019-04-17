/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - This will call the window's Object not any specific object.
* 2. Implicit Binding - The object used before the dot is this (new.this) in when a function is called.
* 3. New Binding - An object creator; which allows a function to return an object.
* 4. Explicit Binding - Constructor objects are called using .call and .apply.
*
* Write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

    // console.log(this);

// Principle 2

// code example for Implicit Binding

// const avatarLastAirbender = {
//     name: 'Aang, The Avatar',
//     age: '12',
//     origin: 'The Northern Air Temple',
//     powers: function() {
//         return `${this.name} is ${this.age} and he's from ${this.origin}. Aang is the master of all four elements`;
//     }
//   }
//   console.log(avatarLastAirbender.powers())

// const fruitFunc = obj => {
//     obj.myFruit = function() {
//       console.log(`My favorite fruit is ${this.name}`);
//       console.log(this);
//     }
//   };

//   // Invoke Methods on our objects
const mine = {name: 'Grapes'};
const yours = {name: 'Banana'};
fruitFunc(mine);
fruitFunc(yours);

  mine.myFruit();
  yours.myFruit();


// Principle 3

// code example for New Binding


// function MeanPerson(response) {
//     this.rudeGuy = 'Do not talk to me, ';
//     this.response = response;
//     this.speak = function() {
//       console.log(this.rudeGuy + this.response);
//       console.log(this);
//     };
//   }
  
//   const bob = new MeanPerson('Bob');
//   const tom = new MeanPerson('Tom');
  
//   bob.speak();
//   tom.speak();


// Principle 4

// code example for Explicit Binding

// bob.speak.call(bob); tom.speak.apply(tom);