/**
 * ============================================
 * COMPLETE JAVASCRIPT LEARNING GUIDE
 * ============================================
 * From Basics to Advanced - All in One File
 * Total Lines: ~2200 lines of code + comments
 * ============================================
 */

// ============================================
// SECTION 1: BASICS & FUNDAMENTALS
// ============================================

console.log("================ SECTION 1: BASICS ================");

// 1.1 Comments and Basic Output
// This is a single-line comment
/* This is a 
   multi-line comment */

console.log("Hello, World!");           // Console output
console.warn("This is a warning");       // Warning message
console.error("This is an error");        // Error message
console.table([1, 2, 3, 4]);              // Table format

// 1.2 Variables - Different Declaration Methods
var oldWay = "Don't use this much";       // Function-scoped (old way)
let modernWay = "Use this for variables"; // Block-scoped, can be reassigned
const constant = "Cannot be reassigned";  // Block-scoped, constant

// Variable naming conventions
let camelCase = "standard";
let snake_case = "also possible";
let PascalCase = "for classes";
let $dollarSign = "valid";
let _underscore = "valid";

// 1.3 Data Types - Primitives
let string = "This is a string";          // String
let string2 = 'Also a string';
let string3 = `Template literal ${string}`; // Template literal with interpolation

let number = 42;                           // Number
let float = 3.14159;                       // Float (still Number type)
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

let bigInt = 9007199254740991n;            // BigInt (for large integers)

let boolean = true;                         // Boolean
let anotherBool = false;

let undefinedVar;                           // Undefined (declared but not assigned)
let nullVar = null;                          // Null (intentional absence)

let symbol = Symbol('unique');               // Symbol (unique identifier)

// 1.4 Type Checking
console.log(typeof string);                  // "string"
console.log(typeof number);                   // "number"
console.log(typeof boolean);                  // "boolean"
console.log(typeof undefinedVar);             // "undefined"
console.log(typeof nullVar);                  // "object" (JavaScript quirk!)
console.log(typeof symbol);                    // "symbol"
console.log(typeof bigInt);                     // "bigint"

// 1.5 Type Conversion (Coercion)
let strToNum = Number("123");                 // 123
let strToInt = parseInt("123.45");            // 123
let strToFloat = parseFloat("123.45");        // 123.45
let numToString = String(123);                 // "123"
let boolToString = String(true);               // "true"
let stringToBool = Boolean("hello");           // true (non-empty string)
let emptyStringToBool = Boolean("");           // false

// Implicit conversion (watch out!)
console.log("5" + 3);                          // "53" (string concatenation)
console.log("5" - 3);                          // 2 (numeric subtraction)
console.log("5" * "3");                         // 15 (numeric multiplication)
console.log(true + true);                       // 2 (true = 1)

// ============================================
// SECTION 2: OPERATORS
// ============================================

console.log("\n================ SECTION 2: OPERATORS ================");

// 2.1 Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7  (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1  (Modulus/Remainder)
console.log(a ** b);  // 1000 (Exponentiation)

// Increment/Decrement
let counter = 5;
console.log(counter++);  // 5 (post-increment: returns then increments)
console.log(counter);    // 6
console.log(++counter);  // 7 (pre-increment: increments then returns)

// 2.2 Assignment Operators
let x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)
x *= 2;  // x = x * 2 (24)
x /= 4;  // x = x / 4 (6)
x %= 4;  // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)

// 2.3 Comparison Operators
console.log(5 == "5");   // true  (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, no coercion)
console.log(5 != "5");   // false (loose inequality)
console.log(5 !== "5");  // true  (strict inequality)
console.log(5 > 3);      // true
console.log(5 >= 5);     // true
console.log(3 < 5);      // true
console.log(3 <= 3);     // true

// Special comparisons
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN);         // false (NaN is not equal to anything)

// 2.4 Logical Operators
let t = true, f = false;
console.log(t && f);  // false (AND)
console.log(t || f);  // true  (OR)
console.log(!t);      // false (NOT)

// Short-circuit evaluation
let result = false && console.log("This won't run");
let result2 = true || console.log("This won't run");

// Nullish coalescing
let value = null ?? "default";      // "default"
let value2 = 0 ?? "default";        // 0 (not null or undefined)
let value3 = undefined ?? "default"; // "default"

// 2.5 Ternary Operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// 2.6 Bitwise Operators (less common but good to know)
console.log(5 & 3);   // 1 (AND: 0101 & 0011 = 0001)
console.log(5 | 3);   // 7 (OR: 0101 | 0011 = 0111)
console.log(5 ^ 3);   // 6 (XOR: 0101 ^ 0011 = 0110)
console.log(~5);      // -6 (NOT)
console.log(5 << 1);  // 10 (left shift)
console.log(5 >> 1);  // 2 (right shift)

// ============================================
// SECTION 3: CONTROL FLOW
// ============================================

console.log("\n================ SECTION 3: CONTROL FLOW ================");

// 3.1 if-else statements
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's nice!");
} else if (temperature > 10) {
    console.log("It's cool!");
} else {
    console.log("It's cold!");
}

// 3.2 switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);  // "Wednesday"

// 3.3 Loops

