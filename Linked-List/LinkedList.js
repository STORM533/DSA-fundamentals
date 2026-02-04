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
    
    return {
        heads,
        append,
        prepend,
        size,
        tail,
        //at,
       // pop,
       // contains,
       // findIndex,
      //  toString,
      //  insertAt,
      //  removeAt,
    };
}
class node {//this is used to create nodes and related actions
    constructor(value = null) {
        this.value = value;//This is the value for node data
        this.nextNode = null; //This is the reference for the next node
    }
}
// example uses class syntax - adjust as necessary
const list = new linkedlist();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.size();
