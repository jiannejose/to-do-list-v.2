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

  undoingDoneTask();

  editingTask();

  savingTask();
}
/* Rebinding Buttons End */


/* Add Task Start */
let addTaskButton = document.getElementById('addButton');
let incompleteTasksList = document.getElementById('incompleteTasks');

addTaskButton.addEventListener('click', addTask);

function addTask(e) {
  e.preventDefault();

  if(inputTask.value == '') {
    alert('Hi! Please enter a task name.');
  } else {
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
  } 

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
  let taskName = grandparentElement.querySelector('h4').innerHTML;

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

  grandparentElement.remove();

  rebindButtons();
}
/* Task Done End */


/* Undo Task Start */
function undoingDoneTask() {
  let undoButtons = Array.from(document.getElementsByClassName('undo'));

  undoButtons.forEach((undoButton) => {
    undoButton.addEventListener('click', undoDoneTask);
  });
}

function undoDoneTask() {
  let grandparentElement = this.parentElement.parentElement;
  let taskName = grandparentElement.querySelector('h4').innerHTML;

  incompleteTasksList.innerHTML += `
  <li>
      <h4>${taskName}</h4>
      
      <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          <button class="done">Done</button>
      </div>
  </li> 
  `;

  grandparentElement.remove();

  rebindButtons();
}
/* Undo Task End */


/* Edit Name Start */ 
function editingTask() {
  let editTaskButtons = Array.from(document.getElementsByClassName('edit'));

  editTaskButtons.forEach((editTaskButton) => {
    editTaskButton.addEventListener('click', editTask);
  });
}

function editTask(e) {
  e.preventDefault();

  let grandparentElement = this.parentElement.parentElement;
  let taskName = grandparentElement.querySelector('h4').innerHTML;
  let grandparentElementH4 = grandparentElement.querySelector('h4');
  
  grandparentElementH4.remove();

  grandparentElement.innerHTML = `
  <form class="rename-task__container">
      <input type="text" name="rename-task" value="${taskName}" autocomplete="off" />
      <button type="submit" class="save">Save</button>
  </form>
  `;

  let taskRenameInput = grandparentElement.querySelector('input');
  taskRenameInput.focus();

  moveCursorToEnd(taskRenameInput);

  rebindButtons();
}
/* Edit Name End */

/* Move Cursor to End */
 function moveCursorToEnd(el) {
	if (typeof el.selectionStart == "number") {
		el.selectionStart = el.selectionEnd = el.value.length;
	}
}
/* Move Cursor to End */


/* Save Task Start */
function savingTask() {
  let saveTaskButtons = Array.from(document.getElementsByClassName('save'));
  
  saveTaskButtons.forEach((saveTaskButton) => {
    saveTaskButton.addEventListener('click', saveTask);
  });
}

function saveTask(e) {  
  e.preventDefault();

  let grandparentElement = this.parentElement.parentElement;
  let newTaskName = grandparentElement.querySelector('input').value;

  if(newTaskName == '') {
    alert('Hi! Please enter the task\'s new name.');
  } else {
    grandparentElement.innerHTML = `
      <h4>${newTaskName}</h4>
      
      <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          <button class="done">Done</button>
      </div> 
      `;
  }
    
  rebindButtons();
}
/* Save Task End */