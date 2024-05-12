"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//making an array of countries and print its orignal order
let countriesToVisit = ["pakistan", "china", "india", "iran", "afghanistan"];
console.log("orignal order:", countriesToVisit);
//print an array in alphabetical order without modifing the actual list
console.log("alphabetical order:", [...countriesToVisit].sort());
//show that the array is stiil in order
console.log("still in orignal order ", countriesToVisit);
//print an array in reversed order without modifiying the actual array list
console.log("reverse order", [...countriesToVisit].reverse());
//show that the array is stiil in order
console.log("still in orignal order ", countriesToVisit);
//we have changed the orignal array order now
console.log("orignal array reversed:", countriesToVisit.reverse());
//print the array to show that its back to its orignal order
console.log("back to orignal order", countriesToVisit.reverse());
//print an array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order", countriesToVisit.sort());
//we have changed the orignal array order again
console.log("orignal array reversed:", countriesToVisit.reverse());
