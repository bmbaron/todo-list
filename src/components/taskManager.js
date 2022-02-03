import { pManager } from "./projectManager";
import {services} from './services.js'


const tManager = (() => {
  
  let form2 = document.getElementById("form2");
  let taskName = document.getElementById("task-name");
  let taskDescription = document.getElementById("task-description");
  let deadline = document.getElementById("task-deadline");
  let priority = document.getElementById("priority");
  let projectContainer = document.getElementById("project-container");

  const createTask = (project) => {
            
    let submitTaskButton = document.getElementById("submit-task-button");

    submitTaskButton.onclick = function(){
      if (taskName.value == "") {
        alert("Task name must be filled out");
        return false;
      }
      else {

        let row = document.createElement("div");
        row.classList.add("task-row");

          let x = document.createElement("a");
          x.classList.add("delete-article");
          x.innerHTML = "&#10006";
          x.onclick = function(){ 
            this.parentNode.remove();
          };
    
          let shownTaskName = document.createElement("h3");    
          shownTaskName.contentEditable = true;
          services.editPlaceholder(shownTaskName, taskName.value);

          let shownTaskDesc = document.createElement("h4");
          shownTaskDesc.classList.add("description");
          services.editPlaceholder(shownTaskDesc, taskDescription.value);
  
          row.appendChild(shownTaskName);
          row.appendChild(shownTaskDesc);

          let deadlineCopy = document.createElement('INPUT');
          deadlineCopy.setAttribute("type", "date");
          deadlineCopy.value = deadline;

          let deadlineAndPriority = document.createElement('div');
          deadlineAndPriority.classList.add("deadline-and-priority");
          deadlineAndPriority.appendChild(deadlineCopy);  

          let priorityCopy = document.createElement('SELECT');
          priorityCopy.value = priority.value;

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
    
          deadlineAndPriority.appendChild(priorityCopy); 
          
          row.appendChild(x);
          row.appendChild(deadlineAndPriority);


          let taskArea = project.childNodes[1];
          taskArea.appendChild(row);    
      }; 
      taskName.value = "";
      taskDescription.value = "";
      form2.style.height = "0";
      form2.style.visibility = "hidden";
      projectContainer.style.visibility = 'visible';
    };


    };



      return {
        createTask
      };

      })();
  
  
  export {
    tManager
  }
