function linkedlist () {
    let head = null;
    function heads() {
        return console.log(head);
    }
    function append(value) {
        const newNode  = new node(value);
        if (head === null) {
            head = newNode;
            return;
        }
        let current  = head;
        while (current.nextNode !== null) {//checks if current.nextNode is null
            current = current.nextNode;//if null this null makes current refrence to current
        }
        current.nextNode = newNode;//then we replace current which was refrenced with our node
    }
    function prepend(value) {
        const newNode = new node(value);
        if(head === null) {
            head = newNode;
        }else {
            newNode.nextNode = head;//this line means that we create the newNode and it refrences to head efficiently making the newNode the head
        }
    }
    function size() {
        let size = 1;
        if(head ===null) {
            console.log(size);
            return;
        }
        let current = head;
        while(current.nextNode !== null) {
            current = current.nextNode;
            size = size + 1;
        }
        return console.log(size);
    }
    function tail() {
        if (head === null) {
            return;
        }
        let current = head;
        while(current.nextNode !== null) {
            current = current.nextNode;
        }
        return console.log(current);
    }
    function at(index) {
        let size = 0;
        if (head === null) {
            return ;
        }
        let current = head; 
        while(index !== size) {
            current = current.nextNode;
            if (current.nextNode === null) {
                return console.log(current.nextNode);
            }
            size = size + 1;
        }
        return console.log(current);
    }
    function pop() {
        if (head === null){
            return;
        }else {
            console.log(head.value);
            head = head.nextNode;
        }
    }
    function contains(value) {
        if (head === null) {
            return ;
        }
        let current = head;
        while(current !== null) {
            if (current.value === value) {
                return console.log(true);
            }
            current = current.nextNode;
        }
        return console.log(false);
    }
    function findIndex(value) {
        let size = 0;
        if(head === null) {
            return;
        }
        let current = head;
        while(current !== null) {
            if (current.value === value) {
                return console.log( `Index : ${size}`);
            }
            current = current.nextNode;
            size = size + 1;
        }
        return console.log("-1");
    }
    function toString() {
    if (head === null) {
        return ;
    }

    let current = head;
    let result = "";

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
    }

    result += "null";
    return result;
}
    return {
        heads,
        append,
        prepend,
        size,
        tail,
        at,
       pop,
       contains,
       findIndex,
        toString,
    };
}
class node {//this is used to create nodes and related actions
    constructor(value = null) {
        this.value = value;//This is the value for node data
        this.nextNode = null; //This is the reference for the next node
    }
}
// example uses class syntax - adjust as necessary

export{linkedlist};