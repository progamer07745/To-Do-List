const Btn = document.getElementById("addBtn");

const taskInput = document.getElementById("task");

const taskList = document.getElementById("taskList");

Btn.addEventListener("click", function () {
  console.log("Button clicked!");
  const value = taskInput.value;

  if (value === "") {
    alert("Please enter a task!");
    return;
}

const list = document.createElement("li");
list.textContent = value;

taskList.appendChild(list)

taskInput.value = "";
})



//   adding the task to a list :

