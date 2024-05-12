// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guestList16 : string[] = ["kinza" , "rehan" , "imran" , "sahar"];
console.log ("Hey! I have found a bigger space on my dinner table")



// • Add one new guest to the beginning of your array.
guestList16.unshift("muhammad");

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guestList16.splice(2 , 0 , "umair");
guestList16.push("bisma");
guestList16.forEach(guestList16 => {
    console.log(`Dear ${guestList16}, would you like to join me for an weekend dinner`)
});