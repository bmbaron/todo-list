import {tManager} from './taskManager.js'
import {services} from './services.js'


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

    const addProject = (project) => {

      if (projectArray.length >= 3) {
        alert("You can only have 3 active projects. Please delete a project");
        return;
      }

      projectArray.push(project);

      let newProject = document.createElement('div');
      newProject.className = "project";
      newProject.classList.add("active");

      let projectName = document.createElement('div');
      projectName.innerHTML = project;
      projectName.classList.add("project-name");

      if (project == '') {
        services.editPlaceholder(projectName, "[click to add name]");
      }

      newProject.appendChild(projectName);

      let taskArea = document.createElement('div');
      taskArea.classList.add("task-area");
      newProject.appendChild(taskArea);

      projectView.appendChild(newProject);

      let projectButtons = document.createElement('div');
      projectButtons.classList.add("project-buttons");
      projectButtons.id = "project-buttons";

        let taskButton = document.createElement('div');
        taskButton.classList.add("task-button");
        taskButton.id = "task-button";
        taskButton.innerHTML = "create task";
        projectButtons.appendChild(taskButton);

        taskButton.onclick = function(){
          form2.style.visibility = "visible";
          form2.style.height = "auto";
          projectContainer.style.visibility = 'hidden';
          taskName.focus();
          console.log("clicked create task button");
          tManager.createTask(newProject);
        };

        let finishedButton = document.createElement('div');
        finishedButton.classList.add("finished-button");
        finishedButton.id = "finished-button";
        finishedButton.innerHTML = "mark finished";
        projectButtons.appendChild(finishedButton);

        finishedButton.onclick = function(){
          if (finishedCounter%2 === 0) {
            
            newProject.style.backgroundColor = "lightgreen";
            this.innerHTML = "mark incomplete";
            finishedProjectArray.push(newProject);
            projectArray.pop();
            newProject.classList.remove("active");
            newProject.classList.add("finished");
/*             let parent = this.parentNode;
            parent.parentNode.remove(); */
          }
          else {
            newProject.style.backgroundColor = "white";
            this.innerHTML = "mark finished";
          }
          finishedCounter++;
        };


        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete-button");
        deleteButton.id = "delete-button";
        deleteButton.innerHTML = "delete project";
        projectButtons.appendChild(deleteButton);
        
        deleteButton.onclick = function(){
          if (window.confirm("Do you really want to delete this?")) {
            let parent = this.parentNode;
            parent.parentNode.remove();
            projectArray.pop();
          }
        };

        newProject.appendChild(projectButtons);
    
      };


  

    //const chooseQuestion = async () => {

    
    return {
      addProject
      //toggleAnswered,
      //questionBoxes,

    };
})();
  
  
  export {
    pManager
  }
