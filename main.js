(()=>{"use strict";const e=(()=>{let e={},i=document.getElementById("form2"),n=document.getElementById("project-container"),l=document.getElementById("task-name"),d=document.getElementById("task-description"),o=document.getElementById("task-deadline"),c=document.getElementById("task-priority");const a=a=>{document.getElementById("submit-task-button").onclick=function(){e[0]={name:l.value,description:d.value,deadline:o.value,priority:c.checked},console.log(e[0]),t.logTask(l.value,d.value,o,c.checked,a),l.value="",d.value="",o.value="",c.checked=!1,i.style.height="0",i.style.visibility="hidden",i.style.marginTop="0",n.style.visibility="visible"}};return{addCreateTaskButton:e=>{let t=document.createElement("div");t.innerHTML="create task",t.classList.add("task-button"),t.id="create-task",e.appendChild(t),t.onclick=function(){i.style.visibility="visible",i.style.height="auto",i.style.marginTop="-15rem",n.style.visibility="hidden",l.focus(),a(e)}},submitTask:a}})(),t=(()=>{let t=document.getElementById("project-view"),i=[];return{addProject:n=>{""==n&&(n="[unnamed project]"),i.push(n);let l=document.createElement("div");l.innerHTML=n,l.className="project",t.appendChild(l),e.addCreateTaskButton(l);let d=document.createElement("div");d.innerHTML="remove project",d.classList.add("delete-button"),l.appendChild(d),d.onclick=function(){this.parentNode.remove()}},logTask:(e,t,i,n,l)=>{let d=document.createElement("INPUT");d.setAttribute("type","date"),d.value=i.value;let o=document.createElement("select");o.classList.add("select-list");let c=document.createElement("option");c.value=1,c.text="high priority",o.appendChild(c);let a=document.createElement("option");a.value=2,a.text="low priority",o.appendChild(a),n||(o.value=2);let s=document.createElement("div");s.classList.add("task-row"),s.innerHTML="<strong>"+e+"</strong><br>"+t+"<br>",s.appendChild(d),s.appendChild(o);let r=l.childNodes[2];l.insertBefore(s,r)}}})();var i=document.getElementById("form1"),n=document.getElementById("searchbox"),l=document.getElementById("project-container"),d=document.getElementById("task-container"),o=document.getElementById("project-button"),c=document.getElementById("add-button"),a=document.getElementById("task-button");o.onclick=function(){var e=n.value;t.addProject(e),n.value=null,i.style.visibility="hidden",l.style.visibility="visible"},a.onclick=function(){e.createTask(),i.style.visibility="hidden",l.style.visibility="visible",d.style.visibility="visible"},n.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),o.click())})),c.onclick=function(){i.style.visibility="visible",l.style.visibility="hidden",n.placeholder="add a project",n.focus()}})();