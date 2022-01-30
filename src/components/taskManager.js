

const tManager = (() => {

  let taskArray = [];

  const createTask = (task, project) => {


    taskArray.push(task);

    console.log("tasks: " + taskArray);

    let newTask = document.createElement('div');
    newTask.innerHTML = "task";
    newTask.className = "task";
    console.log(newTask);

    project.appendChild(newTask);


  };


    return {
      createTask

    };
})();
  
  
  export {
    tManager
  }
