let list = new LinkedList();

// add functions
function addHeadButton() {
    let data = document.getElementById('addHead-data');
    list.addHead(data.value);
    list.printList();
    data.value = '';
}

function addBeforeButton() {
    let node = document.getElementById('addBefore-node');
    let data = document.getElementById('addBefore-data');
    list.addBefore(node.value, data.value);
    list.printList();
    node.value = '';
    data.value = '';
}

function addAfterButton() {
    let node = document.getElementById('addAfter-node');
    let data = document.getElementById('addAfter-data');
    list.addAfter(node.value, data.value);
    list.printList();
    node.value = '';
    data.value = '';
}

function addTailButton() {
    let data = document.getElementById('addTail-data');
    list.addTail(data.value);
    list.printList();
    data.value = '';
}

// remove functions
function removeHeadButton() {
    list.removeHead();
    list.printList();
}

function removeTailButton() {
    list.removeTail();
    list.printList();
}

function removeNodeButton() {
    let node = document.getElementById('removeNode-node');
    list.removeNode(node.value);
    list.printList();
    node.value = '';
}