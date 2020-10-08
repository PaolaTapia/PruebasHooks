import { toDoReducer } from '../../../Componentes/08-useReducer/toDoReducer';
import  { demoToDos } from '../../fixtures/demoTodos';

describe('Pruebas en mi toDoreducer', () => {
     test('debe retornar el estado por defecto', () => {
          const state = toDoReducer(demoToDos, {}); 
          expect(state).toEqual(demoToDos); 
     });
     
     test('debe de agregar un toDo', () => {
          const newToDo= {
               id: 3, 
               desc: 'Aprender CSS', 
               done: false
          };
          const action = {
               type: 'add', 
               payload: newToDo
          }; 
          const state = toDoReducer(demoToDos, action);           
          expect(state.length).toBe(3); 
          expect(state).toEqual([...demoToDos,newToDo]); 
     });
     test('debe de borrar un toDo', () => {
          const id= 1; 
          const action = {
               type: 'delete', 
               payload: id
          }; 
          const state = toDoReducer(demoToDos, action);           
          expect(state.length).toBe(1); 
          expect(state).toEqual([demoToDos[1]]); 
     });
     
     test('debe de hacer el toggle del  toDo', () => {
          const action = {
               type: 'toggle', 
               payload: 1
          }; 
          const state = toDoReducer(demoToDos, action);           
          expect(state[0].done).toBe(true); 
          expect(state[1]).toEqual(demoToDos[1]);           
     });
     
})
