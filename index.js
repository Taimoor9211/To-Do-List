function AddTask() {
  const newtask = document.createElement("li");
  const tasklist = document.getElementById("tasklist");
  tasklist.appendChild(newtask);
  newtask.textContent = document.getElementById("input-task").value;
  document.getElementById("input-task").value = "";
  deleteTask(newtask);
}
function deleteTask(newtask) {
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  newtask.appendChild(deletebtn);
  deletebtn.style.backgroundColor = "red";
  deletebtn.onclick = function () {
    newtask.remove();
  };
}
