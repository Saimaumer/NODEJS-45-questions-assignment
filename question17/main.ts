// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.


let guestList17 : string[] = ['aliya','uzma','bisma','kinza','fareed','umair','Ali'];
console.log ("Sorry! I can only invite two people");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList17.length > 2) {
let removeGuest  = guestList17.pop();
  console.log(`Sorry ${removeGuest}, I can not invite you to my dinner`);
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

guestList17.forEach (guest => {
    console.log (`Dear ${guest}, You are still invited`)
});

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList17.splice(0 , guestList17.length);
console.log (guestList17);
