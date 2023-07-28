import { useRef, useEffect } from 'react';
import Typed from 'typed.js';


const TypedJS = () => {
    const element = useRef(null);

    useEffect(() => {    
        async function typedFunction() {
          setTimeout(() => {
            const typed = new Typed(element.current, {
              strings: ['Middle Fullstack developer'],
              typeSpeed: 50,
            });
        
            return () => {
              typed.destroy();
            };
          }, 1000)
        }  
        typedFunction()  
    }, []);

    return ( 
        <div className="text-zinc-200 min-h-max">
            <h3 
              className="
              sm:text-3xl
              text-2xl 
              font-bold 
              animate-toBottom 
              opacity-0 
              animation-delay-500
              ">Hello, it's Me</h3>
            <h1 
              className="
              sm:text-6xl
              text-4xl  
              font-bold 
              leading-tight  
              opacity-0 
              animation-delay-500 
              animate-toRight
              ">Andrey Tkachev</h1>
            <h3 
              className="
              sm:text-3xl
              text-2xl  
              font-bold
              opacity-0
              animate-toTop
              animation-delay-500
              ">And I'm a <span className="text-cyan-400" ref={element}></span></h3>
            <span className='
              sm:text-base
              text-sm 
              text-zinc-500
              opacity-0
              animate-toTop
              animation-delay-1000
              '>I'm from Moscow. I've been developing for 2 years.</span>
        </div>
     );
}
 
export default TypedJS;