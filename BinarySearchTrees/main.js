import { Tree } from "./BST.js";
const test = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324,54,2,789,68,69]);
test.prettyPrint(test.root);
console.log("");
console.log("");
console.log("");
console.log("")
test.deleteItem(5);
console.log("");
console.log("");
console.log("");
console.log("");
test.prettyPrint(test.root);
//pretty print is just a function that [prints] 
//it does not build the tree [the root which calls buildTree does building]
//thats why we need to return [root]