// for loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// while loop
console.log("While loop:");
let i = 0;
while (i < 5) {
    console.log(`While iteration ${i}`);
    i++;
}

// do-while loop (always executes at least once)
console.log("Do-while loop:");
let j = 0;
do {
    console.log(`Do-while iteration ${j}`);
    j++;
} while (j < 3);

// for...in loop (for object properties)
console.log("For...in loop:");
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for...of loop (for iterable values)
console.log("For...of loop:");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// break and continue
console.log("Break and continue:");
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip iteration 3
    if (i === 7) break;      // Stop at 7
    console.log(i);          // 0,1,2,4,5,6
}

// Labeled loops (rare but possible)
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(`i=${i}, j=${j}`);
    }
}

// ============================================
// SECTION 4: FUNCTIONS
// ============================================

console.log("\n================ SECTION 4: FUNCTIONS ================");

// 4.1 Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // "Hello, Alice!"

// Function with default parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(5));     // 25 (5^2)
console.log(power(5, 3));  // 125 (5^3)

// 4.2 Function Expressions
const square = function(x) {
    return x * x;
};
console.log(square(5));  // 25

// 4.3 Arrow Functions (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // 20

// Arrow function with block
const complex = (x, y) => {
    let result = x + y;
    return result * 2;
};

// Arrow function with single parameter (parentheses optional)
const double = x => x * 2;

// 4.4 IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE runs immediately!");
})();

// 4.5 Parameters and Arguments
function sumAll(...numbers) {  // Rest parameter
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));  // 15

// Arguments object (old way, not in arrow functions)
function oldSum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(oldSum(1, 2, 3, 4));  // 10

// 4.6 Higher-Order Functions (functions that take/return functions)
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double2 = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double2(10));  // 20
console.log(triple(10));   // 30

// 4.7 Callback Functions
function processUserInput(callback) {
    let name = "Bob";  // Simulating user input
    callback(name);
}
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
});

// 4.8 Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));  // 120

// Fibonacci with recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));  // 13

// 4.9 Scope and Closures
function outerFunction(x) {
    let outerVar = "I'm outside!";
    
    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar);  // Can access outer variable
        console.log(x);         // Can access parameter
    }
    
    return innerFunction;
}
const closure = outerFunction(42);
closure();  // Still has access to outerVar and x

// Practical closure example (counter)
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const counter2 = createCounter();
console.log(counter2.increment());  // 1
console.log(counter2.increment());  // 2
console.log(counter2.getCount());   // 2

// ============================================
// SECTION 5: ARRAYS
// ============================================

console.log("\n================ SECTION 5: ARRAYS ================");

// 5.1 Creating Arrays
let fruits = ["apple", "banana", "orange"];
let numbers2 = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "object"}, [1, 2]];
let empty = [];
let constructor = new Array(5);  // Array with 5 empty slots

// 5.2 Accessing and Modifying
console.log(fruits[0]);      // "apple" (first element)
console.log(fruits[fruits.length - 1]);  // "orange" (last element)

fruits[1] = "grape";         // Modify element
fruits[5] = "mango";         // Can add at any index (creates empty slots)

// 5.3 Array Properties
console.log(fruits.length);  // Length of array

// 5.4 Basic Array Methods
let arr = [1, 2, 3, 4, 5];

// Adding/removing elements
arr.push(6);                 // Add to end: [1,2,3,4,5,6]
arr.pop();                   // Remove from end: [1,2,3,4,5]
arr.unshift(0);              // Add to beginning: [0,1,2,3,4,5]
arr.shift();                 // Remove from beginning: [1,2,3,4,5]

// Finding elements
console.log(arr.indexOf(3));     // 2
console.log(arr.lastIndexOf(3)); // 2
console.log(arr.includes(5));    // true

// Slicing and splicing
let sliced = arr.slice(1, 3);    // [2,3] (original unchanged)
let spliced = arr.splice(2, 2, 10, 11); // Remove 2 from index 2, insert 10,11

// Joining and splitting
console.log(fruits.join(", "));   // "apple, grape, orange, , mango"

// 5.5 Iteration Methods
arr = [1, 2, 3, 4, 5];

// forEach
arr.forEach((item, index) => {
    console.log(`arr[${index}] = ${item}`);
});

// map (creates new array)
let doubled = arr.map(x => x * 2);
console.log(doubled);  // [2,4,6,8,10]

// filter
let evens = arr.filter(x => x % 2 === 0);
console.log(evens);  // [2,4]

// reduce
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 15

// reduce with object
let max = arr.reduce((max, curr) => Math.max(max, curr), -Infinity);

// some and every
console.log(arr.some(x => x > 4));   // true (at least one)
console.log(arr.every(x => x > 0));  // true (all)

// find and findIndex
let found = arr.find(x => x > 3);    // 4
let foundIndex = arr.findIndex(x => x > 3); // 3

// flat and flatMap
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());           // [1,2,3,4,[5,6]]
console.log(nested.flat(2));          // [1,2,3,4,5,6]

// 5.6 Sorting
let unsorted = [3, 1, 4, 1, 5, 9, 2];
unsorted.sort();  // [1,1,2,3,4,5,9] (as strings by default)

// Proper numeric sort
unsorted.sort((a, b) => a - b);       // Ascending
unsorted.sort((a, b) => b - a);       // Descending

