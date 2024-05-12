//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magician(magicinas:string[]){
magicinas.forEach(name => console.log(name));
}

let magicianNames:string[] =["ali", "saif","rehan"]

show_magician(magicianNames);