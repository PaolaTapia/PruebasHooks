const { renderHook } = require("@testing-library/react-hooks");
const { useFetch } = require("../../hooks/useFetch")

describe('Pruebas useFetch', () => {

     test('Debe de retornar la información por defecto', () => {
          const {result}= renderHook (() => useFetch('https://www.breakingbadapi.com/api/quotes/1')); 
         const {data,loading, error} = result.current; 
          expect(data).toBe(null); 
          expect(loading).toBe(true); 
          expect(error).toBe(null);           
     }); 

     test('Debe de tener la info deseada, loading false error false', async() => {
       const {result, waitForNextUpdate}= renderHook (() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
       await waitForNextUpdate (); 
       const {data,loading, error} = result.current; 
       expect(data.length).toBe(1); 
       expect(loading).toBe(false); 
       expect(error).toBe(null);         
       }); 

       test('Debe de manejar el error', async() => {
          const {result, waitForNextUpdate}= renderHook (() => useFetch('https://www.breakingbadapi.com/api/quo'));
          await waitForNextUpdate (); 
          const {data,loading, error} = result.current; 
          expect(data).toBe(null); 
          expect(loading).toBe(false); 
          expect(typeof error).toBe('string');         
          }); 
     
     
})
