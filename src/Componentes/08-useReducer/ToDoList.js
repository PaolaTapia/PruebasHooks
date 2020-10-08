import React from 'react'; 
import { TodoListItem } from './TodoListItem'; 

export const ToDoList = ({toDos,handleToggle,handleDelete}) => {
     return (         

          <ul className="list-group list-group-flush">         
          <TodoListItem  
               handleDelete={handleDelete} 
               handleToggle={handleToggle} 
               toDos={toDos} 
          />
         
          </ul>

     )
}
