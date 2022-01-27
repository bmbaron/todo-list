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

import {manager} from './components/projectManager.js'


var form = document.getElementById("form");
var inputBox= document.getElementById("searchbox");
var projects = document.getElementById("project-container");
var projectButton = document.getElementById("project-button");
var addButton = document.getElementById("add-button");

projectButton.onclick = function(){
    var input = inputBox.value;
    manager.addProject(input);
    inputBox.value = null;
    form.style.visibility = 'hidden';
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
    form.style.visibility = 'visible';
    projects.style.visibility = 'hidden';
};



      
    