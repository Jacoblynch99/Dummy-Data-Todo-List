let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    let newElement = document.getElementById("todo-list")
    let newLI = document.createElement("li")
    let fork = document.createTextNode(arrayOfTodos[i].title)
    newLI.appendChild(fork)
    newElement.appendChild(newLI)



  }

console.log(arrayOfTodos[0].title)
console.log(arrayOfTodos[1].title)
