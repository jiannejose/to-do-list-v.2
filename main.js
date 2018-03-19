let inputTask = document.getElementById('taskInput');

/* Cursor Focus Start */
cursorFocus();

function cursorFocus() {
  inputTask.focus();
}
/* Cursor Focus End */


/* Rebinding Buttons Start */
function rebindButtons() {
  deletingTask();
}

/* Rebinding Buttons End */


/* Add Task Start */
let addTaskButton = document.getElementById('addButton');
let incompleteTasksList = document.getElementById('incompleteTasks');

addTaskButton.addEventListener('click', addTask);

function addTask(e) {
  e.preventDefault();
  
  incompleteTasksList.innerHTML+= `
   <li>
      <h4>${inputTask.value}</h4>
      
      <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          <button class="done">Done</button>
      </div>
  </li> 
  `; 

  rebindButtons();
}
/* Add Task End */


/* Delete Task Start */
function deletingTask() {
  let deleteTaskButtons = Array.from(document.getElementsByClassName('delete'));

  deleteTaskButtons.forEach((deleteTaskButton) => {
    deleteTaskButton.addEventListener('click', deleteTask);
  });
}

function deleteTask() {
  let grandparentElement = this.parentElement.parentElement;
  
  grandparentElement.remove();
}
/* Delete Task End */