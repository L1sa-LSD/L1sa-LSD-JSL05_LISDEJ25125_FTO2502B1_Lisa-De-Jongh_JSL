// Wait for the page to fully load
window.onload = function () {
  loadTasks();
};

// Get button and modal elements
const addTaskBtn = document.getElementById("adding");
const addTaskModal = document.getElementById("add-task-modal");
const addTaskForm = document.getElementById("add-task-form");
const closeModalBtns = document.querySelectorAll(".close-btn");

// Show the modal when Add Task button is clicked
addTaskBtn.onclick = function () {
  addTaskModal.showModal();
};

// Close modal on close button click
closeModalBtns.forEach(btn => {
  btn.onclick = function () {
    addTaskModal.close();
  };
});

// Handle form submit
addTaskForm.onsubmit = function (e) {
  e.preventDefault();

  const title = addTaskForm.elements["title"].value.trim();
  const description = addTaskForm.elements["description"] ? addTaskForm.elements["description"].value.trim() : "";
  const status = addTaskForm.elements["status"].value;

  if (!title || !status) return;

  const newTask = { title, description, status };
  saveTask(newTask);
  addTaskForm.reset();
  addTaskModal.close();
};

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  // Instead of calling loadTasks(), directly add the new task to the screen
  addTaskToScreen(task);
}

function addTaskToScreen(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div bg-white p-3 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow";
  
  const titleElement = document.createElement("h3");
  titleElement.className = "font-medium text-gray-900";
  titleElement.textContent = task.title;
  taskDiv.appendChild(titleElement);
  
  if (task.description) {
    const descElement = document.createElement("p");
    descElement.className = "text-sm text-gray-600 mt-1";
    descElement.textContent = task.description;
    taskDiv.appendChild(descElement);
  }

  const column = document.querySelector(
    `.column-div[data-status='${task.status}'] .tasks-container`
  );

  if (column) {
    column.appendChild(taskDiv);
  }
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Only clear columns if they're empty (initial load)
  const columns = document.querySelectorAll(".tasks-container");
  const hasExistingTasks = Array.from(columns).some(col => col.children.length > 0);
  
  if (!hasExistingTasks) {
    columns.forEach(col => col.innerHTML = "");
    
    tasks.forEach(task => {
      addTaskToScreen(task);
    });
  }
}
