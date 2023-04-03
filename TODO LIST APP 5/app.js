// Selectors
const taskInput = document.querySelector("#task-input");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const allBtn = document.querySelector("#all-btn");
const completedBtn = document.querySelector("#completed-btn");
const incompleteBtn = document.querySelector("#incomplete-btn");

// Event Listeners
taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", completeTask);
allBtn.addEventListener("click", filterAll);
completedBtn.addEventListener("click", filterCompleted);
incompleteBtn.addEventListener("click", filterIncomplete);

// Functions
function addTask(event) {
  event.preventDefault();

  // Create a new li element
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");

  // Create a new span element for delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "&times;";
  deleteBtn.classList.add("delete-btn");

  // Append new task and delete button to task list
  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

function deleteTask(event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
}

function completeTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

function filterAll() {
  taskList.style.display = "block";
}

function filterCompleted() {
  const tasks = taskList.childNodes;
  tasks.forEach(function(task) {
    if (task.classList && task.classList.contains("completed")) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function filterIncomplete() {
  const tasks = taskList.childNodes;
  tasks.forEach(function(task) {
    if (task.classList && !task.classList.contains("completed")) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
