import { mergerSort } from "../mergeSort/mergeSort.js";
//every point is a node in tree remember
//use the node to do anything
//At every node you must answer two questions:
//Is this where I act?recursion on that node so to go lower or perform action
//always start from base case then recur down 
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
        let current = root;
        while(current !== null) {
            if(value === current.data) {
                return true;
            }
            if(value<current.data) {
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }
    function insert(value) {
        function search(node){
            if(value<node.data) {
                if(node.left === null) {
                    return node.left = new Node(value);
                }else {
                    search(node.left);
                }
            }else {
                if(node.right === null) {
                    return node.right = new Node(value);
                }else{
                    search(node.right);
                }
            }
        }
        if(root  === null) {
            root = new Node(value);
        }else{
            search(root);
        }
    }
    function deleteItem(value) {
        function inOrderSuccessor(node) {
            if (!node) return null;
            let current = node;
        while (current.left) {
            current = current.left;
        }
        let successor = current;
        return successor;
        }
        function search(nodes){
            if (nodes === null) return;
            if(value<nodes.data) {
                if(nodes.left&&nodes.left.data === value) {
                    if(nodes.left.left === null && nodes.left.right === null){
                        return nodes.left = null;
                    }
                    if(nodes.left.left!==null && nodes.left.right!==null){
                        let successor =  inOrderSuccessor(nodes.left.right);
                        let temp = nodes.left.data;
                        nodes.left.data = successor.data;
                        successor.data = temp;         
                        return;         
                    }
                    if(nodes.left.left !== null && nodes.left.right === null){
                        nodes.left = nodes.left.left;
                        return;
                    }else {
                        nodes.left = nodes.left.right;
                        return; 
                    }
                } else {
                    search(nodes.left);
                }
            }else{
                if(nodes.right&&nodes.right.data===value) {
                    if(nodes.right.left === null && nodes.right.right === null){
                        return nodes.right = null;
                    }
                    if(nodes.right.right!==null && nodes.right.left !== null){
                        let successor =  inOrderSuccessor(nodes.right.right);
                        let temp = nodes.right.data;
                        nodes.right.data = successor.data;
                        successor.data = temp; 
                        return;                 
                    }
                    if(nodes.right.left === null && nodes.right.right !== null) {
                        nodes.right = nodes.right.right;
                        return; 
                    }else {
                        nodes.right = nodes.right.left;
                        return;
                    }
                }else{
                    search(nodes.right);
                }                
            }
        }
        if(root.data === value) {
            if(root.left === null && root.right === null) {
                root.data = null;
                root.left = null;
                root.right = null;
                return;
            }
        }else {
            search(root);
        }
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