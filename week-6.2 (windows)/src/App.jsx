const { useEffect } = require("react");
const { useState } = require("react");

function App() {
  const [todos, setTodos] = useState([]);

  useEffect( ()=> {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
          const json = await res.json();
          setTodos(json.todos);
      })
  }, [])

  return <div>
    <h1>Hi</h1>
    {todos.map(todo => 
      <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}