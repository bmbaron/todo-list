import {tManager} from './taskManager.js'


const pManager = (() => {

    let projects = document.getElementById('project-view');
    let projectArray = [];
    let form2 = document.getElementById("form2");
    let projectContainer = document.getElementById("project-container");

    let taskName = document.getElementById("task-name");
    let taskDescription = document.getElementById("task-description");
    let deadline = document.getElementById("task-deadline");
    let priority = document.getElementById("priority");
    let finishedCounter = 2;


    const addProject = (project) => {

      if (project == '') {
        project = 'project';
      }
      projectArray.push(project);

      let newProject = document.createElement('div');
      newProject.innerHTML = project;
      newProject.className = "project";

      let taskArea = document.createElement('div');
      taskArea.classList.add("task-area");
      newProject.appendChild(taskArea);

      projects.appendChild(newProject);

      //tManager.addCreateTaskButton(newProject);

        let createTaskButton = document.createElement('div');
        createTaskButton.innerHTML = "create task";
        createTaskButton.classList.add("task-button");
        createTaskButton.id = "create-task";
        newProject.appendChild(createTaskButton);
        createTaskButton.onclick = function(){
          form2.style.visibility = "visible";
          form2.style.height = "auto";
          form2.style.marginTop = "-15rem";
          projectContainer.style.visibility = 'hidden';
          taskName.focus();
          submitTask(newProject);
        };

        let finishedButton = document.createElement('div');
        finishedButton.innerHTML = "mark finished";
        finishedButton.classList.add("finished-button");
        finishedButton.id = "finished-button";
        newProject.appendChild(finishedButton);
        finishedButton.onclick = function(){
          if (finishedCounter%2 === 0) {

            newProject.style.backgroundColor = "lightgreen";
            this.innerHTML = "mark incomplete";
          }
          else {
            newProject.style.backgroundColor = "lightgrey";
            this.innerHTML = "mark finished";
          }
          finishedCounter++;
        };


        let deleteButton = document.createElement('div');
        deleteButton.innerHTML = "remove project";
        deleteButton.classList.add("delete-button");
        newProject.appendChild(deleteButton);
        deleteButton.onclick = function(){
          this.parentNode.remove();
        };
    
      };

      const submitTask = (project) => {

        let submitTaskButton = document.getElementById("submit-task-button");
    
        submitTaskButton.onclick = function(){
          logTask(taskName.value, taskDescription.value, deadline.value, priority.value, project);
    
          taskName.value = "";
          taskDescription.value = "";
    
          form2.style.height = "0";
          form2.style.visibility = "hidden";
          form2.style.marginTop = "0";
          projectContainer.style.visibility = 'visible';
        };
      };



    

    const logTask = (name, description, deadline, priority, project) => {

      let deadlineCopy = document.createElement('INPUT');
      deadlineCopy.setAttribute("type", "date");
      deadlineCopy.value = deadline;

      let row = document.createElement("div");
      row.classList.add("task-row");
      row.innerHTML = "<strong>" + name  + "</strong>" + "<br>" + description +  "<br>" + "priority: " + "<strong>" + priority + "</strong>" + "<br>";
      row.appendChild(deadlineCopy);
      //row.appendChild(priority);

      //console.log(project);
      let taskArea = project.childNodes[1];
      taskArea.appendChild(row);
      //project.insertBefore(row, newTaskButton);

    };


  

    //const chooseQuestion = async () => {

    
    return {
      addProject,
      logTask
      //toggleAnswered,
      //questionBoxes,

    };
})();
  
  
  export {
    pManager
  }