// 5.7 Array Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3,4,5]

// Swapping variables
[a, b] = [b, a];

// 5.8 Spread Operator with Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  // [1,2,3,4,5,6]
let copy = [...arr1];               // Shallow copy

// 5.9 Multi-dimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);  // 6

// ============================================
// SECTION 6: OBJECTS
// ============================================

console.log("\n================ SECTION 6: OBJECTS ================");

// 6.1 Creating Objects
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    },
    greet: function() {
        return `Hello, I'm ${this.firstName}`;
    },
    // Shorthand method (ES6)
    sayBye() {
        return `Bye from ${this.firstName}`;
    }
};

console.log(person2.firstName);           // Dot notation
console.log(person2["lastName"]);          // Bracket notation
console.log(person2.greet());               // Method call

// 6.2 Computed Properties
let propName = "age";
console.log(person2[propName]);  // 30

// 6.3 Adding/Modifying Properties
person2.email = "john@example.com";
person2.age = 31;
delete person2.isEmployed;

// 6.4 Object Destructuring
let {firstName, lastName, age: personAge} = person2;
console.log(firstName);  // "John"
console.log(lastName);   // "Doe"

// Nested destructuring
let {address: {city}} = person2;
console.log(city);  // "Boston"

// 6.5 Spread Operator with Objects
let person3 = { ...person2, age: 25, city: "New York" };
let person4 = Object.assign({}, person2, {age: 40});

// 6.6 Object Methods
console.log(Object.keys(person2));    // Array of keys
console.log(Object.values(person2));  // Array of values
console.log(Object.entries(person2)); // Array of [key, value] pairs

// 6.7 Object Iteration
for (let key in person2) {
    if (person2.hasOwnProperty(key)) {  // Check if own property
        console.log(`${key}: ${person2[key]}`);
    }
}

// 6.8 Object Prototypes
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

let john = new Person("John", "Doe", 30);
console.log(john.fullName());  // "John Doe"

// 6.9 Classes (ES6+ syntactic sugar)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static createUnknown() {
        return new Animal("Unknown", "Unknown");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog");
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
}

let dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak());  // "Rex barks!"

// 6.10 Getters and Setters
let circle = {
    radius: 5,
    get area() {
        return Math.PI * this.radius ** 2;
    },
    set diameter(value) {
        this.radius = value / 2;
    }
};
console.log(circle.area);  // ~78.54
circle.diameter = 20;
console.log(circle.radius); // 10

// ============================================
// SECTION 7: STRINGS AND STRING METHODS
// ============================================

console.log("\n================ SECTION 7: STRINGS ================");

let str = "Hello, World!";

// 7.1 String Properties and Basic Methods
console.log(str.length);           // 13
console.log(str.charAt(0));        // "H"
console.log(str.charCodeAt(0));    // 72 (ASCII code)

// 7.2 Searching
console.log(str.indexOf("o"));      // 4
console.log(str.lastIndexOf("o"));  // 8
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!"));     // true

// 7.3 Extracting Substrings
console.log(str.substring(7, 12));  // "World"
console.log(str.slice(7, 12));      // "World"
console.log(str.slice(-6));         // "World!" (negative indices)

// 7.4 Modifying Strings (returns new string)
console.log(str.toLowerCase());      // "hello, world!"
console.log(str.toUpperCase());      // "HELLO, WORLD!"
console.log("  trim me  ".trim());   // "trim me"
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(str.replaceAll("o", "0")); // "Hell0, W0rld!"

// 7.5 Splitting and Joining
let words = str.split(", ");        // ["Hello", "World!"]
console.log(words.join(" - "));     // "Hello - World!"

// 7.6 Template Literals (ES6)
let name2 = "Alice";
let greeting = `Hello, ${name2}!
This is a multi-line
string.`;
console.log(greeting);

// Tagged templates
function tag(strings, ...values) {
    console.log(strings);  // Array of string parts
    console.log(values);   // Array of interpolated values
    return "Processed";
}
let tagged = tag`Hello ${name2}, you are ${25} years old`;

// 7.7 Advanced String Methods
console.log("abc".padStart(5, "*"));   // "**abc"
console.log("abc".padEnd(5, "*"));     // "abc**"
console.log("hello".repeat(3));        // "hellohellohello"

// ============================================
// SECTION 8: NUMBERS AND MATH
// ============================================

console.log("\n================ SECTION 8: NUMBERS AND MATH ================");

// 8.1 Number Properties
console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);            // NaN

// 8.2 Number Methods
let num = 123.456;
console.log(num.toFixed(2));        // "123.46" (string)
console.log(num.toPrecision(4));    // "123.5"
console.log(num.toExponential(2));  // "1.23e+2"
console.log(Number.parseInt("123")); // 123
console.log(Number.parseFloat("123.45")); // 123.45
console.log(Number.isInteger(123));  // true
console.log(Number.isNaN(NaN));      // true
console.log(Number.isFinite(Infinity)); // false

