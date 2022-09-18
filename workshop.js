//Declare a variable with your name.
var variable = "Juan Camilo Laverde Trujillo";
console.log(variable);
//Declare a variable with your favorite number.
var fav_number = 21;
console.log(fav_number);
//Create an arrangement with 10 animal names.
var animals = ["tiger", "lion", "monkey", "zebra", "frog", "dog", "cat", "rabbit", "bird", "mouse"];
console.log(animals);
var Organization = {
    name: "Chevrolet",
    slogan: "Find New Roads",
    numberofworkers: 15000,
    openinghours: function () { return "7 a.m a 6 p.m"; },
    remotework: true,
    creationdate: "2018-03-16"
};
console.log(Organization);
var Students = [
    { name: "Alan", age: 12, course: "3A", Address: function () { return "cll 123"; } },
    { name: "Cielo", age: 8, course: 1104 }
];
console.log(Students);
//Create a function that, given an argument called radius, must calculate the area of ​​a circle and return that result
function circle_area(radio) {
    return Math.PI * Math.pow(radio, 2);
}
var area = 0;
area = circle_area(4);
console.log(area);
//Create a function with 3 arguments that are numbers and that function calculates the largest of the numbers.
function greater_than(a, b, c) {
    return Math.max(a, b, c);
}
var operation = 0;
operation = greater_than(4, -2, 10);
console.log(operation);
//Create a function with 1 argument which must be a name and print to the console "hello I'm -------"
function printHello(name) {
    console.log("Hello I am", name);
}
printHello("Juan");
