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
    function deleteItem(node,value) {
        function inOrderSuccessor(node) {
            let current = node;
            while (current.left) {
                current = current.left;
            }
            return current;
        }
        if(!node) return null;
        if(value<node.data) {
            node.left = deleteItem(node.left,value);
        }else if (value>node.data){
            node.right = deleteItem(node.right,value);
        }else {
            if(!node.left&&!node.right) return null;
            if(!node.left)return node.right;
            if(!node.right)return node.left;
            let successor = inOrderSuccessor(node.right);
            node.data = successor.data;
            node.right = deleteItem(node.right,successor.data);
        }
        return node;
    }
    function levelOrderForEach(cb) {
        
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