// 8.3 Math Object
console.log(Math.PI);                // 3.14159...
console.log(Math.E);                 // 2.718...
console.log(Math.abs(-5));           // 5
console.log(Math.ceil(4.2));         // 5
console.log(Math.floor(4.9));        // 4
console.log(Math.round(4.5));        // 5
console.log(Math.trunc(4.9));        // 4 (removes decimal)
console.log(Math.max(1, 5, 3, 9));   // 9
console.log(Math.min(1, 5, 3, 9));   // 1
console.log(Math.pow(2, 3));         // 8
console.log(Math.sqrt(16));          // 4
console.log(Math.cbrt(27));          // 3
console.log(Math.random());          // Random 0-1
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // ~1

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

// ============================================
// SECTION 9: DATES AND TIME
// ============================================

console.log("\n================ SECTION 9: DATES ================");

// 9.1 Creating Dates
let now = new Date();
let specific = new Date(2024, 0, 1, 12, 30, 0); // Jan 1, 2024, 12:30:00
let fromString = new Date("2024-01-01T12:30:00");
let fromTimestamp = new Date(1704067200000);
let utc = new Date(Date.UTC(2024, 0, 1));

// 9.2 Getting Date Components
console.log(now.getFullYear());      // 2024
console.log(now.getMonth());         // 0-11 (0 = January)
console.log(now.getDate());          // 1-31
console.log(now.getDay());           // 0-6 (0 = Sunday)
console.log(now.getHours());         // 0-23
console.log(now.getMinutes());       // 0-59
console.log(now.getSeconds());       // 0-59
console.log(now.getMilliseconds());  // 0-999
console.log(now.getTime());          // Timestamp in milliseconds

// UTC versions
console.log(now.getUTCFullYear());   // UTC year

// 9.3 Setting Date Components
let date = new Date();
date.setFullYear(2025);
date.setMonth(11);  // December
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);

// 9.4 Date Formatting
console.log(date.toString());           // Full string
console.log(date.toDateString());       // Date only
console.log(date.toTimeString());       // Time only
console.log(date.toISOString());        // ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toUTCString());        // UTC string
console.log(date.toLocaleDateString()); // Localized date
console.log(date.toLocaleTimeString()); // Localized time
console.log(date.toLocaleString());     // Localized date and time

// 9.5 Date Calculations
let d1 = new Date(2024, 0, 1);
let d2 = new Date(2024, 11, 31);
let diffMs = d2 - d1;                  // Difference in milliseconds
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);  // ~365

// ============================================
// SECTION 10: ERROR HANDLING
// ============================================

console.log("\n================ SECTION 10: ERROR HANDLING ================");

// 10.1 try-catch-finally
try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log("This runs");
    throw new Error("Something went wrong!");
    console.log("This won't run");
} catch (error) {
    console.log("Caught an error:", error.message);
    console.log("Error name:", error.name);
    console.log("Stack trace:", error.stack);
} finally {
    console.log("This always runs");
}

// 10.2 Custom Error Types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative");
    }
    if (age > 150) {
        throw new ValidationError("Age seems unrealistic");
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation error:", error.message);
    } else {
        console.log("Unknown error:", error);
    }
}

// 10.3 Error Types in JavaScript
try {
    // ReferenceError
    // console.log(undefinedVariable);
    
    // TypeError
    // null.toString();
    
    // SyntaxError - can't catch, happens at parse time
    // eval("if )");
    
    // RangeError
    // new Array(-1);
    
    // URIError
    // decodeURIComponent("%");
} catch (error) {
    console.log(error.name);
}

// 10.4 Throwing errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// 10.5 Promise error handling (see promises section later)

// ============================================
// SECTION 11: MAPS AND SETS (ES6+)
// ============================================

console.log("\n================ SECTION 11: MAPS AND SETS ================");

// 11.1 Map - Key-value pairs with any key type
let map = new Map();

// Adding entries
map.set("name", "John");
map.set(42, "Answer");
map.set(true, "Boolean key");
map.set({id: 1}, "Object key");

// Getting values
console.log(map.get("name"));  // "John"
console.log(map.get(42));      // "Answer"

// Checking existence
console.log(map.has("name"));  // true

// Size
console.log(map.size);         // 4

// Deleting
map.delete(42);
console.log(map.size);         // 3

// Iterating
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Keys, values, entries
console.log([...map.keys()]);    // ["name", true, {id:1}]
console.log([...map.values()]);  // ["John", "Boolean key", "Object key"]
console.log([...map.entries()]); // [[key, value], ...]

// 11.2 WeakMap (keys must be objects, garbage-collected)
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "Some value");
// Can't iterate, can't get size

// 11.3 Set - Unique values
let set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(1);  // Duplicate, ignored

console.log(set.size);  // 3
console.log(set.has(2)); // true

// Deleting
set.delete(2);
console.log(set.has(2)); // false

// Iterating
set.forEach(value => console.log(value));

for (let value of set) {
    console.log(value);
}

// Converting between Set and Array
let arr3 = [1, 2, 3, 2, 1];
let unique = new Set(arr3);  // Set {1,2,3}
let backToArray = [...unique]; // [1,2,3]

// Set operations
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Union
let union = new Set([...setA, ...setB]);

// Intersection
let intersection = new Set([...setA].filter(x => setB.has(x)));

// Difference
let difference = new Set([...setA].filter(x => !setB.has(x)));

