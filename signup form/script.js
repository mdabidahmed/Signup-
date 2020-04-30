const form = document.querySelector("#task-form");
//   const taskList = document.createElement("ul");
//   taskList.classList = "collection";
const fin = document.querySelector(".final");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", AddTask);

  clearBtn.addEventListener("click", clearTasks);

  fin.addEventListener("click", removeTask);

  filter.addEventListener("keyup", filterTask);
}
// function loadEventListeners()

const Input1 = document.querySelector("#exampleInputName");
const Input2 = document.querySelector("#exampleInputEmail1");
const Input3 = document.querySelector("#exampleInputNumber");

function AddTask(e) {
  if (Input1.value === "" || Input2.value === "" || Input3.value === "") {
    alert("fill all the details");
  } else {
    //   console.log(taskList);
    const taskList = document.createElement("ul");
    taskList.classList = "collection";

    const li1 = document.createElement("li");
    li1.className = "collection-item1";
    InputName = document.getElementById("exampleInputName").value;
    //   console.log(InputName);
    li1.innerHTML = InputName;
    taskList.appendChild(li1);

    const li2 = document.createElement("li");
    li2.className = "collection-item2";
    InputEmail = document.getElementById("exampleInputEmail1").value;
    //   console.log(InputName);
    li2.innerHTML = InputEmail;
    taskList.appendChild(li2);

    const li3 = document.createElement("li");
    li3.className = "collection-item3";
    InputNum = document.getElementById("exampleInputNumber").value;
    //   console.log(InputNum);
    li3.innerHTML = InputNum;

    taskList.appendChild(li3);
    fin.appendChild(taskList);
    console.log(taskList);
    // .value = "";
    // create new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    taskList.appendChild(link);
  }
  e.preventDefault();
  Input1.value = "";
  Input2.value = "";
  Input3.value = "";
}

function clearTasks(e) {
  while (fin.firstChild) {
    fin.removeChild(fin.firstChild);
    Input1.value = "";
    Input2.value = "";
    Input3.value = "";
  }

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure ?")) {
      console.log(e.target);
      e.target.parentElement.parentElement.remove();
      // Remove from Local storage
      //   removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// filter task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);
  document.querySelectorAll(".collection").forEach(function(task) {
    const item = task.firstChild.textContent;
    console.log(item);
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
