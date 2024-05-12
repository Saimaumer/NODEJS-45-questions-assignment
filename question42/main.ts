//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through .map() method to modifi our array
function make_great(magicians:string[]){
    return magicians.map(names=> `The Great magicians ${names}`);

}
let magiciansName =["ali","rehan","sikandar"];
let theGreatMagicians= make_great(magiciansName);
//console.log(theGreatMagicians);
show_magicians(theGreatMagicians);


