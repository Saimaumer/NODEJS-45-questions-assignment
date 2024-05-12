//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guestList :string[]=["ayesha", "ahmed", "ali"]
let removeGuest = guestList.pop()


//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(`${removeGuest} , 'have an urgent piece of work so i would like to invite some one else'`);

let addGuest = guestList.push("umair");

 //• Print a second set of invitation messages, one for each person who is still in your list.
 guestList.forEach(guestList => {
    console.log(`Dear ${guestList} ,You are invited to join us for a delightful dinner`)
 });