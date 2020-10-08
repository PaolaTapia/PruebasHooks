import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../Componentes/08-useReducer/TodoAdd';

describe('Pruebas en TodoAdd', () => {

     const handleAddToDo=jest.fn(); 
     
     const wrapper = shallow(<TodoAdd
          handleAddToDo={handleAddToDo}
     />); 
     
     test('Debe de mostrarse correctamente ', () => {
          expect(wrapper).toMatchSnapshot();   
     }); 

     test('No debe de llamar hanldeAddToDo', () => {

          const formSubmit = wrapper.find('form').prop('onSubmit');
           expect(formSubmit).toEqual(expect.any(Function)); 
           formSubmit({preventDefault(){}}); 

           expect(handleAddToDo).toHaveBeenCalledTimes(0);           
     }); 
     test('Debe de llamar hanldeAddToDo', () => {

          const value = 'Aprender React'; 
          wrapper.find('input').simulate('change', {
               target: {
                    value, 
                    name: 'description'
               }
          })
          const formSubmit = wrapper.find('form').prop('onSubmit');
           expect(formSubmit).toEqual(expect.any(Function)); 
           formSubmit({preventDefault(){}}); 
           expect(handleAddToDo).toHaveBeenCalledTimes(1);           
           expect(handleAddToDo).toHaveBeenCalledWith({
               id: expect.any(Number),
               desc: 'Aprender '+value,
               done: false
           });    

           
           expect( wrapper.find('input').prop('value')).toBe(''); 

     }); 
     

     
     
})
