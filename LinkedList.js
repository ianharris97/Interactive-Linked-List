class LinkedList {
    constructor() {
        this.head = null;
        this.listContainer = document.getElementById('list-container');
        this.message = document.getElementById('modify-list-message');
    }
    
    // add node to head (beginning) of list
    addHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        
        // if there is a head, set new head's next node to current head
        if (currentHead) {
            this.head.setNext(currentHead);
        }
        
        newHead.setColor(this.chooseColor());
        this.printMessage('addHead', data);
    }
    
    // add node to tail (end) of list
    addTail(data) {
        let tail = this.head;
        
        // if there is no head (empty list), create a new node and set
        // it as the head
        if (!tail) {
            let newNode = new Node(data);
            newNode.setColor(this.chooseColor());
            this.head = newNode;
        } else {
            // traverse to end of list 
            while (tail.getNext() !== null) {
                tail = tail.getNext();
            }
            // create new tail add end of list
            let newNode = new Node(data);
            newNode.setColor(this.chooseColor());
            tail.setNext(newNode);
        }
        this.printMessage('addTail', data);
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
                newNode.setColor(this.chooseColor());
                break;
            }
            currentNode = currentNode.getNext();
        }  
        this.printMessage('addBefore', data, node);
    }
    
    // add new node after a specified exsisting 
    // node in the list
    addAfter(node, data) {
        let currentNode = this.head;
        
        // if list is empty, call addHead function
        if (currentNode === null) {
            this.addHead(data);
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
                    newNode.setColor(this.chooseColor());
                    break;
                }
            }
            currentNode = currentNode.getNext();
        }
        this.printMessage('addAfter', data, node);
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
        
        this.printMessage('removeHead', removedHead);

    }
    
    // remove current tail of list
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
        this.printMessage('removeTail', currentNode);
    }
    
    removeNode(data) {
        let currentNode = this.head;
        
        if (!currentNode) {
            return;
        }
        
        // if the first node is the specified 
        // node, call addHead function
        if (currentNode.data === data) {
            this.removeHead();
            return;
        }
        
        while (currentNode !== null) {
            let nextNode = currentNode.getNext();
            
            if (nextNode.data === data) {
                currentNode.setNext(nextNode.getNext());
            }
            currentNode = currentNode.getNext();
        }
        
    }
    
    chooseColor() {
        let colors = ['#E55F5D', '#FA8455', '#FFC670', '#51CD99', '#7FD6D8', '#8E97DA', '#E3AEC9'];
        let color = colors[Math.round(Math.random() * 6)];
        
        return color;
    }
    
    addArrow() {
        let arrowDiv = document.createElement('div');
        let arrow = document.createElement('p');
        arrowDiv.classList.add('arrow-container');
        arrow.classList.add('arrow');
                
        arrow.innerHTML = '->';
        arrowDiv.appendChild(arrow);
        this.listContainer.appendChild(arrowDiv);
    }
    
    addNull() {
        let nullDiv = document.createElement('div');
        let nullData = document.createElement('h3');
        nullDiv.classList.add('null');
        nullData.innerHTML = 'null';
        nullDiv.appendChild(nullData);
        this.listContainer.appendChild(nullDiv);
    }
    
    printMessage(change, data, node) {
        switch (change) {
            case 'addHead': 
                this.message.innerHTML = `${data} was added to the head of the list`;
                break;
            case 'addBefore':
                this.message.innerHTML = `${data} was added before ${node}`;
                break;
            case 'addAfter':
                this.message.innerHTML = `${data} was added after ${node}`;
                break;
            case 'addTail':
                this.message.innerHTML = `${data} was added to the tail of the list`;
                break;
            case 'removeHead':
                this.message.innerHTML = `the head was removed from the list`;
                break;
            case 'removeTail':
                this.message.innerHTML = `the tail was removed from the list`;
                break;
            case 'removeNode':
                this.message.innerHTML = `${data} was removed from the list`;
                break;
        }
    }
    
    // print the current state of the linked list
    printList() {
        
        while (this.listContainer.hasChildNodes()) {
            this.listContainer.removeChild(this.listContainer.firstChild);
        }
        
        let currentNode = this.head;
        while (currentNode !== null) {
            let nodeDiv = document.createElement('div');
            let nodeData = document.createElement('h3');
            nodeDiv.classList.add('node-container');
            nodeData.classList.add('node-data');
            nodeDiv.style.borderColor = currentNode.getColor();
            
            nodeData.innerHTML = currentNode.data;
            nodeDiv.appendChild(nodeData);
            this.listContainer.appendChild(nodeDiv);
            
            this.addArrow();
            
            currentNode = currentNode.getNext();
        }
        
        this.addNull();
    }
}
