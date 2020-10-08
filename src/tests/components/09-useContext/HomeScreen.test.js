import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../Componentes/09-useContext/HomeScreen';
import { UserContext } from '../../../Componentes/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => {
     const user = {
          name: 'Paola',
          email: 'paola@gmail.com'
     }
     const wrapper= mount(
     <UserContext.Provider value={{
          user
     }}>
               <HomeScreen />
     </UserContext.Provider>
     ); 

     test('Debe de mostrarse correctamente ', () => {

          expect(wrapper).toMatchSnapshot(); 
     })
     
})
