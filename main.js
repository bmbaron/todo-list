(()=>{"use strict";const e=(()=>{let e=document.getElementById("project-view"),t=[];return{addProject:i=>{""==i&&(i="[unnamed project]"),t.push(i),console.log("Projects: "+t);let n=document.createElement("div");n.innerHTML=i,n.className="project",console.log(n),e.appendChild(n)}}})(),t=()=>{};document.getElementById("form");var i=document.getElementById("searchbox"),n=document.getElementById("project-container"),l=document.getElementById("task-container"),o=document.getElementById("project-button"),c=document.getElementById("add-button"),d=document.getElementById("task-button");o.onclick=function(){var t=i.value;e.addProject(t),i.value=null,form1.style.visibility="hidden",n.style.visibility="visible"},d.onclick=function(){t(),form1.style.visibility="hidden",n.style.visibility="visible",l.style.visibility="visible"},i.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),o.click())})),c.onclick=function(){form1.style.visibility="visible",n.style.visibility="hidden",i.placeholder="add a project",i.focus()}})();