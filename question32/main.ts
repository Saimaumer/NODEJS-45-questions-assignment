//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.


// Make a list of five or more usernames called current_users.
let currentUser = ["saima", "ali", "ayesha","sana","farhan", "areeba"]


// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUser = ["Ayesha", "usama", "kainat","abbas","umair","Sana"]

// Loop through the new_users to check for usernames availiblity
newUser.forEach(newOneUser =>{
    let ourCondition =currentUser.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase() )
    if(ourCondition){
         console.log(`sorry!${newOneUser} is already taken!`)
    } else{
        console.log(`yes,${newOneUser} is available`)
    }
});

