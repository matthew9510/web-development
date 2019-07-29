//Desired result Print out all names from people array except 
//the name, (argument) passed into the nameFilter function 

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

function nameFilter(desiredNameToReject){
    var filterName = (desiredNameToReject) => (person) => person.name !== desiredNameToReject
    var filteredPeople = people.filter(filterName(desiredNameToReject));
    filteredPeople.forEach((person) => console.log("My name is", person["name"]))
}    

// var nameFilter = function(filteredName) {
//     for (var i = 0; i < people.length; i++) {
//         let name = people[i].name
//         if (name != filteredName) { 
//             console.log("My Name is " + name)
//         }

//     }
// }

nameFilter("Betty")
