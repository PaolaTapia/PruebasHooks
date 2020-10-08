import React from 'react';
import { shallow } from 'enzyme';

import { ToDoList } from '../../../Componentes/08-useReducer/ToDoList';
import { demoToDos } from '../../fixtures/demoTodos';

describe('Pruebas en ToDoList', () => {

     const handleToggle=jest.fn(); 
     const handleDelete=jest.fn(); 
     
     const wrapper=shallow(<ToDoList
          toDos={demoToDos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          />); 
           
      test('Debe de mostrarse correctamente ', () => {
          expect(wrapper).toMatchSnapshot();          
      }); 
      
      test('Debe de tener dos TodoListItem', () => {
          
          //hecho en todolistItem como test('Debe de tener dos toDos') 
      }); 

      
      test('Debe de tener funciones handleDelete y handleToggle ', () => {
          expect (wrapper.find('TodoListItem').prop('handleToggle')).toEqual(expect.any(Function));  
        expect (wrapper.find('TodoListItem').prop('handleDelete')).toEqual(expect.any(Function)); //toBe === apunta mismo espacio de memoria
         //  console.log(wrapper.find('TodoListItem').prop(handleDelete)); 
      }); 


     
})
