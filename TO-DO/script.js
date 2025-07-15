const taskList = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const datetime = document.getElementById("taskDateTime");

  const taskText = input.value.trim();
  const taskTime = datetime.value;

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";

  const textDiv = document.createElement("div");
  textDiv.className = "text";
  textDiv.innerHTML = `<strong>${taskText}</strong>${taskTime ? `<br><small>${new Date(taskTime).toLocaleString()}</small>` : ""}`;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done";
  doneBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(li, taskText, taskTime);

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete";
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(textDiv);
  li.appendChild(doneBtn);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);

  input.value = "";
  datetime.value = "";
}

function editTask(taskElement, oldText, oldTime) {
  const newText = prompt("Edit task:", oldText);
  const newTime = prompt("Edit date & time (YYYY-MM-DD HH:MM):", oldTime?.slice(0, 16));

  if (newText !== null && newText.trim() !== "") {
    const textDiv = taskElement.querySelector(".text");
    const formattedTime = newTime ? `<br><small>${new Date(newTime).toLocaleString()}</small>` : "";
    textDiv.innerHTML = `<strong>${newText}</strong>${formattedTime}`;
  }
}
