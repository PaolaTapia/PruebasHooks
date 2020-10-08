import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import HookApp from '../HookApp';

describe('pruebas en HookApp', () => {
test('renders correctly HookApp', () => {
     const wrapper = shallow(
       <HookApp />
     );    
     expect(toJson(wrapper)).toMatchSnapshot();
   });
     
})

 
