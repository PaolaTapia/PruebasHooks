import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TodoListItem } from '../../../Componentes/08-useReducer/TodoListItem';
import  { demoToDos } from '../../fixtures/demoTodos';

describe('pruebas en ToDoListItem', () => {
const handleDelete= jest.fn(); 
const handleToggle= jest.fn(); 

const wrapper = shallow(
     <TodoListItem 
          toDos={demoToDos}           
          handleDelete={handleDelete}
          handleToggle={handleToggle}
     />   );   

     test('Debe de mostrarse correctamente', () => {         
               expect(toJson(wrapper)).toMatchSnapshot();          
     }); 

     test('Debe de llamar la funcion handleDelete', () => {
          wrapper.find('button').at(0).simulate('click'); 
          expect(handleDelete).toHaveBeenCalledWith(demoToDos[0].id); 
         
     }); 

     test('Debe de llamar la funcion handleToggle', () => {
    
          wrapper.find('p').at(0).simulate('click'); 
          expect(handleToggle).toHaveBeenCalledWith(demoToDos[0].id); 
     }); 

     test('Debe de mostrar el texto correctamente', () => {
          const toDo=demoToDos[0].desc;          
          const id= demoToDos[0].id; 

          const p = wrapper.find('p').at(0); 
          expect(p.text().trim()).toBe(`${id}.${toDo}`);     
          
     }); 

     
     test('Debe de tener la clase complete si el ToDO.done=true', () => {                
          demoToDos[0].done=true;  
          
          const wrapper = shallow(
               <TodoListItem 
                    toDos={demoToDos}          
               />   );   
//console.log(wrapper.find('p').at(0).html()); 
               expect(wrapper.find('p').at(0).hasClass('complete')).toBe(true);            
     }); 

     test('Debe de tener dos toDos', () => {
          
          expect(wrapper.find('li').length).toBe(demoToDos.length);
      }); 
     

})
