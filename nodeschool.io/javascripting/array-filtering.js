var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
var filtered = numbers.filter(function(number,idx,arr){
    return number % 2 == 0; // if an element passes this test (if the callback function returns true) then it will be added to the new array called filtered
});
console.log(filtered);