// 11.4 WeakSet (objects only, garbage-collected)
let weakSet = new WeakSet();
let obj1 = {}, obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true

// ============================================
// SECTION 12: PROMISES AND ASYNCHRONOUS JS
// ============================================

console.log("\n================ SECTION 12: PROMISES AND ASYNC ================");

// 12.1 Callbacks (traditional async)
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback(null, "Data received");
    }, 1000);
}

fetchDataCallback((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Callback:", data);
    }
});

// 12.2 Creating Promises
let promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Operation successful");
        } else {
            reject(new Error("Operation failed"));
        }
    }, 1000);
});

// 12.3 Using Promises
promise
    .then(result => {
        console.log("Promise resolved:", result);
        return "Next step";
    })
    .then(nextResult => {
        console.log("Chained:", nextResult);
    })
    .catch(error => {
        console.error("Promise rejected:", error.message);
    })
    .finally(() => {
        console.log("Promise finished (always runs)");
    });

// 12.4 Promise Methods
let p1 = Promise.resolve("Immediate success");
let p2 = Promise.reject(new Error("Immediate failure"));
let p3 = new Promise(resolve => setTimeout(() => resolve("Delayed"), 1000));

// Promise.all - wait for all to resolve (or any to reject)
Promise.all([p1, p3])
    .then(results => console.log("All:", results))
    .catch(error => console.error("All error:", error));

// Promise.allSettled - wait for all to settle (resolve or reject)
Promise.allSettled([p1, p2, p3])
    .then(results => console.log("All settled:", results));

// Promise.race - first to settle
Promise.race([p1, p3])
    .then(result => console.log("Race winner:", result));

// Promise.any - first to resolve (ignores rejections)
Promise.any([p2, p3, p1])
    .then(result => console.log("Any resolved:", result));

// 12.5 Async/Await (ES8+)
async function fetchData() {
    try {
        console.log("Fetching data...");
        let result = await promise;
        console.log("Async/await result:", result);
        
        // Sequential
        let data1 = await p1;
        let data2 = await p3;
        console.log("Sequential:", data1, data2);
        
        // Parallel
        let [res1, res2] = await Promise.all([p1, p3]);
        console.log("Parallel:", res1, res2);
        
        return "All done";
    } catch (error) {
        console.error("Async/await error:", error);
        throw error;  // Re-throw if needed
    }
}

// Call async function
fetchData().then(final => console.log(final));

// 12.6 Simulating Real API Calls
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({id: 1, name: "John", email: "john@example.com"});
            } else {
                reject(new Error("User not found"));
            }
        }, 500);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id: 1, title: "Post 1", userId},
                {id: 2, title: "Post 2", userId}
            ]);
        }, 500);
    });
}

async function getUserWithPosts(userId) {
    try {
        let user = await getUser(userId);
        let posts = await getPosts(user.id);
        return {...user, posts};
    } catch (error) {
        console.error("Failed:", error.message);
    }
}

// ============================================
// SECTION 13: ES6+ MODERN FEATURES
// ============================================

console.log("\n================ SECTION 13: MODERN FEATURES ================");

// 13.1 let and const (already covered)

// 13.2 Template Literals (covered)

// 13.3 Destructuring (covered)

// 13.4 Spread/Rest (covered)

// 13.5 Default Parameters (covered)

// 13.6 Enhanced Object Literals
let dynamicKey = "score";
let score = 100;

let player = {
    name: "Alice",
    [dynamicKey]: score,  // Computed property
    level: 5,
    // Method shorthand
    display() {
        return `${this.name} has score ${this.score}`;
    }
};

// 13.7 Arrow Functions (covered)

// 13.8 Classes (covered)

// 13.9 Modules (need separate files, but syntax shown)
// export const PI = 3.14159;
// export function square(x) { return x * x; }
// export default class MyClass {}
// import { PI, square } from './module.js';
// import MyClass from './module.js';

// 13.10 Optional Chaining (?.) - ES2020
let user = {
    profile: {
        name: "Bob",
        // address is missing
    }
};
console.log(user?.profile?.name);      // "Bob"
console.log(user?.profile?.address?.city); // undefined (no error)

// 13.11 Nullish Coalescing (??) - ES2020
let value4 = null ?? "default";        // "default"
let value5 = 0 ?? "default";           // 0 (0 is not nullish)
let value6 = "" ?? "default";          // "" (empty string is not nullish)

// 13.12 Logical Assignment Operators - ES2021
let x2 = 0;
x2 ||= 10;  // x = x || 10 (x becomes 10)
let y2 = 5;
y2 &&= 3;   // y = y && 3 (y becomes 3)
let z2 = null;
z2 ??= 10;  // z = z ?? 10 (z becomes 10)

// 13.13 Numeric Separators
let billion = 1_000_000_000;  // 1000000000
let binary = 0b1010_1011;     // Binary with separators

// 13.14 BigInt (covered)
let huge = 9007199254740991n;
let huge2 = BigInt("9007199254740991");

// 13.15 Dynamic Import
async function loadModule() {
    // const module = await import('./module.js');
    // module.someFunction();
}

// ============================================
// SECTION 14: BROWSER APIs & DOM MANIPULATION
// ============================================

