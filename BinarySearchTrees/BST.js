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
    function levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }
        if (!this.root) return;
        const queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
        const current = queue.shift();
        callback(current.data); // pass value, not node
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        }
    }
    function inOrderForEach(callback) {
        if(typeof callback !== "function"){
            throw new Error("callback must be provided");
        }
        function traverse(node) {
            if(!node) return;
            traverse(node.left);
            callback(node.data);
            traverse(node.right);
        }
        traverse(this.root);
    }
    function preOrderForEach(callback) {
        if(typeof callback !== "function"){
            throw new Error("callback must be provided");
        }
        function traverse(node) {
            if(!node) return;
            callback(node.data);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
    }
    function postOrderForEach(callback) {
        if(typeof callback !== "function"){
            throw new Error("callback must be provided");
        }
        function traverse(node) {
            if(!node) return;
            traverse(node.left);
            traverse(node.right);
            callback(node.data);
            
        }
        traverse(this.root);
    }
    function height(value) {
        function findNode(node,value){
            if(!node) return null;
            if(node.data === value) return node;
            if(value<node.data){
                return findNode(node.left,value);
            }else if(value>node.data) {
                return findNode(node.right,value);
            }
        }
        const target = findNode(this.root,value);
            if(!target) return undefined;
        function computeHeight(node){
            if(!node)return -1;
            const leftHeight = computeHeight(node.left);
            const rightHeight = computeHeight(node.right);
            return Math.max(leftHeight,rightHeight)+1;
        }
        return computeHeight(target);
    }
    function depth(value) {
        function findDepth(node,value,cdepth){
            if(!node) return undefined;
            if(node.data === value){
                return cdepth;
            }
            if(value<node.depth){
                return findDepth(node.left,value,cdepth+1);
            }else{
                return findDepth(node.right,value,cdepth+1);
            }
        }
        return findDepth(this.root,value,0);
    }
    function isBalanced() {
        function check(node) {
            if (!node) return 0; 
                const leftHeight = check(node.left);
            if (leftHeight === -1) return -1; 
                const rightHeight = check(node.right);
            if (rightHeight === -1) return -1;
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return check(this.root) !== -1;
    }
    function rebalance() {
        const values = [];

        function inorder(node) {
            if (!node) return;
                inorder(node.left);
                values.push(node.data);
                inorder(node.right);
            }
        inorder(this.root);
        this.root = buildTree(values);
    }
    return {
        root,
        prettyPrint,
        deleteItem,
        includes,
        insert,
        height,
        depth,
        isBalanced,
        rebalance,
        levelOrderForEach,
        postOrderForEach,
        preOrderForEach,
        inOrderForEach,
    }
}

export {Tree};