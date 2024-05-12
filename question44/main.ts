//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//use rest parameter by adding 3 dots its for adds multiple aurgument
function sandwich(...items:string[]){
      console.log("Making a sandwich with these ingridients: \n");

      items.forEach(singleItem =>console.log(singleItem));
      console.log("Now enjoys sandwich\n");

}

//calling function 3 times with different aurguments

sandwich("chicken", "mayonees", "cheese","ketchup","salad leaves");
sandwich("bread","egg","butter");
sandwich("bread", "egg","butter","cheese","chicken", "lettuce","tomato", "mayonese" ,"ketchup")