// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
 
let userName = ["saima","rehan", "admin", "abbas", "ayesha",];

//using forEach loop on array
userName.forEach(firstUser =>{
    //• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if(firstUser ==="admin"){
        console.log(`hello ${firstUser}, would you like to see a status report?`)

    } 
    //• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else{
        console.log(`hello ${firstUser}, thankyou logging in again.`)
    }
})