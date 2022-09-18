//Declare a variable with your name.
let variable: string = "Juan Camilo Laverde Trujillo";

console.log(variable);

//Declare a variable with your favorite number.
let fav_number: number = 21;

console.log(fav_number);

//Create an arrangement with 10 animal names.
let animals: string[] = ["tiger", "lion", "monkey","zebra","frog","dog","cat","rabbit","bird","mouse"];

console.log(animals);

//Create an object called organization and its respective interface
interface organization {
	name: string;
	slogan: string;
	numberofworkers: number;
	openinghours: () => string | number;
	remotework: boolean;
    creationdate: string;
    satworkingday?: boolean;
}

const Organization: organization = {
	name: "Chevrolet",
	slogan: "Find New Roads",
	numberofworkers: 15000,
	openinghours: () => "7 a.m a 6 p.m",
	remotework: true,
    creationdate: "2018-03-16"
}

console.log(Organization);

//Create an array of objects called students that contains objects of type student
interface students {
	name: string;
	age: number;
	course: string | number;
	Address?: () => string | number;
}
const Students: students[] = [
	{name: "Alan", age: 12, course: "3A", Address: () => "cll 123"},
	{name: "Cielo", age: 8, course: 1104}
]

console.log(Students);

//Create a function that, given an argument called radius, must calculate the area of ​​a circle and return that result
function circle_area(radio: number): number {
	return Math.PI * Math.pow(radio,2);
}

let area: number = 0;

area = circle_area(4)

console.log( area );

//Create a function with 3 arguments that are numbers and that function calculates the largest of the numbers.
function greater_than(a: number,b: number, c: number): number {
	return Math.max(a,b,c);
}

let operation: number = 0;

operation = greater_than(4, -2, 10)

console.log( operation );

//Create a function with 1 argument which must be a name and print to the console "hello I'm -------"
function printHello(name: string): void | string {
	console.log("Hello I am",name)
}
printHello("Juan");