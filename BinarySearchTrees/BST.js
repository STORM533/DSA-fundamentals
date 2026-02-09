import { mergerSort } from "../mergeSort/mergeSort.js";
class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right  = null;
    }
}
function Tree(arr) {
    const array = sort(arr);
    const root = buildTree(array);
    function sort(arr) {
        const array = mergerSort(arr);
        for(let i = array.length -1;i>0;i--) {
            if(array[i] === array[i-1]) {
                array.splice(i,1);
            }
        }
        return array;
    }
    function buildTree(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        }
        const mid = Math.floor(arr.length / 2)
        const node = new Node(arr[mid]);
        node.left = buildTree(arr.slice(0,mid));//recursively build left
        node.right = buildTree(arr.slice(mid + 1));//then right
        return node;//then return to root ;
    }
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null || node === undefined) {
            return;
        }

        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
    function includes(value) {

    }
    function insert(value) {

    }
    function deleteItem(value) {

    }
    return {
        root,
        prettyPrint,
        deleteItem,
        includes,
        insert,
    }
}

export {Tree};