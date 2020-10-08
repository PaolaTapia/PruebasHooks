
import  { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

     const initialForm={
          name: 'Paola', 
          email: 'paola@gmail.com'

     }; 

     test('debe de regresar un formulario por defecto ', () => {

          const {result}= renderHook(()=>useForm(initialForm)); 
          const [formValues, handledInputChange, reset]=result.current; 
          expect(formValues).toEqual(initialForm); 
          expect(typeof handledInputChange).toBe('function'); 
          expect(typeof reset).toBe('function'); 

          
     });

     test('debe de cambiar el valor del formulario (cambiar name) ', () => {
          const {result}= renderHook(()=>useForm(initialForm)); 
          const [, handledInputChange]=result.current; 
          act (()=>{
               handledInputChange ({
                    target: {
                         name: 'name', 
                         value: 'Melissa'
                    }
               }); 
          }); 
          const [formValues]=result.current; 
          console.log(formValues); 
          expect(formValues).toEqual({...initialForm, name: 'Melissa'}); 
          
          
     });

     test('debe de reestablecer el formulario con RESET ', () => {
          const {result}= renderHook(()=>useForm(initialForm)); 
          const [, handledInputChange, reset]=result.current; 
          act (()=>{
               handledInputChange ({
                    target: {
                         name: 'name', 
                         value: 'Melissa'
                    }
               }); 
               reset(); 
          }); 
          const [formValues]=result.current;      
          expect(formValues).toEqual(initialForm); 
     });
     
     
})
