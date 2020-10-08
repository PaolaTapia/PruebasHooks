const initialState=[{
     id:1, 
     todo: 'comprar pan', 
     done: false
}]

const toDoReducer = (state= initialState, action) =>{

     if(action?.type==='agregar'){
          return [...state, action.payload]; 
     }

     return state; 
}

let toDos = toDoReducer(); 


const newToDo= {
     id:2, 
     todo: 'comprar leche', 
     done: false
}

const action={
     type: 'agregar', 
     payload: newToDo
}

toDos= toDoReducer (toDos, action); 

console.log(toDos); 