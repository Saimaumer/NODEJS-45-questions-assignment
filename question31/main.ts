//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


let userNames =["saima", "ali", "ayesha", "admin", "sana"]

//If the list is empty, print the message We need to find some users!
if (userNames.length === 0){
    console.log("we need to find some users")

}else{
    userNames.forEach(firstUser =>{
        if(firstUser === "admin"){
            console.log(`hello ${firstUser}, would you like to see a ststus report?`)
        }else{
            console.log(`hello ${firstUser}, Thankyou for logging again`)
        }
    })
};

// Remove all of the usernames from your array, and make sure the correct message is printed.
 
userNames =[]
if (userNames.length === 0){
    console.log("we need to find some users")

}
/* else{
    userNames.forEach(firstUser =>{
        if(firstUser === "admin"){
            console.log(`hello ${firstUser}, would you like to see a ststus report?`)
        }else{
            console.log(`hello ${firstUser}, Thankyou for logging again`)
        }
    })
};*/