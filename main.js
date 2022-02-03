(()=>{"use strict";const e=(e,t)=>{e.contentEditable=!0,e.setAttribute("placeholder",t);const n=e.getAttribute("placeholder");""==e.innerHTML&&(e.innerHTML=n,e.addEventListener("focus",(function(e){e.target.innerHTML===n&&(e.target.innerHTML="")})),e.addEventListener("blur",(function(e){""===e.target.innerHTML&&(e.target.innerHTML=n)}))),e.addEventListener("keydown",(function(t){13===t.keyCode&&(t.preventDefault(),e.blur())}))},t=(()=>{let t=document.getElementById("form2"),n=document.getElementById("task-name"),d=document.getElementById("task-description"),i=document.getElementById("task-deadline"),l=document.getElementById("priority"),a=document.getElementById("project-container");return{createTask:c=>{document.getElementById("submit-task-button").onclick=function(){if(""==n.value)return alert("Task name must be filled out"),!1;{let t=document.createElement("div");t.classList.add("task-row");let a=document.createElement("a");a.classList.add("delete-article"),a.innerHTML="&#10006",a.onclick=function(){this.parentNode.remove()};let o=document.createElement("h3");o.contentEditable=!0,e(o,n.value);let s=document.createElement("h4");s.classList.add("description"),e(s,d.value),t.appendChild(o),t.appendChild(s);let r=document.createElement("INPUT");r.setAttribute("type","date"),r.value=i;let u=document.createElement("div");u.classList.add("deadline-and-priority"),u.appendChild(r);let m=document.createElement("SELECT");m.value=l.value;let p=document.createElement("OPTION");p.value="normal",p.classList.add("task-form"),p.innerHTML="normal priority";let y=document.createElement("OPTION");y.value="IMPORTANT",y.classList.add("task-form"),y.innerHTML="high priority",m.appendChild(p),m.appendChild(y),"IMPORTANT"==l.value?t.style.backgroundColor="#ffccff":t.style.backgroundColor="#ccffff",m.addEventListener("change",(function(){"IMPORTANT"==m.value?t.style.backgroundColor="#ffccff":t.style.backgroundColor="#ccffff"}),!1),u.appendChild(m),t.appendChild(a),t.appendChild(u),c.childNodes[1].appendChild(t)}n.value="",d.value="",t.style.height="0",t.style.visibility="hidden",a.style.visibility="visible"}}}})(),n=(()=>{let n=document.getElementById("project-view"),d=[],i=[],l=document.getElementById("form2"),a=document.getElementById("project-container"),c=document.getElementById("task-name"),o=(document.getElementById("task-description"),document.getElementById("task-deadline"),document.getElementById("priority"),2);return{addProject:s=>{if(d.length>=3)return void alert("You can only have 3 active projects. Please delete a project");d.push(s);let r=document.createElement("div");r.className="project",r.classList.add("active");let u=document.createElement("div");u.innerHTML=s,u.classList.add("project-name"),""==s&&e(u,"[click to add name]"),r.appendChild(u);let m=document.createElement("div");m.classList.add("task-area"),r.appendChild(m),n.appendChild(r);let p=document.createElement("div");p.classList.add("project-buttons"),p.id="project-buttons";let y=document.createElement("div");y.classList.add("task-button"),y.id="task-button",y.innerHTML="create task",p.appendChild(y),y.onclick=function(){l.style.visibility="visible",l.style.height="auto",a.style.visibility="hidden",c.focus(),console.log("clicked create task button"),t.createTask(r)};let v=document.createElement("div");v.classList.add("finished-button"),v.id="finished-button",v.innerHTML="mark finished",p.appendChild(v),v.onclick=function(){o%2==0?(r.style.backgroundColor="lightgreen",this.innerHTML="mark incomplete",i.push(r),d.pop(),r.classList.remove("active"),r.classList.add("finished")):(r.style.backgroundColor="white",this.innerHTML="mark finished"),o++};let h=document.createElement("div");h.classList.add("delete-button"),h.id="delete-button",h.innerHTML="delete project",p.appendChild(h),h.onclick=function(){window.confirm("Do you really want to delete this?")&&(this.parentNode.parentNode.remove(),d.pop())},r.appendChild(p)}}})();var d=document.getElementById("form1"),i=document.getElementById("searchbox"),l=document.getElementById("project-container"),a=(document.getElementById("task-container"),document.getElementById("project-button")),c=document.getElementById("add-button"),o=document.getElementById("finished-button");a.onclick=function(){var e=i.value;n.addProject(e),i.value=null,d.style.visibility="hidden",l.style.visibility="visible"},i.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),a.click())})),c.onclick=function(){d.style.visibility="visible",l.style.visibility="hidden",i.placeholder="add a project",i.focus()},o.onclick=function(){alert("clicked");var e=document.getElementsByClassName("active");console.log(e),document.querySelectorAll(".active").forEach((e=>e.remove())),e=document.getElementsByClassName("active"),console.log(e)}})();