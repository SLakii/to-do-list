document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    let taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a delete button for the task
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    document.getElementById('task-list').appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});
