class LinkedList {
    constructor() {
        this.head = null;
        
        // variables for printList to correctly
        // display the correct message
        this.newestNode = null;
        this.addToList = false;
        this.addToHead = false;
    }
    
    // add node to head (beginning) of list
    addHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        
        // if there is a head, set new head's
        // next node to current head
        if (currentHead) {
            this.head.setNext(currentHead);
        }
        
        // updating values for printList 
        this.newestNode = data;
        this.addToList = true;
        this.addToHead = true;
    }
    
    // add node to tail (end) of list
    addTail(data) {
        let tail = this.head;
        
        // if there is no head (empty list), create a 
        // new node and set it as the head
        if (!tail) {
            this.head = new Node(data);
        } else {
            // traverse to end of list 
            while (tail.getNext() !== null) {
                tail = tail.getNext();
            }
            // create new tail add end of list
            tail.setNext(new Node(data));
        }
        
        // updating values for printList 
        this.newestNode = data;
        this.addToList = true;
        this.addToHead = false;
    }
    
    // add new node before a specified exsisting 
    // node in the list
    addBefore(node, data) {
        let currentNode = this.head;
        
        // if list is empty or if the first node is the 
        // specified node, call addHead function
        if (currentNode === null || currentNode.data === node) {
            this.addHead(data);
            return;
        }
        
        // traverse through list until the specified
        // node is found. When found, add insert new
        // node and update next properties of the 
        // surrounding nodes
        while (currentNode !== null) {
            let nextNode = currentNode.getNext();
            if (nextNode.data === node) {
                let newNode = new Node(data);
                newNode.setNext(nextNode);
                currentNode.setNext(newNode);
                break;
            }
            currentNode = currentNode.getNext();
        }  
    }
    
    // add new node after a specified exsisting 
    // node in the list
    addAfter(node, data) {
        let currentNode = this.head;
        
        // if list is empty, call addHead function
        if (currentNode === null) {
            addHead(data);
        }
        
        // traverse list starting at the head
        while (currentNode !== null) {
            if (currentNode.data === node) {
                // if the specified node is the tail,
                // call addTail function else insert
                // new node and update next properties
                // for the surrounding nodes
                if (currentNode.getNext() === null) {
                    this.addTail(data);
                } else {
                    let newNode = new Node(data);
                    newNode.setNext(currentNode.getNext());
                    currentNode.setNext(newNode);
                    break;
                }
            }
            currentNode = currentNode.getNext();
        }
    }
   
    // remove current head of list
    removeHead() {
        const removedHead = this.head;
        // if list is empty, return
        if (!removedHead) {
            return;
        }
        // set current head's next node as new head
        this.head = removedHead.getNext();
        
        // updating values for printList 
        this.newestNode = removedHead;
        this.addToList = false;

    }
    
    removeTail() {
        let currentNode = this.head;
        
        if(!currentNode) {
            return;
        }
        
        if (currentNode.getNext() === null) {
            this.removeHead();
            return;
        }
        
        while (currentNode !== null) {
            let nextNode = currentNode.getNext();
            if (nextNode.getNext() === null) {
                currentNode.setNext(null);
                break;
            }
            currentNode = currentNode.getNext();
        }  
    }
    
    removeNode(node) {
        let currentNode = this.head;
        
        // if list is empty or if the first node is the 
        // specified node, call addHead function
        if (currentNode === null || currentNode.data === node) {
            this.removeHead();
            return;
        }
        
        while (currentNode !== null) {
            let nextNode = currentNode.getNext();
            if (nextNode.data === node) {
                currentNode.setNext(nextNode.getNext());
                break;
            }
            currentNode = currentNode.getNext();
        }
        
    }
    
    // print the current state of the linked list
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNext();
        }
        output += '<tail>';
        console.log(output);
    }
}
