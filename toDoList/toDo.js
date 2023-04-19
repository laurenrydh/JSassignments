const toDoList = document.getElementById('toDoList')
const taskName = document.getElementById('taskName')
const addTaskButton = document.getElementById('addTaskButton')

function addTask (task) {
    const newTaskText = task.value
    const newTask = document.createElement('li')
    newTask.textContent = newTaskText
    toDoList.appendChild(newTask)
    task.value = ''
}

addTaskButton.addEventListener('click', function() {
    addTask(taskName);
  });

// remove items
toDoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        toDoList.removeChild(event.target)
    }
})
  
  
  
  
  