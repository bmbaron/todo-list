import {services} from './services.js'
import {addTask} from './firebaseManager.js'    


const tManager = (() => {
  
  let form2 = document.getElementById("form2");
  let projectContainer = document.getElementById("project-container");

  let taskName = document.getElementById("task-name");
  let taskDescription = document.getElementById("task-description");
  let deadline = document.getElementById("task-deadline");
  let priority = document.getElementById("priority");

  let submitTaskButton = document.getElementById("submit-task-button");
  let cancelButton = document.getElementById("cancel-button");

  form2.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      submitTaskButton.click();
      return false;
    }
  });

  const createTask = (project) => {

    submitTaskButton.onclick = function(){
      document.getElementById("title-container").style.visibility = "visible";
      document.getElementById("control-panel").style.visibility = "visible";

      if (taskName.value == "") {
        alert("Task name must be filled out");
        return;
      }
      else {
        let row = document.createElement("div");
        row.classList.add("task-row");

          let x = document.createElement("a");
          x.classList.add("delete-article");
          x.innerHTML = "&#x24E7;";
          x.onclick = function(){ 
            this.parentNode.remove();
          };
          row.appendChild(x);
    
          let shownTaskName = document.createElement("h2");    
          shownTaskName.contentEditable = true;
          shownTaskName.spellcheck = false;
          services.editPlaceholder(shownTaskName, '', taskName.value);

          let shownTaskDesc = document.createElement("h4");
          shownTaskDesc.classList.add("description");
          shownTaskDesc.contentEditable = true;
          shownTaskDesc.spellcheck = false;
          services.editPlaceholder(shownTaskDesc, '', taskDescription.value);
  
          row.appendChild(shownTaskName);
          row.appendChild(shownTaskDesc);

          let deadlineCopy = document.createElement('INPUT');
          deadlineCopy.classList.add("deadline");
          deadlineCopy.setAttribute("type", "date");
          deadlineCopy.placeholder = "";
          // deadlineCopy.value = deadline.value;
          deadlineCopy.value = "";


          let deadlineAndPriority = document.createElement('div');
          deadlineAndPriority.classList.add("deadline-and-priority");
          deadlineAndPriority.appendChild(deadlineCopy);  

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
    
          if (priority.value == "IMPORTANT") {
            row.style.backgroundColor = "#0d86bf";
            row.style.color = "white";
          }
          else {
            row.style.backgroundColor = "#9EEBED";
            row.style.color = "black";
          }
    
          priorityCopy.addEventListener('change', function() {
            if (priorityCopy.value == "IMPORTANT") {
              row.style.color = "white";
              row.style.backgroundColor = "#0d86bf";
            }
            else {
              row.style.backgroundColor = "#9EEBED";
              row.style.color = "black";
            }
          }, false);
    
          deadlineAndPriority.appendChild(priorityCopy); 
          
          row.appendChild(deadlineAndPriority);


          let taskArea = project.childNodes[1];
          taskArea.appendChild(row);    
      }; 

      addTask(project.firstChild.textContent,
        {
          name: taskName.value,
          description: taskDescription.value,
          deadline: deadline.value,
          priority: priority.value,
        }
      )

      taskName.value = "";
      taskDescription.value = "";
      deadline.value = "";

      form2.style.height = "0";
      form2.style.visibility = "hidden";
      projectContainer.style.visibility = 'visible';
      
    };

    cancelButton.onclick = function(){
      document.getElementById("title-container").style.visibility = "visible";
      document.getElementById("control-panel").style.visibility = "visible";

      taskName.value = " ";
      taskDescription.value = "";
      deadline.value = "";

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
