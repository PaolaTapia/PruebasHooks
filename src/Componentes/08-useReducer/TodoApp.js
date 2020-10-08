import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAdd } from "./TodoAdd";
import { ToDoList } from "./ToDoList";
import { toDoReducer } from "./toDoReducer";

export const TodoApp = () => { 
     const init= () => {
          return JSON.parse(localStorage.getItem('toDos')) || []; 

     }

     const [toDos, dispatch] = useReducer(toDoReducer,[], init);

     useEffect(() => {
      localStorage.setItem('toDos', JSON.stringify(toDos)); 
     }, [toDos])

     const handleDelete =(toDoId)=>{
     const action ={
          type: 'delete',
          payload: toDoId
     }
     dispatch(action);
     }

     const handleToggle =(toDoId) =>{
     dispatch({
          type: 'toggle',
          payload: toDoId
     });       
  }

  const handleAddToDo= (newToDo) => {  
     dispatch({
          type: 'add',
          payload: newToDo
     });
  }

 

  return (
    <div>
      <h1>TodoApp ({toDos.length})</h1>
      <hr />
     <div className="row">
     <div className="col-7">
          <ToDoList 
               toDos={toDos} 
               handleDelete={handleDelete} 
               handleToggle={handleToggle}
          />
      </div>
      <div className="col-5">
          <TodoAdd 
               handleAddToDo={handleAddToDo}
          />
      </div>
     </div>
    </div>
  );
};
