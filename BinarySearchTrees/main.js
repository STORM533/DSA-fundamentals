import { Tree } from "./BST.js";
const test = Tree([1,5,67,89,56,43,23,99,12,76,33,8,69,67,19]);
test.prettyPrint(test.root);
console.log(test.isBalanced());
test.preOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");
test.postOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");
test.levelOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");

test.inOrderForEach(value => {
    console.log(value);
});
test.insert(112);
test.insert(212);
test.insert(511);
test.insert(445);
test.insert(678);
test.insert(987);
test.insert(111);
console.log("");
console.log("");
console.log("");
test.prettyPrint(test.root);
console.log(test.isBalanced());
test.rebalance();
console.log("");
console.log("");
console.log("");
test.prettyPrint(test.root);
console.log(test.isBalanced());
test.preOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");
test.postOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");
test.levelOrderForEach(value =>{
    console.log(value);
});
console.log("");
console.log("");
console.log("");

test.inOrderForEach(value => {
    console.log(value);
});
//pretty print is just a function that [prints] 
//it does not build the tree [the root which calls buildTree does building]
//thats why we need to return [root]