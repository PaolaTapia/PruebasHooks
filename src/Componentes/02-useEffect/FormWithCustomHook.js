import React, { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import  './effects.css'; 
import { Message } from './Message';

export const FormWithCustomHook = () => {

     const [formValues, handledInputChange] = useForm({
          name: '', 
          email: '',
          password: ''
     }); 

     const {name, email, password}= formValues; 
    
     useEffect(() => {
          console.log('email cambio'); 
     }, [email]); 
     
     const handleSubmit =(e)=>{
          e.preventDefault(); 
          console.log(formValues); 

     }

     return (
          <form
               onSubmit={handleSubmit}
          >
          <h1>FormWithCustomHook</h1>
          <hr/>
          <div className="form-group">
              <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Tu nombre"
              autoComplete="off"
              value={name}
              onChange={handledInputChange}
              />
          </div>
          <div className="form-group">
              <input
              type="text"
              name="email"
              className="form-control"
              placeholder="tuemail@tuemail.com"
              autoComplete="off"
              value={email}
              onChange={handledInputChange}
              />
          </div>
          <div className="form-group">
              <input
              type="password"
              name="password"
              className="form-control"
              placeholder="****"
              value={password}
              onChange={handledInputChange}
              />
          </div>
        <button
          type="submit"
          className="btn btn-primary"
        > Guardar</button>
          </form>
     )
}
