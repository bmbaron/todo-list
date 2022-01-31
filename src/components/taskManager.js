import { pManager } from "./projectManager";


const tManager = (() => {

  let taskObject = {};
  let counter = 0;
  let form2 = document.getElementById("form2");
  let projectContainer = document.getElementById("project-container");
  let taskName = document.getElementById("task-name");
  let taskDescription = document.getElementById("task-description");
  let deadline = document.getElementById("task-deadline");
  let priority = document.getElementById("priority");


/*   const addCreateTaskButton = (project) => {

    let createTaskButton = document.createElement('div');
    createTaskButton.innerHTML = "create task";
    createTaskButton.classList.add("task-button");
    createTaskButton.id = "create-task";
    project.appendChild(createTaskButton);

    createTaskButton.onclick = function(){
      form2.style.visibility = "visible";
      form2.style.height = "auto";
      form2.style.marginTop = "-15rem";
      projectContainer.style.visibility = 'hidden';
      taskName.focus();
      submitTask(project);
    };

  }; */

/*   const submitTask = (project) => {

    let submitTaskButton = document.getElementById("submit-task-button");

    submitTaskButton.onclick = function(){
      pManager.logTask(taskName.value, taskDescription.value, deadline.value, priority.value, project);

      taskName.value = "";
      taskDescription.value = "";

      form2.style.height = "0";
      form2.style.visibility = "hidden";
      form2.style.marginTop = "0";
      projectContainer.style.visibility = 'visible';
    }; */


  


    return {
/*       addCreateTaskButton, 
      submitTask */

    };
})();
  
  
  export {
    tManager
  }
