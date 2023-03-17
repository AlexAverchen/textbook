/* function User(name) {
    this.name = name;
}
  
let user = new User('Alexey');
let user2 = new user.constructor('Alexander');
  
console.log( user2.name ); // Alexander, работает */

function User(name) {
    this.name = name;
}
User.prototype = {}; // (*)
  
let user = new User('Alexey');
let user2 = new user.constructor('Alexander');
  
alert( user2.name ); // undefined