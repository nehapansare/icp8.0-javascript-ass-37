const tasks = [
    "Play Game",
    "Go to the market",
    "Do Study",
];
function localStorageTask() {
    const loadTask = JSON.parse(localStorage.getItem('localTask'));
    if (loadTask) {
        tasks.unshift(...loadTask);
    }
    loadTaskTasks();  
}
localStorageTask();

function loadTaskTasks() {
    localStorage.setItem('localTask', JSON.stringify(tasks));
    const taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = '';

    for (const task of tasks) {
        taskContainer.innerHTML += `
        <div class="todo-item">
            ${task}
            <p class="btn-del" onclick="del('${task}')"><img src="delete.png" width="20px"></p>
        </div>`;
    }
}

function del(task) {
    const index = tasks.indexOf(task);
        tasks.splice(index, 1);
    loadTaskTasks(); 
}
function putTask() {
    const input = document.querySelector('#input-btn')
    const task = input.value; 

 
    tasks.unshift(task);

    input.value = '';  
    loadTaskTasks()
}


