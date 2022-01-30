
import {tManager} from './components/taskManager.js'

const pManager = (() => {

    let projects = document.getElementById('project-view');
    let projectArray = [];

    //const timer = ms => new Promise(res => setTimeout(res, ms));

    const addProject = (project) => {
      if (project == '') {
        project = '[unnamed project]';
      }

      projectArray.push(project);
      console.log("Projects: " + projectArray);

      let newProject = document.createElement('div');
      newProject.innerHTML = project;
      newProject.className = "project";
      console.log(newProject);

      projects.appendChild(newProject);

      tManager.createTask(10, newProject);

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
