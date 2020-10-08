import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../Componentes/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../Componentes/04-useRef/RealExampleRef';
jest.mock('../../../Componentes/03-examples/MultipleCustomHooks');

describe('Pruebas en RealExampleRef', () => {
     const wrapper= shallow(<RealExampleRef />); 

     test('Debe de mostrarse correctamente', () => {  
     expect(wrapper).toMatchSnapshot();  
     expect(wrapper.find(MultipleCustomHooks).exists()).toBe(false); 
   }); 


     test('Debe de mostrarse el componente', () => {
          wrapper.find('button').simulate('click'); 
          expect(wrapper.find(MultipleCustomHooks).exists()).toBe(true); 
     });
     
     
})
