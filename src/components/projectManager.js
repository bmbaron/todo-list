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

    const addProject = (p) ={

      if (p == '') {
        p = '[click to edit]';
      }

      if (projectArray.length >= 3) {
        alert("You can only have 3 active projects. Please delete a project");
        return;
      }

      projectArray.push(p);

      let newProject = document.createElement('div');
      newProject.className = "project";

      let projectName = document.createElement('div');
      projectName.innerHTML = p;
      projectName.classList.add("project-name");
      projectName.contentEditable = true;

      newProject.appendChild(projectName);


      let taskArea = document.createElement('div');
      taskArea.classList.add("task-area");
      newProject.appendChild(taskArea);

      projects.appendChild(newProject);

      //tManager.addCreateTaskButton(newProject);

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
          console.log("taskbutton: " + projectName.innerHTML);
          submitTask(newProject);
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

          const validateDelete = () => {
              if (window.confirm("Do you really want to delete this?")) {
                let parent = this.parentNode;
                parent.parentNode.remove();
                projectArray.pop();
            }
          };

          validateDelete();
        };

        newProject.appendChild(projectButtons);
    
      };

      const submitTask = (project) => {

/*         let submitTaskButton = document.getElementById("submit-task-button");

        form2.addEventListener("keypress", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            //submitTaskButton.click();
            
          }
        });
    
        submitTaskButton.onclick = function(){

          const validateForm = () => {
            console.log(taskName.value);
            if (taskName.value == "") {
              alert("Task name must be filled out");
              return false;
            }
            else {
              logTask(taskName.value, taskDescription.value, deadline.value, priority, project);
    
              taskName.value = "";
              taskDescription.value = "";
              form2.style.height = "0";
              form2.style.visibility = "hidden";
              projectContainer.style.visibility = 'visible';
            }
          };

          validateForm();
    
        }; */
        
        let submitTaskButton = document.getElementById("submit-task-button");

        submitTaskButton.onclick = function(){

            if (taskName.value == "") {
              alert("Task name must be filled out");
              return false;
            }
            else {
              logTask(taskName.value, taskDescription.value, deadline.value, priority, project);
              taskName.value = "";
              taskDescription.value = "";
              form2.style.height = "0";
              form2.style.visibility = "hidden";
              projectContainer.style.visibility = 'visible';
            }    
        };
      };



    

    const logTask = (name, description, deadline, priority, project) => {

      let row = document.createElement("div");

      let x = document.createElement("a");
      x.classList.add("delete-article");
      x.innerHTML = "&#10006";
      x.onclick = function(){ 
        this.parentNode.remove();
      };

      let deadlineCopy = document.createElement('INPUT');
      deadlineCopy.setAttribute("type", "date");
      deadlineCopy.value = deadline;

      let priorityCopy = document.createElement('SELECT');

        let option1 = document.createElement('OPTION');
        option1.value = "normal";
        option1.classList.add("task-form");
        option1.innerHTML = "normal priority";

        let option2 = document.createElement('OPTION');
        option2.value = "IMPORTANT";
        option2.classList.add("task-form");
        option2.innerHTML = "high priority";

        priorityCopy.appendChild(option1);
        priorityCopy.appendChild(option2);

        priorityCopy.value = priority.value;


      row.classList.add("task-row");
      row.innerHTML = "<strong>" + name  + "</strong>" + "<br>" + description +  "<br>";
      row.appendChild(deadlineCopy);
      row.contentEditable = true;


      if (priority.value == "IMPORTANT") {
        row.style.backgroundColor = "#ffccff";
      }
      else {
        row.style.backgroundColor = "#ccffff";
      }

      priorityCopy.addEventListener('change', function() {
        if (priorityCopy.value == "IMPORTANT") {
          row.style.backgroundColor = "#ffccff";
        }
        else {
          row.style.backgroundColor = "#ccffff";
        }
      }, false);

      row.appendChild(x);
      row.appendChild(priorityCopy);

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
