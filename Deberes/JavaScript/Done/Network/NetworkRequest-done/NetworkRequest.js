async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    createTable(data);
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

function createTable(todos) {
  const body = document.querySelector("body");
  const table = document.createElement("table");
  body.appendChild(table);
  todos.forEach((element) => {
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    const title = document.createElement("td");
    const completed = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    id.textContent = `${element.id} ) `;
    title.textContent = element.title;
    completed.appendChild(checkbox);
    checkbox.checked = element.completed;
    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(completed);
    table.appendChild(tr);
  });
}

getTodos().catch((error) => console.error("Error:", error));
