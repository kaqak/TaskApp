//Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

//Load all event listeners

function loadEventListeners(){
    //Add task event 
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e){
    if(taskInput.value == ""){
        alert('Add a task!');
    }

    //Create Li element 
    const li = document.createElement('li');
    //Add class
    li.className ='collection-item';
    //Create text-node and append to the Li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element 
    const link = document.createElement('a');

    //Add a class 

    link.className = 'delete-item secondary-content';
    //Add Icon Html
    link.innerHTML ='<i class=" fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul 
    taskList.appendChild(li);

    //Clear input

    taskInput.value ='';
    console.log(li);
    e.preventDefault();
 }