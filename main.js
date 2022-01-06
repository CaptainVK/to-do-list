function todolist(){
    let input = document.getElementById('todoInput').value
    let task = document.createTextNode(input)   
    let newTask = document.createElement('li')
    newTask.appendChild(task)
    document.getElementById('todoList').appendChild(newTask)
}