const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldTodoValue;

const saveTodo = (text, done = 0, save = 1) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;

  const finishTodoBtn = document.createElement("button");
  finishTodoBtn.classList.add("finish-todo");
  finishTodoBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const editTodoBtn = document.createElement("button");
  editTodoBtn.classList.add("edit-todo");
  editTodoBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.classList.add("remove-todo");
  removeTodoBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  todo.appendChild(todoTitle);
  todo.appendChild(finishTodoBtn);
  todo.appendChild(editTodoBtn);
  todo.appendChild(removeTodoBtn);

  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ text, done });
  }

  todoList.appendChild(todo);
};

const toogleEditMode = () => {
  todoForm.classList.toggle("hide");
  editForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    if (todo.querySelector("h3").innerText === oldTodoValue) {
      todo.querySelector("h3").innerText = text;
      updateTodoLocalStorage(oldTodoValue, text)
    }
  });
};

const getSearchTodos = (search) => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    todo.style.display = "flex";
    search = search.toLowerCase();
    if (!todoTitle.includes(search)) {
      todo.style.display = "none";
    }
  });
};

const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  switch (filterValue) {
    case "all":
      todos.forEach((todo) => (todo.style.display = "flex"));
      break;
    case "done":
      todos.forEach((todo) =>
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );
      break;
    case "todo":
      todos.forEach((todo) =>
        !todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      );
      break;
  }
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;
  if (inputValue) {
    saveTodo(inputValue);
  }

  todoInput.value = "";
  todoInput.focus();
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEL = targetEl.closest("div");
  let todoTitle;

  if (parentEL && parentEL.querySelector("h3")) {
    todoTitle = parentEL.querySelector("h3").innerText;
  }
  if (targetEl.classList.contains("finish-todo")) {
    parentEL.classList.toggle("done");
    updateTodoStatusLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEL.remove();
    removeTodoLocalStorage(todoTitle);
  }

  if (targetEl.classList.contains("edit-todo")) {
    toogleEditMode();
    editInput.value = todoTitle;
    oldTodoValue = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toogleEditMode();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;
  if (editInputValue) {
    updateTodo(editInputValue);
  }
  toogleEditMode();
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;
  getSearchTodos(search);
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue);
});

const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodos = () => {
  const todos = getTodosLocalStorage();

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0);
  });
};

const removeTodoLocalStorage = (text) => {
  const todos = getTodosLocalStorage();

  const filter = todos.filter((todo) => todo.text !== text);

  localStorage.setItem("todos", JSON.stringify(filter));
};

const updateTodoStatusLocalStorage = (text) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) => (todo.text === text ? (todo.done = !todo.done) : null));

  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodoLocalStorage = (oldText, newText) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) => (todo.text === oldText ? (todo.text = newText) : null));

  localStorage.setItem("todos", JSON.stringify(todos));
};

loadTodos();
