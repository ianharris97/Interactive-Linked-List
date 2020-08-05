// Node class for both linear and bilinear traversial
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
        this.color = '';
    }

    setNext(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
        } else {
        throw new Error('Invalid');
        }
    }

    setPrevious(node) {
      if (node instanceof Node || node === null) {
        this.previous = node;
        } else {
        throw new Error('Invalid');
        }
    }
    
    setColor(color) {
        this.color = color;
    }
    
    getColor() {
        return this.color;
    }

    getNext() {
        return this.next;
    }

    getPrevious() {
        return this.previous;
    }
}
