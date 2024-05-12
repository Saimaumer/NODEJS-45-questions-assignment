//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magician(magicians:string[]){
    magicians.forEach(name =>console.log(name));

}
//functionto make magicians great through .map()method
function make_great(magicians:string[]){
    return magicians.map(name=> `The Great Magicians ${name}`);
}
 
let magicians_name =["ali", "rehan","meer"];

//copy of orignal array through slice method
let copy_magician =magicians_name.slice();

//modify the copied array to include  THE GREAT with their names
 let copyOfMagicians = make_great(copy_magician);

 //show both arrays
 show_magician(magicians_name);
 show_magician(copyOfMagicians);