function AddElement () {
    let List = document.getElementById("List");
    let li = document.createElement("li");
    li.className = ("List-item");
    li.textContent = ("Новый элемент 1") ;
    List.appendChild(li);
}

function AddToStart () {
    let list = document.getElementById("List");
    let li = document.createElement("li");
    li.className = ("List-item");
    li.textContent = ("Новый элемент 2") ;
    list.insertBefore(li,list.firstChild);
}

function DeleteFirst () {
    let list = document.getElementById("List");
    if (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function DeleteLast () {
    let list = document.getElementById("List");
    list.removeChild(list.lastChild)
}

function Selfdestruct () {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "Black";
}