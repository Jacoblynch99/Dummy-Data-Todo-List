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
    
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let newli = document.createElement("LI")
        let fork = document.createTextNode(arrayOfTodos[i].userId)
        let fork = document.createTextNode(arrayOfTodos[i].id)
        let fork = document.createTextNode(arrayOfTodos[i].title)
        let fork = document.createTextNode(arrayOfTodos[i].completed)
        newli.appendChild(fork)
        newElement.appendChild(newli)   
    }



  }

console.log(arrayOfTodos[0].title)
console.log(arrayOfTodos[1].title)
