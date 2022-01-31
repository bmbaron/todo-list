//import {generator} from './components/questionActionGenerator.js'

/* const mainModule = (() => {

    let arrow = document.getElementById('arrow');
    let category = document.getElementById('category');
    let color = document.getElementsByTagName("BODY")[0];
    let counter = 0;
    
    window.addEventListener("load", function(){
        document.getElementById('start-button').style.visibility = 'hidden';
        //layout.builder();
        layout.homePage();
    }); */

    import {pManager} from './components/projectManager.js'
    import {tManager} from './components/taskManager.js'
    
    
    var form1 = document.getElementById("form1");
    var inputBox= document.getElementById("searchbox");
    var projects = document.getElementById("project-container");
    var tasks = document.getElementById("task-container");
    var projectButton = document.getElementById("project-button");
    var addButton = document.getElementById("add-button");
    var taskButton = document.getElementById("task-button");
    
    
    
    projectButton.onclick = function(){
        var input = inputBox.value;
        pManager.addProject(input);
        inputBox.value = null;
        form1.style.visibility = 'hidden';
        projects.style.visibility = 'visible';
    };
    
    taskButton.onclick = function(){
        tManager.createTask();
        form1.style.visibility = 'hidden';
        projects.style.visibility = 'visible';
        tasks.style.visibility = 'visible';
    };
    
    inputBox.addEventListener("keydown", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          projectButton.click();
        }
      });
    
    addButton.onclick = function(){
        form1.style.visibility = 'visible';
        projects.style.visibility = 'hidden';
        inputBox.placeholder = 'add a project';
        inputBox.focus();
    };
    
    
          
        