"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`creating a ${size} shirt written on ${printMessage}`);
}
//calling function with default parameter
make_shirt();
make_shirt("medium");
make_shirt("small", "I Love Javascript");
