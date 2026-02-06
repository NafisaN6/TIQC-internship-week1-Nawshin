const fs = require("fs");

const FILE = "todos.json";

function loadTodos() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

function saveTodos(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

function addTodo(text) {
  if (!text) {
    console.log("Todo text required");
    return;
  }

  const todos = loadTodos();
  todos.push({
    id: todos.length + 1,
    text: text,
    completed: false
  });

  saveTodos(todos);
  console.log("Todo added");
}

function listTodos() {
  const todos = loadTodos();
  if (todos.length === 0) {
    console.log("No todos yet");
    return;
  }

  todos.forEach(t => {
    console.log(`${t.id}. [${t.completed ? "x" : " "}] ${t.text}`);
  });
}

function completeTodo(id) {
  const todos = loadTodos();
  const todo = todos.find(t => t.id === Number(id));

  if (!todo) {
    console.log("Todo not found");
    return;
  }

  todo.completed = true;
  saveTodos(todos);
  console.log("Todo completed");
}

const command = process.argv[2];
const arg = process.argv[3];

if (command === "add") addTodo(arg);
else if (command === "list") listTodos();
else if (command === "complete") completeTodo(arg);
else console.log("Commands: add, list, complete");
