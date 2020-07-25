let list = new LinkedList();

function addHeadButton() {
    let data = document.getElementById('addHead').value;
    list.addHead(data);
    list.printList();
}