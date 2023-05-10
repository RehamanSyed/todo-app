let taskform = document.getElementById("getTaskListForm");
console.log(taskform);

taskform.addEventListener("submit", function (e) {
  e.preventDefault();
  let tasktitle = document.getElementById("tasktitle").value;
  let taskdesc = document.getElementById("taskdesc").value;
  console.log(tasktitle);
  console.log(taskdesc);

  const taskPayload = {
    title: tasktitle,
    desc: taskdesc,
  };
  localStorage.setItem("taskList", JSON.stringify(taskPayload));
});

// open Modal

function openModal() {
  let modal = document.getElementsByClassName("modal");
  console.log("clicked on button", modal);
}
