"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(`You selected a ${size} size shirt and its very comfortable to wear in ${message}`);
}
make_shirt("small", "summer season");
make_shirt("large", "rainy season");
make_shirt("medium", "winter season");
