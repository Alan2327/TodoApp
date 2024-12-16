const todoTable = document.getElementById('todoTable');
let completedCount = 0;

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    todos.forEach(todo => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = todo.id;

      const taskCell = document.createElement('td');
      taskCell.textContent = todo.title;

      const completedCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          completedCount++;
        } else {
          completedCount--;
        }

        if (completedCount === 5) {
          new Promise(resolve => resolve())
            .then(() => alert('Congrats. 5 Tasks have been Successfully Completed'));
        }
      });
      completedCell.appendChild(checkbox);
      row.appendChild(idCell);
      row.appendChild(taskCell);
      row.appendChild(completedCell);
      todoTable.appendChild(row);
    });
  });

document.getElementById('logout').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'index.html';
});