let user = {
  name: "Василий Иванович",
  age: 35
};

let userStr = JSON.stringify(user);

let user2 = JSON.parse(userStr);

console.log(userStr);
console.log(userObj);