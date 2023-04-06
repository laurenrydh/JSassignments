let taskManager = (function() {

    let tasks = []

    function addTask (taskDescription) {
        tasks.push(taskDescription)
    }

    function displayTasks() {
        console.log(tasks)
    }

    return {
        addTask,
        displayTasks
    }

})()

taskManager.addTask("Complete taskmanager assignment")
taskManager.addTask("Study functions")
taskManager.addTask("complete rock paper scissors assignment")

taskManager.displayTasks()