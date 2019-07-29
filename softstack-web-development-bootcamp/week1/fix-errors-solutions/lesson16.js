/*Invoke the anonymous function that is a parameter of nameFilter function
Now pass in i as an argument of that function so we track each time the 
anonyomous function is invoked

Expected  output in console:

        This Ran 0
        This Ran 1 
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            anonymousFunction(i)
            results.push(currentName)
        }
    }

    return results
}

var filteredNames = nameFilter("Betty", function(count) {
    console.log("This Ran " + count)
})
console.log(filteredNames)
