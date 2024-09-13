const todoList =[{ name:"type some code"
    ,Duedate : "2024-09-13"} , { name:"Go to the gym"
    ,Duedate : "2024-09-13"}]

    rendertodolist()
function rendertodolist(){
    let todolistHTML= ""

    for(let i = 0; i < todoList.length; i++ ){

        const todoObject = todoList[i]
        // const name =todoObject.name
        // const Duedate =todoObject.Duedate
        const {name, Duedate} =todoObject

    const html =`
        <div>${name}</div>
         <div>${Duedate}</div>
    <button onclick = "
    todoList.splice(${i}, 1)
        rendertodolist()
        " class="delete_todo_button">Delete</button>
              ` 
        todolistHTML += html
    }
    document.querySelector(".js_todo_list")
    .innerHTML = todolistHTML
}

function addTodo(){
    const inputElement = document.querySelector(".js_name_input")
    const name = inputElement.value
    
    const DateinputElement = document.querySelector(".js_due_date_input")
    const Duedate = DateinputElement.value 
    
    todoList.push({//name : name,
        //Duedate: Duedate
    name,
     Duedate})
    
    inputElement.value = ""
    
    rendertodolist()
    }
    
    function addTodo(){
        const inputElement = document.querySelector(".js_name_input")
        const name = inputElement.value
        
        const DateinputElement = document.querySelector(".js_due_date_input")
        const Duedate = DateinputElement.value 
        
        todoList.push({//name : name,
            //Duedate: Duedate
        name,
         Duedate})
        
        inputElement.value = ""
        
        rendertodolist()
        }
