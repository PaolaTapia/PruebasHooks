import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({handleAddToDo}) => {
     const [{description}, handledInputChange, reset] = useForm({
          description: '',
     });   

const handleSubmit = (e) => {
     e.preventDefault(); 
     if(description.trim().length<=1){
          return; 
     }
     const newToDo = {
          id: new Date().getTime(),
          desc: 'Aprender '+ description,
          done: false
     }
     handleAddToDo(newToDo); 
     reset();     
}
     
  return (
    <>
      <h4>Agregar ToDo</h4>

      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handledInputChange}
          value={description}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
