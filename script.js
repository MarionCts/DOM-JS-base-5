const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 35 },
];

console.log(users.length);

let userBase = [];
let userList = document.querySelector("#userList");

// for (i = 0; i<users.length; i++) {
//     userBase[i] = document.createElement("li");
//     userBase[i].textContent = (`Nom : ${users[i].name}, Âge : ${users[i].age}`);
//     userList.append(userBase[i]);
// }

for (let i of users) {
    userBase[i] = document.createElement("li");
    userBase[i].textContent = (`Nom : ${i.name}, Âge : ${i.age}`);
    userList.append(userBase[i]);     
}