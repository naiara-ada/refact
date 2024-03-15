import { useState } from 'react'

function Calculator (){
    const [num1, setNum1] = useState(0) 
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
 
   const getSum = () =>{
     const parseNum1 = parseInt(num1);
     const parseNum2 = parseInt(num2);
     setResult(parseNum1 + parseNum2);    
   }
   const getRes = () =>{
     const parseNum1 = parseInt(num1);
     const parseNum2 = parseInt(num2);
     setResult(parseNum1 - parseNum2);    
   }
   const getMul = () =>{
     const parseNum1 = parseInt(num1);
     const parseNum2 = parseInt(num2);
     setResult(parseNum1 * parseNum2);    
   }
   const getDiv = () =>{
     const parseNum1 = parseInt(num1);
     const parseNum2 = parseInt(num2);
     setResult(parseNum1 / parseNum2);    
   }
 
    return(
        <div className='calculator'>
            <h3>Calculadora</h3>
            <div className='inputs'>
              Numero 1<input type="number" value={num1} onChange={(event) => setNum1(event.target.value)} />
              Numero 2<input type="number" value={num2} onChange={(event) => setNum2(event.target.value)} />
              Resultado<input type="text" value={result} readOnly={true}/>
            </div>
        
            <div className='btns'>
              <button onClick={getSum}>Suma</button>
              <button onClick={getRes}>Resta</button>
              <button onClick={getMul}>Multiplicar</button>
              <button onClick={getDiv}>Dividir</button>
            </div>


      </div>
    )          
}

export default Calculator