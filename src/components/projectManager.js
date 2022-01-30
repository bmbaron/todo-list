import {tManager} from './taskManager.js'


const pManager = (() => {

    let projects = document.getElementById('project-view');
    let projectArray = [];

    const addProject = (project) => {

      if (project == '') {
        project = '[unnamed project]';
      }
      projectArray.push(project);

      let newProject = document.createElement('div');
      newProject.innerHTML = project;
      newProject.className = "project";
      projects.appendChild(newProject);

      tManager.addCreateTaskButton(newProject);

      let deleteButton = document.createElement('div');
      deleteButton.innerHTML = "remove project";
      deleteButton.classList.add("delete-button");
      newProject.appendChild(deleteButton);

      deleteButton.onclick = function(){
        this.parentNode.remove();
      };

    };

    const logTask = (name, description, deadline, priority, project) => {

      let deadlineDate = document.createElement("INPUT");
      deadlineDate.setAttribute("type", "date");
      deadlineDate.value = deadline.value;

      let selectList = document.createElement("select");
      selectList.classList.add("select-list");

        let highpriority = document.createElement("option");
        highpriority.value = 1;
        highpriority.text = "high priority";
        selectList.appendChild(highpriority);

        let lowpriority = document.createElement("option");
        lowpriority.value = 2;
        lowpriority.text = "low priority";
        selectList.appendChild(lowpriority);

        if (!priority) {
          selectList.value = 2;
        }

      let row = document.createElement("div");
      row.classList.add("task-row");
      row.innerHTML = "<strong>" + name  + "</strong>" + "<br>" + description +  "<br>";
      row.appendChild(deadlineDate);
      row.appendChild(selectList);

      let newTaskButton = project.childNodes[2];

      project.insertBefore(row, newTaskButton);

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
