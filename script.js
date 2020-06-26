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

  const populateAllTodos = () => {
    populateTodos(arrayOfTodos, true)
  }

  const populateTodos = (arr, showFull) => {
    
    
    let newElement = document.getElementById("todo-list")
    let fontColor = ""

    
    for (let i = 0; i < arr.length; i++) {
        
        

        if (arr[i].completed === true){
            fontColor = "green"
            } else {
            fontColor = "red"    
            }

        let newLI = document.createElement("LI")
        let newH1 = document.createElement("P")
        let newH2 = document.createElement("P")
        let newH3 = document.createElement("P")
        let newH4 = document.createElement("P")

        let userId = document.createTextNode(arr[i].userId)
        newH1.appendChild(userId)
       
        let id = document.createTextNode(arr[i].id)
        newH2.appendChild(id)
    
        let title = document.createTextNode(arr[i].title)
        newH3.appendChild(title)

        let completed = document.createTextNode(arr[i].completed)
        newH4.appendChild(completed)

        newElement.appendChild(newLI) 
        newLI.appendChild(newH1)
        if(showFull) {
          newLI.appendChild(newH2)
          newLI.appendChild(newH3)
        }
        newLI.appendChild(newH4)

        newLI.style.color = fontColor
    }
  }

  const userIdTodos = () => {
    
    
    let arrayOfUserTodos = arrayOfTodos.filter(function(numID) {
      return numID.userId === x 
    })


    populateTodos(arrayOfUserTodos, true)

    


    console.log(arrayOfUserTodos)
  
    
  }

  const filterTrueFalse = () => {
    
    
    let arrayOfUserTodos = arrayOfTodos.filter(function(numID) {
      return numID.userId === x 
    })


    populateTodos(arrayOfUserTodos, false)

    


    console.log(element)
  }

  const removeTodos = () => {
 
        const arrayOfTodos = document.getElementsByTagName("OL")
      for (i=0; i < arrayOfTodos.length; i++) {
        arrayOfTodos[i].innerHTML = null
      }  
    }

 

  //create a function to remove child elements

  //let element = document.getElementById("top");
  // while (element.firstChild) {
  //   element.removeChild(element.firstChild);
  // }
  //https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  //after function is built evoke within useridtodos
  //reuse populate to populate todos using parameter and arguments
  //pass to populate todos arrayofusertodos
  //
