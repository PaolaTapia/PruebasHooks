import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../Componentes/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import useCounter from '../../../hooks/useCounter';
jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Pruebas en MultipleCustomHooks', () => {
     useCounter.mockReturnValue({
          counter: 10, 
          increment: () => {}
          
     })

   test('Debe de mostrarse correctamente', () => {
     useFetch.mockReturnValue({
          data: null, 
          loading: true, 
          error: null
     }); 
     const wrapper= shallow (<MultipleCustomHooks />); 
     expect(wrapper).toMatchSnapshot();         
   }); 

   test('Debe de mostrar la información', () => {
     useFetch.mockReturnValue({
          data: [{
               author: 'Paola', 
               quote: 'Hola Mundo'
          }], 
          loading: false, 
          error: null
     }); 

      const wrapper= shallow (<MultipleCustomHooks />); 

      expect(wrapper.find('.alert').exists()).toBe(false); 
      expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo'); 
      expect(wrapper.find('footer').text().trim()).toBe('Paola'); 

             
   }); 
     
})