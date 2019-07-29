//Desired result Print out all people under age 50

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var isUnder50 = (person) => person.age < 50
var under50 = people.filter(isUnder50)

var printName = (person) => console.log("My name is", person["name"])
under50.forEach(printName);

// var nameFilter = function() {
//     for (var i = 0; i < people.length; i++) {
//         let person = people[i]
//         let name = person.name
//         let age = person.age
//         if (age < 50) {
//             console.log("My Name is " + name)
//         }
//     }
// }
// nameFilter()
