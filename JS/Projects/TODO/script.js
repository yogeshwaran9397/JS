var tasklist = [
  {
    TaskDetail: "Demo Task 1",
    TaskID: 1,
    startDate: "",
    stopDate: "",
    Status: false,
  },
  {
    TaskDetail: "Demo Task Detail 2",
    TaskID: 2,
    startDate: "",
    stopDate: "",
    Status: false,
  },
];

var updatedTaskList = tasklist;

function loadTaskDetail() {
  //   console.log("Hit 1");

  var taskListContainer = document.getElementById("task-list");
  taskListContainer.innerHTML = ""; // Clear any existing tasks

  console.log(updatedTaskList);

  for (i = 0; i < updatedTaskList.length; i++) {
    var task = updatedTaskList[i];

    //Create list item
    var ul = document.createElement("ul");

    // Create task detail div
    var taskDetailDiv = document.createElement("div");
    taskDetailDiv.className = "task-detail";

    // Create task detail description
    var taskDetailP = document.createElement("p");
    taskDetailP.className = "task-detail-desc";
    taskDetailP.innerHTML = updateStatusOfTask(task);

    // Create Done button
    var doneButton = document.createElement("button");
    doneButton.className = "btn-task-Stus";
    doneButton.textContent = "Done";
    doneButton.dataset.taskId = task.TaskID;
    doneButton.addEventListener("click", function (event) {
      var taskId = event.target.dataset.taskId;
      //   console.log(taskId);
      markTaskDone(taskId);
      loadTaskDetail();
    });

    // Create Delete button
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn-task-Stus";
    deleteButton.dataset.taskId = task.TaskID;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function (event) {
      var taskId = event.target.dataset.taskId;
      //   console.log("Delete clicked for task ID:", taskId);
      removeTaskNode(taskId);
      loadTaskDetail();
    });

    // Append elements to the task detail div
    taskDetailDiv.appendChild(taskDetailP);
    taskDetailDiv.appendChild(doneButton);
    taskDetailDiv.appendChild(deleteButton);

    // Append task detail div to list item
    ul.appendChild(taskDetailDiv);

    // Append list item to the task list container
    taskListContainer.appendChild(ul);
  }
}

function addNewTask(taskDetail) {
  updatedTaskList.push(taskDetail);
}

function getTaskNode(taskID) {
  var retVal = 0;
  retVal = updatedTaskList.findIndex((x) => x.TaskID == taskID);
  //   console.log("getTaskNode", retVal);
  return retVal;
}

function removeTaskNode(taskId) {
  var indexToRemove = getTaskNode(taskId);
  if (indexToRemove !== -1) {
    updatedTaskList.splice(indexToRemove, 1);
  } else {
    //warn
  }
}

function markTaskDone(taskID) {
  //   console.log(taskID);
  var indextoUpdate = getTaskNode(taskID);
  if (indextoUpdate !== -1) {
    updatedTaskList[indextoUpdate].Status = true;
  } else {
    //warn
  }
}

function updateStatusOfTask(taskDetail) {
  // console.log(taskDetail);
  if (taskDetail.Status === false) {
    return taskDetail.TaskDetail;
  } else {
    return `<s>${taskDetail.TaskDetail}</s>`; // Return text with strikethrough if status is true
  }
}

loadTaskDetail();

document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementsByClassName("btn-add-task");

  for (var i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", function (event) {
      // console.log("Button Clicked");

      var taskDesc = document.querySelector(".task-desc").value;
      var taskStartDate = document.querySelector(".task-st-date").value;
      var taskStopDate = document.querySelector(".task-sp-date").value;

      if (taskDesc === "") {
        alert("Enter Task Description before clicking Add");
        return;
      }

      var newTask = {
        TaskDetail: taskDesc,
        TaskID: updatedTaskList[updatedTaskList.length - 1].TaskID + 1,
        startDate: taskStartDate,
        stopDate: taskStopDate,
        Status: false,
      };

      console.log(newTask);
      updatedTaskList.push(newTask);
      loadTaskDetail();
    });
  }
});
