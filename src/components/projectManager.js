import {tManager} from './taskManager.js'
import {services} from './services.js'
import {deleteProject} from './firebaseManager.js'    

const pManager = (() => {

    let projectView = document.getElementById('project-view');
    let projectArray = [];
    let finishedProjectArray = [];
    let form2 = document.getElementById("form2");
    let projectContainer = document.getElementById("project-container");

    let taskName = document.getElementById("task-name");
    let taskDescription = document.getElementById("task-description");
    let deadline = document.getElementById("task-deadline");
    let priority = document.getElementById("priority");
    let finishedCounter = 2;
    let counter = 0;

    const addProject = (project) => {

      document.getElementById("control-panel").style.visibility = "visible";
      projectArray.push(project);

      let newProject = document.createElement('div');
      newProject.className = "project";
      newProject.classList.add("active");
      newProject.id = counter;

      let projectName = document.createElement('div');
      projectName.innerHTML = project;
      projectName.spellcheck = false;
      projectName.id = "name" + counter;
      projectName.classList.add("project-name");
      projectName.contentEditable = true;
      services.editPlaceholder(projectName, projectName.innerHTML, "[click to name project]");

      newProject.appendChild(projectName);

      let taskArea = document.createElement('div');
      taskArea.classList.add("task-area");
      newProject.appendChild(taskArea);

      projectView.appendChild(newProject);

      let projectButtons = document.createElement('div');
      projectButtons.classList.add("project-buttons");
      projectButtons.id = "project-buttons" + counter;
      counter++;

        let taskButton = document.createElement('button');
        taskButton.classList.add("task-button");
        taskButton.id = "task-button";
        taskButton.innerHTML = "create task";
        projectButtons.appendChild(taskButton);

        taskButton.onclick = function(){
          document.getElementById("title-container").style.visibility = "hidden";
          document.getElementById("control-panel").style.visibility = "hidden";
          form2.style.visibility = "visible";
          form2.style.height = "auto";
          projectContainer.style.visibility = 'hidden';
          taskName.focus();
          tManager.createTask(newProject);
        };

        let finishedButton = document.createElement('button');
        finishedButton.classList.add("finished-button");
        finishedButton.id = "finished-button";
        finishedButton.innerHTML = "mark finished";
        projectButtons.appendChild(finishedButton);

        finishedButton.onclick = function(){
            finishedProjectArray.push(newProject);
            projectArray.pop();
            newProject.classList.remove("active");
            newProject.classList.add("finished");
            newProject.classList.add("hidden");
            newProject.classList.add("disabled");
            let buttons = document.getElementById("project-buttons" + newProject.id);
            buttons.style.display="none";
            newProject.childNodes.forEach((n) => {
              n.contentEditable = false;
            });
        };


        let deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-button");
        deleteButton.id = "delete-button";
        deleteButton.innerHTML = "delete project";
        projectButtons.appendChild(deleteButton);
        
        deleteButton.onclick = function(){
          if (window.confirm("Do you really want to delete this?")) {
            let parent = this.parentNode;
            parent.parentNode.remove();
            projectArray.pop();
            deleteProject(project);
          }
        };

        newProject.appendChild(projectButtons);
    
      };

    return {
      addProject
    };
})();
  
  
  export {
    pManager
  }