console.log("\n================ SECTION 14: DOM (BROWSER ONLY) ================");
// Note: These only work in browser environment, not Node.js

/*
// 14.1 Selecting Elements
let element = document.getElementById("myId");
let elements = document.getElementsByClassName("myClass");
let elements2 = document.getElementsByTagName("div");
let first = document.querySelector(".myClass");
let all = document.querySelectorAll(".myClass");

// 14.2 Manipulating Elements
element.textContent = "New text";
element.innerHTML = "<span>HTML content</span>";
element.style.color = "red";
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");

// 14.3 Creating Elements
let newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);

// 14.4 Event Listeners
element.addEventListener("click", (event) => {
    console.log("Clicked!", event);
});

// 14.5 Event Delegation
document.addEventListener("click", (event) => {
    if (event.target.matches(".button")) {
        console.log("Button clicked:", event.target);
    }
});

// 14.6 Timers
let timeoutId = setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

let intervalId = setInterval(() => {
    console.log("This runs every second");
}, 1000);

clearTimeout(timeoutId);
clearInterval(intervalId);

// 14.7 Local Storage
localStorage.setItem("key", "value");
let stored = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

// 14.8 Fetch API (for HTTP requests)
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();  // or .text()
    })
    .then(data => console.log(data))
    .catch(error => console.error("Fetch error:", error));

// 14.9 Async/await with fetch
async function fetchData2() {
    try {
        let response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error("HTTP error " + response.status);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
*/

// ============================================
// SECTION 15: ADVANCED CONCEPTS
// ============================================

console.log("\n================ SECTION 15: ADVANCED CONCEPTS ================");

// 15.1 Closures (practical example)
function createMultiplier2(factor) {
    return function(number) {
        return number * factor;
    };
}
let double3 = createMultiplier2(2);
let triple2 = createMultiplier2(3);
console.log(double3(10));  // 20
console.log(triple2(10));  // 30

// 15.2 Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function sum3(a, b, c) {
    return a + b + c;
}
let curriedSum = curry(sum3);
console.log(curriedSum(1)(2)(3));  // 6
console.log(curriedSum(1, 2)(3));  // 6

// 15.3 Memoization
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

let fib = memoize(function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(40));  // Fast even for large numbers

// 15.4 Generators
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
console.log(gen.next());  // {value: 1, done: false}
console.log(gen.next());  // {value: 2, done: false}
console.log(gen.next());  // {value: 3, done: false}
console.log(gen.next());  // {value: undefined, done: true}

// Infinite generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
let ids = idGenerator();
console.log(ids.next().value);  // 1
console.log(ids.next().value);  // 2

// 15.5 Iterators
let myIterable = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let index = 0;
        let values = this.values;
        return {
            next() {
                if (index < values.length) {
                    return {value: values[index++], done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};
for (let value of myIterable) {
    console.log(value);
}

// 15.6 Proxy
let target = {name: "John", age: 30};
let handler = {
    get(obj, prop) {
        console.log(`Getting ${prop}`);
        return prop in obj ? obj[prop] : "Property not found";
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        obj[prop] = value;
        return true;
    }
};
let proxy = new Proxy(target, handler);
console.log(proxy.name);  // Getting name -> "John"
proxy.age = 31;           // Setting age to 31

// 15.7 Reflect
let obj = {a: 1, b: 2};
console.log(Reflect.has(obj, "a"));     // true
console.log(Reflect.ownKeys(obj));      // ["a", "b"]
Reflect.set(obj, "c", 3);

// 15.8 Event Loop Demo
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Output: Start, End, Promise, Timeout

// 15.9 Web Workers (browser only)
/*
let worker = new Worker("worker.js");
worker.postMessage({cmd: "start"});
worker.onmessage = (event) => {
    console.log("Message from worker:", event.data);
};
*/

// 15.10 Service Workers (PWA)
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW failed', err));
}
*/

// ============================================
// SECTION 16: ALGORITHMS & DATA STRUCTURES
// ============================================

console.log("\n================ SECTION 16: ALGORITHMS ================");

// 16.1 Stack (LIFO)
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());  // 2

// 16.2 Queue (FIFO)
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());  // 1

// 16.3 Linked List
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    add(value) {
        let node = new ListNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    remove(value) {
        if (!this.head) return null;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return value;
        }
        return null;
    }
    
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr.join(" -> "));
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();  // "1 -> 2 -> 3"

// 16.4 Binary Search Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this._insertNode(this.root, newNode);
    }
    
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    
    search(value) {
        return this._searchNode(this.root, value);
    }
    
    _searchNode(node, value) {
        if (!node) return false;
        if (value === node.value) return true;
        if (value < node.value) return this._searchNode(node.left, value);
        return this._searchNode(node.right, value);
    }
    
    inOrder() {
        let result = [];
        this._inOrder(this.root, result);
        return result;
    }
    
    _inOrder(node, result) {
        if (node) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
    }
}

let bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
console.log("BST InOrder:", bst.inOrder());  // [20,30,40,50,70]
console.log("Search 40:", bst.search(40));   // true

// 16.5 Sorting Algorithms
function bubbleSort(arr) {
    let sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    return sorted;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsorted2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(unsorted2));
console.log("Quick Sort:", quickSort(unsorted2));

