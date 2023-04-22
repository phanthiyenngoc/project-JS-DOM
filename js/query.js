function createElement(todo) {
  if (!todo) return;

  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  liElement.dataset.id = todo.id;
  return liElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray || todoList.length === 0) return;

  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createElement(todo);
    ulElement.appendChild(liElement);
  }
}

(() => {
  const todoList = [
    { id: 1, title: 'Learn ReactJS' },
    { id: 2, title: 'Learn Javascript' },
    { id: 3, title: 'Learn HTML-CSS' },
  ];
  renderTodoList(todoList, 'todoList');
  const todoList1 = [
    { id: 1, title: 'Learn ReactJS' },
    { id: 2, title: 'Learn Javascript' },
    { id: 3, title: 'Learn HTML-CSS' },
  ];
  renderTodoList(todoList1, 'todoList1');
})();
