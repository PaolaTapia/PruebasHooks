import {useState} from 'react';

const useCounter = (initialState = 10)=> {
     const [counter, setCounter] = useState(initialState); 
     
     const increment =()=>{
          setCounter(counter + 1); 
     }; 

     const reset=()=>{
          setCounter(initialState); 
     }; 
     
     const decrement =()=>{
          setCounter(counter - 1); 
     }; 

     return { //llaves no parentesis
          counter, 
          increment, 
          reset, 
          decrement
     };
} 

export default useCounter; 