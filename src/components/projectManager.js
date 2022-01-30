
import {tManager} from './taskManager.js'

const pManager = (() => {

    let projects = document.getElementById('project-view');
    let projectArray = [];

    //const timer = ms => new Promise(res => setTimeout(res, ms));

    const addProject = (project) => {

      if (project == '') {
        project = '[unnamed project]';
      }
      projectArray.push(project);

      let newProject = document.createElement('div');
      newProject.innerHTML = project;
      newProject.className = "project";
      projects.appendChild(newProject);

      let submitTaskButton = document.createElement('div');
      submitTaskButton.innerHTML = "create task";
      submitTaskButton.classList.add("task-button");
      submitTaskButton.id = "submit-task";
      newProject.appendChild(submitTaskButton);
      console.log(submitTaskButton);

      let deleteButton = document.createElement('div');
      deleteButton.innerHTML = "remove project";
      deleteButton.classList.add("delete-button");
      newProject.appendChild(deleteButton);
      //tManager.createTask(newProject);
      let form2 = document.getElementById("form2");
      let projectContainer = document.getElementById("project-container");
      let taskName = document.getElementById("task-name");
      
      submitTaskButton.onclick = function(){
        form2.style.visibility = "visible";
        form2.style.height = "auto";
        form2.style.marginTop = "-15rem";
        projectContainer.style.visibility = 'hidden';
        taskName.focus();
      };

      deleteButton.onclick = function(){
        this.parentNode.remove();
      };


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