// 16.6 Searching Algorithms
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let sorted = [...arr].sort((a, b) => a - b);
    let left = 0, right = sorted.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sorted[mid] === target) return mid;
        if (sorted[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

let searchArr = [5, 2, 8, 1, 9, 3];
console.log("Linear Search 8:", linearSearch(searchArr, 8));
console.log("Binary Search 8:", binarySearch(searchArr, 8));

// ============================================
// SECTION 17: REGULAR EXPRESSIONS
// ============================================

console.log("\n================ SECTION 17: REGULAR EXPRESSIONS ================");

// 17.1 Creating Regex
let regex1 = /pattern/;
let regex2 = new RegExp("pattern");

// 17.2 Regex Methods
let text = "The quick brown fox jumps over the lazy dog.";

// test() - returns boolean
let hasFox = /fox/.test(text);
console.log(hasFox);  // true

// exec() - returns match info
let match = /quick/.exec(text);
console.log(match);  // ["quick", index: 4, input: ...]

// 17.3 String Methods with Regex
console.log(text.match(/the/gi));  // Array of matches (global, case-insensitive)
console.log(text.search(/fox/));   // 16 (index)
console.log(text.replace(/fox/, "cat"));  // Replace first
console.log(text.replace(/the/gi, "a"));  // Replace all
console.log(text.split(/\s+/));    // Split on whitespace

// 17.4 Regex Patterns
let patterns = {
    // Character classes
    digit: /\d/,           // Any digit
    word: /\w/,            // Word character (a-z, A-Z, 0-9, _)
    whitespace: /\s/,      // Whitespace
    notDigit: /\D/,        // Not a digit
    notWord: /\W/,         // Not a word character
    notWhitespace: /\S/,   // Not whitespace
    anyChar: /./,          // Any character except newline
    
    // Quantifiers
    zeroOrMore: /a*/,      // 0 or more 'a'
    oneOrMore: /a+/,       // 1 or more 'a'
    zeroOrOne: /a?/,       // 0 or 1 'a'
    exactlyThree: /a{3}/,  // Exactly 3 'a's
    twoToFour: /a{2,4}/,   // 2 to 4 'a's
    threeOrMore: /a{3,}/,  // 3 or more 'a's
    
    // Anchors
    start: /^Hello/,       // Starts with "Hello"
    end: /world$/,         // Ends with "world"
    wordBoundary: /\bword\b/,  // Whole word "word"
    
    // Groups and ranges
    vowels: /[aeiou]/,     // Any vowel
    range: /[a-z]/,        // Any lowercase letter
    notRange: /[^0-9]/,    // Not a digit
    group: /(ab)+/,        // Group "ab" one or more times
    
    // Alternatives
    color: /red|green|blue/,
    
    // Flags
    global: /pattern/g,
    caseInsensitive: /pattern/i,
    multiline: /pattern/m,
    dotAll: /pattern/s,    // Dot matches newline
    unicode: /pattern/u,
    sticky: /pattern/y
};

// 17.5 Practical Regex Examples
function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(validateEmail("test@example.com"));  // true

function extractNumbers(str) {
    return str.match(/\d+/g) || [];
}
console.log(extractNumbers("I have 10 apples and 5 oranges"));  // ["10", "5"]

function isValidPhone(phone) {
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}
console.log(isValidPhone("123-456-7890"));  // true

// ============================================
// SECTION 18: JSON & DATA SERIALIZATION
// ============================================

console.log("\n================ SECTION 18: JSON ================");

// 18.1 JavaScript Objects to JSON
let userData = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["JS", "Python"],
    address: {
        city: "New York",
        zip: "10001"
    },
    greet: function() { return "Hello"; },  // Functions are omitted
    birthDate: new Date(1994, 0, 1)
};

let jsonString = JSON.stringify(userData);
console.log("JSON String:", jsonString);

// Pretty print
let prettyJson = JSON.stringify(userData, null, 2);
console.log("Pretty JSON:\n", prettyJson);

// 18.2 JSON to JavaScript Objects
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
console.log("Name:", parsedObject.name);
console.log("City:", parsedObject.address.city);

// 18.3 JSON with Reviver
let jsonWithDate = '{"name":"John","birthDate":"1994-01-01T00:00:00.000Z"}';
let withReviver = JSON.parse(jsonWithDate, (key, value) => {
    if (key === "birthDate") return new Date(value);
    return value;
});
console.log("With reviver:", withReviver.birthDate instanceof Date);  // true

// 18.4 JSON.stringify with Replacer
let filtered = JSON.stringify(userData, ["name", "age"], 2);
console.log("Filtered JSON:\n", filtered);

// 18.5 toJSON Method
let customObj = {
    name: "Custom",
    data: [1, 2, 3],
    toJSON() {
        return {
            customName: this.name,
            length: this.data.length
        };
    }
};
console.log("Custom toJSON:", JSON.stringify(customObj));

// ============================================
// SECTION 19: DEBUGGING & BEST PRACTICES
// ============================================

console.log("\n================ SECTION 19: DEBUGGING ================");

// 19.1 Console Methods
console.log("Regular log");
console.info("Information");
console.warn("Warning message");
console.error("Error message");
console.debug("Debug message");

console.group("Group 1");
console.log("Inside group");
console.groupEnd();

console.time("Timer");
// Some operation
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Timer");

console.trace("Trace message");

// 19.2 Assertions
console.assert(1 === 1, "This won't show");
console.assert(1 === 2, "This will show if condition is false");

// 19.3 Debugger Statement
function problematicFunction() {
    let x = 5;
    // debugger;  // Uncomment to pause execution here
    return x * 2;
}

// 19.4 Performance Monitoring
performance.mark('start');
// Some operation
performance.mark('end');
performance.measure('My Operation', 'start', 'end');
let measures = performance.getEntriesByType('measure');
console.log('Performance measure:', measures);

// 19.5 Best Practices Examples

// Use const by default, let when reassignment needed
const PI = 3.14159;
let counter3 = 0;

// Use template literals
let name3 = "World";
console.log(`Hello, ${name3}!`);

// Use arrow functions for callbacks
[1, 2, 3].map(x => x * 2);

// Use default parameters
function greet2(name3 = "Guest") {
    return `Hello, ${name3}!`;
}

// Use destructuring
const {name: userName, age: userAge} = userData;

// Use spread for copying
const original = [1, 2, 3];
const copy2 = [...original];

// Use optional chaining
const city2 = userData?.address?.city ?? "Unknown";

// Use meaningful variable names
// Bad: let d = new Date();
// Good: let currentDate = new Date();

// Use strict equality
// if (x === 5) instead of if (x == 5)

// Avoid global variables
(function() {
    // Code here is isolated
})();

// ============================================
// SECTION 20: MODERN JAVASCRIPT PATTERNS
// ============================================

console.log("\n================ SECTION 20: DESIGN PATTERNS ================");

// 20.1 Module Pattern
const Calculator = (function() {
    // Private variables
    let result = 0;
    
    // Private function
    function validate(num) {
        return typeof num === 'number' && !isNaN(num);
    }
    
    // Public API
    return {
        add(num) {
            if (validate(num)) result += num;
            return this;
        },
        subtract(num) {
            if (validate(num)) result -= num;
            return this;
        },
        getResult() {
            return result;
        },
        reset() {
            result = 0;
            return this;
        }
    };
})();

Calculator.add(5).subtract(2);
console.log("Calculator result:", Calculator.getResult());  // 3

// 20.2 Singleton Pattern
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = "Connected to DB";
        Database.instance = this;
    }
    
    query(sql) {
        console.log(`Executing: ${sql}`);
    }
}

