import React, {useRef,useState, useLayoutEffect} from 'react'; 
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css'; 


export const Layout = () => {
     
     const {counter, increment} = useCounter(1); 
     const {loading, data }=  useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`); 

     //console.log(state); 
     const { quote}= !!data && data[0]; 

     const pTag=useRef(); 
     const [boxsize, setBoxSize] = useState({});

     useLayoutEffect(()=>{
          setBoxSize(pTag.current.getBoundingClientRect());
     },[quote])



     return (
          <div>
               <h1>Layout Effect</h1>
               <hr/>

                    <blockquote className="blockquote text-right">
                    <p 
                    className="mb-0"
                    ref={pTag}

                    > {quote}</p>
               
               </blockquote>
               
               <pre>
                    {JSON.stringify(boxsize,null,3)}
               </pre>

               <button 
               className="btn btn-primary"
               onClick={increment}
               >
                    Siguiente
               </button>

          </div>
     )
}
