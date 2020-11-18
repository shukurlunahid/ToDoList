var input = document.querySelector('#toDoInput');
var addBtn = document.querySelector('#add');
var toDo = document.querySelector('.to-do-list');
var completedList = document.querySelector('.completed-list');
var toDoItem = document.querySelector('.item');
var item = document.createElement('div');
var buttons = document.createElement('div')
var editBtn = document.createElement('i');
var trashBtn = document.createElement('i');
var checkBox = document.createElement('INPUT');

var id = 0


// create item template
function createToDoItem(itemId){
    let itemDiv = document.body.appendChild(item);
    itemDiv.setAttribute('class', 'item');
    itemDiv.setAttribute('id', itemId);
    let checkBoxIcon = itemDiv.appendChild(checkBox);
    checkBoxIcon.setAttribute('type', 'checkbox');
    checkBoxIcon.setAttribute('id', itemId);
    itemDiv.textContent = input.value;
    btnsDiv = itemDiv.appendChild(buttons);
    btnsDiv.setAttribute('class', 'buttons');
    let editIcon = btnsDiv.appendChild(editBtn);  
    editIcon.setAttribute('class', 'fa fa-edit');
    editIcon.setAttribute('id', itemId);
    let trashIcon = btnsDiv.appendChild(trashBtn);
    trashIcon.setAttribute('class', 'fa fa-trash');
    trashIcon.setAttribute('id', itemId);
    itemDiv.insertBefore(checkBoxIcon, itemDiv.firstChild);
    toDo.appendChild(itemDiv);
}
function add(){
    event.preventDefault();
    if(input.value != ''){
        id++;
        createToDoItem(id);
        input.value = '';
    }
}
function addToCompletedList(item){
    // let item = document.getElementById(itemId);
    item.style.textDecoration = 'line-through';
    item.style.backgroundColor = 'rgb(93 138 35)';
    completedList.appendChild(item);
}
function deleteItemFromToDo(itemId){
    let itemForDelete = document.getElementById(itemId);
    itemForDelete.remove();
}
function complete(itemId){
    let itemForComplete = document.getElementById(itemId);
    console.log(itemForComplete);
    addToCompletedList(itemForComplete)
}


checkBox.addEventListener('click', function(ev){
    complete(ev.target.id);
});
trashBtn.addEventListener('click', function(ev){
    deleteItemFromToDo(ev.target.id);
    console.log(ev.target.id);
});
addBtn.addEventListener('click', add);
