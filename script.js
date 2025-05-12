const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const finishedList = document.getElementById("finishedList");
const bgUpload = document.getElementById("bgUpload");
const themeSwitch = document.getElementById("themeSwitch");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <div class="left">
      <input type="checkbox" onchange="finishTask(this)">
      <span>${taskText}</span>
    </div>
    <div class="right">
      <button class="delete-btn" onclick="deleteTask(this)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `;

  taskList.appendChild(task);
  taskInput.value = "";
}

function finishTask(checkbox) {
  const task = checkbox.closest(".task");
  checkbox.disabled = true;
  task.querySelector("span").style.textDecoration = "line-through";
  finishedList.appendChild(task);
}

function deleteTask(button) {
  const task = button.closest(".task");
  task.remove();
}

bgUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.body.style.backgroundImage = `url('${event.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
});

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});