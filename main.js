(()=>{"use strict";const e=(e,t)=>{e.setAttribute("placeholder",t);const n=e.getAttribute("placeholder");""==e.innerHTML&&(e.innerHTML=n,e.addEventListener("focus",(function(e){e.target.innerHTML===n&&(e.target.innerHTML="")})),e.addEventListener("blur",(function(e){""===e.target.innerHTML&&(e.target.innerHTML=n)}))),e.addEventListener("keydown",(function(t){13===t.keyCode&&(t.preventDefault(),e.blur())}))},t=(()=>{let t=document.getElementById("form2"),n=document.getElementById("project-container"),i=document.getElementById("task-name"),l=document.getElementById("task-description"),d=document.getElementById("task-deadline"),c=document.getElementById("priority"),o=document.getElementById("submit-task-button"),a=document.getElementById("cancel-button");return t.addEventListener("keydown",(function(e){if(13===e.keyCode)return e.preventDefault(),o.click(),!1})),{createTask:s=>{o.onclick=function(){if(document.getElementById("control-panel").style.visibility="visible",""!=i.value){{let t=document.createElement("div");t.classList.add("task-row");let n=document.createElement("a");n.classList.add("delete-article"),n.innerHTML="&#x24E7;",n.onclick=function(){this.parentNode.remove()},t.appendChild(n);let o=document.createElement("h2");o.contentEditable=!0,e(o,i.value);let a=document.createElement("h4");a.classList.add("description"),e(a,l.value),t.appendChild(o),t.appendChild(a);let r=document.createElement("INPUT");r.classList.add("deadline"),r.setAttribute("type","date"),r.value=d.value;let u=document.createElement("div");u.classList.add("deadline-and-priority"),u.appendChild(r);let m=document.createElement("SELECT"),y=document.createElement("OPTION");y.value="normal",y.classList.add("task-form"),y.innerHTML="normal priority";let p=document.createElement("OPTION");p.value="IMPORTANT",p.classList.add("task-form"),p.innerHTML="high priority",m.appendChild(y),m.appendChild(p),m.value=c.value,"IMPORTANT"==c.value?(t.style.backgroundColor="#0d86bf",t.style.color="white"):(t.style.backgroundColor="#9EEBED",t.style.color="black"),m.addEventListener("change",(function(){"IMPORTANT"==m.value?(t.style.color="white",t.style.backgroundColor="#0d86bf"):(t.style.backgroundColor="#9EEBED",t.style.color="black")}),!1),u.appendChild(m),t.appendChild(u),s.childNodes[1].appendChild(t)}i.value="",l.value="",d.value="",t.style.height="0",t.style.visibility="hidden",n.style.visibility="visible"}else alert("Task name must be filled out")},a.onclick=function(){i.value=" ",l.value="",d.value="",t.style.height="0",t.style.visibility="hidden",n.style.visibility="visible"}}}})(),n=(()=>{let n=document.getElementById("project-view"),i=[],l=[],d=document.getElementById("form2"),c=document.getElementById("project-container"),o=document.getElementById("task-name"),a=(document.getElementById("task-description"),document.getElementById("task-deadline"),document.getElementById("priority"),0);return{addProject:s=>{document.getElementById("control-panel").style.visibility="visible",i.push(s);let r=document.createElement("div");r.className="project",r.classList.add("active"),r.id=a;let u=document.createElement("div");u.innerHTML=s,u.spellcheck=!1,u.id="name"+a,u.classList.add("project-name"),u.contentEditable=!0,""==s&&e(u,"[click to name project]"),r.appendChild(u);let m=document.createElement("div");m.classList.add("task-area"),r.appendChild(m),n.appendChild(r);let y=document.createElement("div");y.classList.add("project-buttons"),y.id="project-buttons"+a,a++;let p=document.createElement("button");p.classList.add("task-button"),p.id="task-button",p.innerHTML="create task",y.appendChild(p),p.onclick=function(){document.getElementById("control-panel").style.visibility="hidden",d.style.visibility="visible",d.style.height="auto",c.style.visibility="hidden",o.focus(),t.createTask(r)};let b=document.createElement("button");b.classList.add("finished-button"),b.id="finished-button",b.innerHTML="mark finished",y.appendChild(b),b.onclick=function(){r.style.backgroundColor="#b0f9ac",this.innerHTML="mark incomplete",l.push(r),i.pop(),r.classList.remove("active"),r.classList.add("finished"),r.classList.add("hidden"),r.classList.add("disabled"),document.getElementById("project-buttons"+r.id).style.display="none"};let v=document.createElement("button");v.classList.add("delete-button"),v.id="delete-button",v.innerHTML="delete project",y.appendChild(v),v.onclick=function(){window.confirm("Do you really want to delete this?")&&(this.parentNode.parentNode.remove(),i.pop())},r.appendChild(y)}}})();var i=document.getElementById("form1"),l=document.getElementById("searchbox"),d=document.getElementById("project-container"),c=(document.getElementById("task-container"),document.getElementById("project-button")),o=document.getElementById("cancel-button1"),a=document.getElementById("add-button"),s=document.getElementById("finished-projects-button"),r=document.getElementById("active-button");c.onclick=function(){var e=l.value;l.value=null,i.style.visibility="hidden",d.style.visibility="visible",n.addProject(e),r.disabled=!0,r.style.opacity="0.5"},o.onclick=function(){i.style.visibility="hidden",d.style.visibility="visible"},l.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),c.click())})),a.onclick=function(){document.getElementById("control-panel").style.visibility="hidden",i.style.visibility="visible",d.style.visibility="hidden",l.placeholder="add a project",l.focus()},s.onclick=function(){s.disabled=!0,a.disabled=!0,s.style.opacity="0.5",r.disabled=!1,r.style.opacity="1",document.querySelectorAll(".active").forEach((e=>e.classList.toggle("hidden"))),document.querySelectorAll(".finished").forEach((e=>e.classList.toggle("hidden")))},r.onclick=function(){r.disabled=!0,a.disabled=!1,r.style.opacity="0.5",s.disabled=!1,s.style.opacity="1",document.querySelectorAll(".active").forEach((e=>e.classList.toggle("hidden"))),document.querySelectorAll(".finished").forEach((e=>e.classList.toggle("hidden"))),0==document.querySelectorAll(".active").length&&a.click()}})();