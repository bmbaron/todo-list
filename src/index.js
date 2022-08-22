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
    import {addProject} from './components/firebaseManager.js'    


    
    const form1 = document.getElementById("form1");
    const inputBox= document.getElementById("searchbox");
    const projects = document.getElementById("project-container");
    const tasks = document.getElementById("task-container");
    const projectButton = document.getElementById("project-button");
    const cancelButton1 = document.getElementById("cancel-button1");
    const addButton = document.getElementById("add-button");
    const finishedButton = document.getElementById("finished-projects-button");
    const activeButton = document.getElementById("active-button");

    
    projectButton.onclick = function(){
        const input = inputBox.value;
        inputBox.value = null;
        form1.style.visibility = 'hidden';
        projects.style.visibility = 'visible';
        pManager.addProject(input);
        activeButton.disabled=true;
        activeButton.style.opacity = "0.5";
        addProject(input)
    };

    cancelButton1.onclick = function(){
        form1.style.visibility = 'hidden';
        document.getElementById("title-container").style.visibility = "visible";
        document.getElementById("control-panel").style.visibility = "visible";
        projects.style.visibility = 'visible';
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
        document.getElementById("control-panel").style.visibility = "hidden";
        form1.style.visibility = 'visible';
        projects.style.visibility = 'hidden';
        inputBox.placeholder = 'add a project';
        inputBox.focus();
    };
    
    finishedButton.onclick = function(){
        finishedButton.disabled=true;
        finishedButton.style.opacity = "0.5";
        addButton.disabled=true;
        activeButton.disabled=false;
        activeButton.style.opacity = "1";
        document.querySelectorAll('.active').forEach(e => e.classList.toggle("hidden"));
        document.querySelectorAll('.finished').forEach(e => e.classList.toggle("hidden"));
    };

    activeButton.onclick = function(){
        addButton.disabled=false;
        activeButton.disabled=true;
        activeButton.style.opacity = "0.5";
        finishedButton.disabled=false;
        finishedButton.style.opacity = "1";
        document.querySelectorAll('.active').forEach(e => e.classList.toggle("hidden"));
        document.querySelectorAll('.finished').forEach(e => e.classList.toggle("hidden"));
        if (document.querySelectorAll('.active').length == 0) {
            addButton.click();
        }
    };


    
          
        