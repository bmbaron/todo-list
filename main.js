(()=>{"use strict";const e=e=>{let t=document.createElement("div");t.innerHTML="task",t.className="task",console.log(t),e.appendChild(t)},t=(()=>{let e=document.getElementById("project-view"),t=[];return{addProject:n=>{""==n&&(n="[unnamed project]"),t.push(n);let i=document.createElement("div");i.innerHTML=n,i.className="project",e.appendChild(i);let l=document.createElement("div");l.innerHTML="create task",l.classList.add("task-button"),l.id="submit-task",i.appendChild(l),console.log(l);let d=document.createElement("div");d.innerHTML="remove project",d.classList.add("delete-button"),i.appendChild(d);let o=document.getElementById("form2"),c=document.getElementById("project-container"),s=document.getElementById("task-name");l.onclick=function(){o.style.visibility="visible",o.style.height="auto",o.style.marginTop="-15rem",c.style.visibility="hidden",s.focus()},d.onclick=function(){this.parentNode.remove()}}}})();var n=document.getElementById("form1"),i=document.getElementById("form2"),l=document.getElementById("searchbox"),d=document.getElementById("task-name"),o=document.getElementById("project-container"),c=document.getElementById("task-container"),s=document.getElementById("project-button"),a=document.getElementById("add-button"),m=document.getElementById("task-button"),u=document.getElementById("task-button2");s.onclick=function(){var e=l.value;t.addProject(e),l.value=null,n.style.visibility="hidden",o.style.visibility="visible"},m.onclick=function(){e(),n.style.visibility="hidden",o.style.visibility="visible",c.style.visibility="visible"},l.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),s.click())})),a.onclick=function(){n.style.visibility="visible",o.style.visibility="hidden",l.placeholder="add a project",l.focus()},u.onclick=function(){i.style.display="block",o.style.visibility="hidden",d.focus()}})();