// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

var date = new Date();

// Create an output string with a properly formatted date.
var dateOutput = "Todays date is " + date.toLocaleString('en-US', {dateStyle: 'short'}) + ".";

// Target the paragraph and overwrite its content

document.getElementById("dateOutput").textContent = dateOutput;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var numOne = "35";
var numTwo = "-3";
var numThree = "2.5";
var numFour = "number";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

var converterdNumOne = Number(numOne);
var numOneNaNValue = Number.isNaN(converterdNumOne);
var numOneIntegerValue = Number.isInteger(converterdNumOne);

var converterdNumTwo = Number(numTwo);
var numTwoNaNValue = Number.isNaN(converterdNumTwo);
var numTwoIntegerValue = Number.isInteger(converterdNumTwo);

var converterdNumThree = Number(numThree);
var numThreeNaNValue = Number.isNaN(converterdNumThree);
var numThreeIntegerValue = Number.isInteger(converterdNumThree);

var converterdNumFour = Number(numFour);
var numFourNaNValue = Number.isNaN(converterdNumFour);
var numFourIntegerValue = Number.isInteger(converterdNumFour);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
var numOneSentence = "Original: '" + numOne + "' -> Converted: " + converterdNumOne + " -> isNaN: " + numOneNaNValue + " -> isInteger: " + numOneIntegerValue;
var numTwoSentence = "Original: '" + numTwo + "' -> Converted: " + converterdNumTwo + " -> isNaN: " + numTwoNaNValue + " -> isInteger: " + numTwoIntegerValue;
var numThreeSentence = "Original: '" + numThree + "' -> Converted: " + converterdNumThree + " -> isNaN: " + numThreeNaNValue + " -> isInteger: " + numThreeIntegerValue;
var numFourSentence = "Original: '" + numFour + "' -> Converted: " + converterdNumFour + " -> isNaN: " + numFourNaNValue + " -> isInteger: " + numFourIntegerValue;

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
// Added html <br> so that it formats well on the page
var numConversionOutput = numOneSentence + "<br>" + numTwoSentence + "<br>" + numThreeSentence + "<br>" + numFourSentence;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

document.getElementById("numberConversionOutput").innerHTML = "<p>"+ numConversionOutput +"</p>";

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

var subtotal = 9.99;
var tax = 0.35;
var fee = 5;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)

var total;
total = subtotal * (1+tax);
total = total + fee;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()

outputTotal = "$" + total.toFixed(2);

// 4. Build a string showing your results
if (total < 50) {
    outputTotal = "The total is " + outputTotal;
} else {
    outputTotal = "Ouchhh, you don't want to see the total!";
}

// 5. Display the results inside the element with id="mathOutput"

document.getElementById("mathOutput").innerHTML = "<p>" + outputTotal + "</p>";


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)