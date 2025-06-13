

const taskInput = document.getElementById("task-input");
const datetimeInput = document.getElementById("datetime-input");
const locationInput = document.getElementById("location-input");
const taskTableBody = document.querySelector('#task-table tbody');
const submitBtn = document.querySelector('#add-task-btn');

function addTask(taskInput, datetimeInput, locationInput){
  const task = taskInput.value.trim();
  const datetime = datetimeInput.value;
  const location = locationInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = document.createElement('tr');
  newTask.innerHTML = `
  <td> ${task} </td>
  <td> ${datetime} </td>
  <td> ${location} </td>
  <td><input type = "checkbox" /></td>
  <td><button class="delete-btn">Delete</button></td>`;
  taskTableBody.appendChild(newTask);

  newTask.querySelector(".delete-btn").addEventListener("click", () => {
  newTask.remove();
  });
}

submitBtn.addEventListener('click', () => {
  addTask(taskInput, datetimeInput, locationInput);
  taskInput.value = "";
  datetimeInput.value = "";
  locationInput.value = "";
  const noTaskMessage = document.querySelector(".no-task-message");
  if (noTaskMessage) noTaskMessage.style.display = "none";

  const successMsg = document.getElementById("success-message");
  successMsg.classList.remove("hidden");
  setTimeout(() => {
    successMsg.classList.add("hidden");
  }, 2000); 
})



