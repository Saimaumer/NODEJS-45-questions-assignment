"use strict";
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city} , ${country}`;
}
//calling a function and print return value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Tehran", "Iran"));
