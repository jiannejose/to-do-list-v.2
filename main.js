let inputTask = document.getElementById('taskInput');

/* Cursor Focus Start */
cursorFocus();

function cursorFocus() {
  inputTask.focus();
}
/* Cursor Focus End */


/* Rebinding Buttons Start */
function rebindButtons() {
  
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
  
}

/* Add Task End */