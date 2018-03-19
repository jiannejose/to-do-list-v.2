let inputTask = document.getElementById('taskInput');

/* Cursor Focus Start */
cursorFocus();

function cursorFocus() {
  inputTask.focus();
}
/* Cursor Focus End */


/* Clear Input Field Start */
  function ClearInputTaskField() {
    inputTask.value = '';
  }
/* Clear Input Field End */


/* Rebinding Buttons Start */
function rebindButtons() {
  deletingTask();

  whenTaskDone();
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

  ClearInputTaskField();

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


/* Task Done Start */
function whenTaskDone() {
  let taskDoneButtons = Array.from(document.getElementsByClassName('done'));

  taskDoneButtons.forEach((taskDoneButton) => {
    taskDoneButton.addEventListener('click', taskDone);
  });
}

function taskDone() {
  let grandparentElement = this.parentElement.parentElement;
  let completedTaskField = document.getElementById('completeTasks');
  let taskName = grandparentElement.querySelector('h4').outerHTML;

  completedTaskField.innerHTML += `
    <li>
        <h4>${taskName}</h4>
        
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <button class="undo">Undo</button>
        </div>
    </li>
  `;
}
/* Task Done End */