let db1 = new Database();
let db2 = new Database();
console.log("Same instance?", db1 === db2);  // true

// 20.3 Factory Pattern
class Car {
    constructor(model) {
        this.model = model;
        this.type = "car";
    }
    drive() { return "Driving car"; }
}

class Truck {
    constructor(model) {
        this.model = model;
        this.type = "truck";
    }
    drive() { return "Driving truck"; }
}

class VehicleFactory {
    createVehicle(type, model) {
        switch(type) {
            case "car": return new Car(model);
            case "truck": return new Truck(model);
            default: throw new Error("Unknown vehicle type");
        }
    }
}

let factory = new VehicleFactory();
let car = factory.createVehicle("car", "Tesla");
console.log(car.drive());

// 20.4 Observer Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(data));
        }
    }
    
    off(event, listenerToRemove) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event]
            .filter(listener => listener !== listenerToRemove);
    }
}

let emitter = new EventEmitter();
emitter.on('userLoggedIn', (user) => {
    console.log(`Welcome back, ${user.name}!`);
});
emitter.emit('userLoggedIn', {name: 'John'});

// 20.5 Proxy Pattern (already covered in Proxy section)

// 20.6 Decorator Pattern
function log(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`Calling ${key} with`, args);
        return original.apply(this, args);
    };
    return descriptor;
}

class Example {
    @log
    greet(name) {
        return `Hello, ${name}!`;
    }
}

// Note: Decorators need Babel/TypeScript to run

// ============================================
// FINAL: EXECUTION AND SUMMARY
// ============================================

console.log("\n================ JAVASCRIPT COMPLETE ================");
console.log("✅ All concepts covered!");
console.log("📚 Total sections: 20");
console.log("📝 Lines of code: ~2200 (including comments)");
console.log("🎯 From basics to advanced patterns");
console.log("\nHappy Coding! 🚀");

// Self-executing function to show all sections are complete
(function showComplete() {
    console.log("\n✨ JavaScript Learning Guide Complete!");
    console.log("You've learned:");
    const topics = [
        "Basics & Fundamentals",
        "Operators",
        "Control Flow",
        "Functions",
        "Arrays",
        "Objects",
        "Strings",
        "Numbers & Math",
        "Dates",
        "Error Handling",
        "Maps & Sets",
        "Promises & Async",
        "Modern ES6+ Features",
        "DOM & Browser APIs",
        "Advanced Concepts",
        "Algorithms & Data Structures",
        "Regular Expressions",
        "JSON",
        "Debugging & Best Practices",
        "Design Patterns"
    ];
    topics.forEach((topic, i) => console.log(`  ${i+1}. ${topic}`));
})();

// This file can be run in:
// - Browser console (most sections work)
// - Node.js environment (some DOM/browser sections won't work)
