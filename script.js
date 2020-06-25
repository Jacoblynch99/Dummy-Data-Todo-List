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

let x = ""

const userNum = (num) => {
  x = parseInt(num)
  console.log(x)
}





  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = (x) => {
    
    
    let newElement = document.getElementById("todo-list")
    let fontColor = ""

    
    for (let i = 0; i < arrayOfTodos.length; i++) {
        
        

        if (arrayOfTodos[i].completed === true){
            fontColor = "green"
            } else {
            fontColor = "red"    
            }

        let newLI = document.createElement("LI")
        let newH1 = document.createElement("P")
        let newH2 = document.createElement("P")
        let newH3 = document.createElement("P")
        let newH4 = document.createElement("P")

        let userId = document.createTextNode(arrayOfTodos[i].userId)
        newH1.appendChild(userId)
        
        let id = document.createTextNode(arrayOfTodos[i].id)
        newH2.appendChild(id)
    
        let title = document.createTextNode(arrayOfTodos[i].title)
        newH3.appendChild(title)

        let completed = document.createTextNode(arrayOfTodos[i].completed)
        newH4.appendChild(completed)

        newElement.appendChild(newLI) 
        newLI.appendChild(newH1)
        newLI.appendChild(newH2)
        newLI.appendChild(newH3)
        newLI.appendChild(newH4)

        newLI.style.color = fontColor
    }
  }

  const userIdTodos = () => {
    

    
    let arrayOfUserTodos = arrayOfTodos.filter(function(item === x) {
      return populateTodos()
    } 
    // => item.userId === x))

    console.log(x)
  
     
    // if(arrayOfUserTodos === x) {
    //   populateTodos()
    // } else {
    //   return false
    // }
  


    

    
    
  

  }