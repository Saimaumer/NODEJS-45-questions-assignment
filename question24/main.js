"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
let city = "karachi";
let capital = "ISLAMABAD";
let number1 = 10;
let number2 = 20;
let workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday",];
//test for equality and inequality with strings
console.log("Is city is equal to  karachi?");
console.log(city === "karachi");
console.log("\nis city is not equal to karachi?");
console.log(city != "karachi");
//test using the lower case function
console.log("\nis ISLAMABAD is equal to islamabad after converting to lowercase?");
console.log(capital.toLowerCase() == "islamabad");
console.log("\nis ISLAMABAD is not equal to islamabad after converting to lowercase?");
console.log(capital.toLowerCase() != "islamabad");
//numerical tests
console.log("\nIs number1 is equal to number2?");
console.log(number1 == number2);
console.log("\nIs number1 is not equal to number2?");
console.log(number1 != number2);
console.log("\nIs number1 is greater than to number2?");
console.log(number1 > number2);
console.log("\nIs number1 is less than to number2?");
console.log(number1 < number2);
console.log("\nIs number1 is greater than or  equal to number2?");
console.log(number1 >= number2);
console.log("\nIs number1 is less than or  equal to number2?");
console.log(number1 <= number2);
//test using &&  AND || operators
console.log("\nIs number2 is not equal to number1 and number2 is greater than number1?");
console.log(number2 != number1 && number2 > number1);
console.log("\nIs number2 is not equal to number1 and number2 is less than number1?");
console.log(number2 != number1 && number2 < number1);
console.log("\nIs number1 is greater than number2 and number2 is equal to  number2?");
console.log(number1 > number2 || number2 == number2);
console.log("\nIs number1 is greater than number2 and number2 is not equal to  number2?");
console.log(number1 > number2 || number2 != number2);
//test whether an items include OR NOT INCLUDE in array
console.log("Is thursday include in an array");
console.log(workingDays.includes("thursday"));
console.log("Is thursday  is not include in an array");
console.log(!workingDays.includes("thursday"));
