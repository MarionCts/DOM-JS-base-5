const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 35 },
];

let userBase = [];
let userList = document.querySelector("#userList");

for (let user of users) {
    userBase[user] = document.createElement("li");
    userBase[user].textContent = (`${user.name}, ${user.age} ans`);
    userList.append(userBase[user]);     
}