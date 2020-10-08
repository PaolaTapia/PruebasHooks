import React from 'react';
import { mount, shallow } from 'enzyme'; 
import { act } from 'react-dom/test-utils';

import { TodoApp } from '../../../Componentes/08-useReducer/TodoApp';
import { demoToDos } from '../../fixtures/demoTodos';


describe('Pruebas en TodoApp', () => {
     const wrapper = shallow(<TodoApp/>); 

     Storage.prototype.setItem=jest.fn(()=>{}); 
     
     test('Debe de mostrarse correctamente', () => {             
          expect(wrapper).toMatchSnapshot();           
     });     
    
     test('Debe de mostrarse correctamente', () => {
            
          const wrapper = mount (<TodoApp />); 

          act(()=>{
               wrapper.find('TodoAdd').prop
               ('handleAddToDo')(demoToDos[0]); 
               wrapper.find('TodoAdd').prop('handleAddToDo')(demoToDos[1]); 
          }) ;

          expect(wrapper.find('h1').text().trim()).toBe ('TodoApp (2)'); 
          expect(localStorage.setItem).toHaveBeenCalledTimes(2); 
     });    

     test('Debe de eliminar un todo', () => {             
          wrapper.find('TodoAdd').prop
          ('handleAddToDo')(demoToDos[0]);   
          wrapper.find('ToDoList').prop
          ('handleDelete')(demoToDos[0].id);      
          
          expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
          
     });     
    
})
