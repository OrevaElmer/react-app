// credits:
// Tyler Potts youtube channel

import React from 'react'
import { useState } from 'react'
import "./app.css"

export default function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const digits = () =>{
    let digit = []

    for(let i = 1; i<10; i++){
      digit.push(<button onClick={()=> handleClick(i.toString())}>{i}</button>)
    }
    return digit
  }
  const operator = ["*","/","-","+"]

  const handleClick = (value)=>{
    if(operator.includes(value) && calc===""){
      return
    }else if(operator.includes(value) && operator.includes(calc.slice(-1))){
       return setCalc(calc.slice(0, -1) + value)
    }
    
    setCalc(calc + value)

    if(!operator.includes(value)){
      return setResult(eval(calc + value).toString())
    }
  }
  
  const totalResult = () =>{
    setCalc(eval(calc).toString())
  }
  const delDigit = () =>{
    setCalc(calc.slice(0,-1))
  }
  return (
    <div className="app">
      <div className="calculator">
        <h3>elmtech simple calculator</h3>
        <div className="display">
          {result && <span>({result})</span>} {calc || 0}
        </div>
        <div className="operators">
          <button onClick={()=> handleClick("*")}> * </button>
          <button onClick={()=> handleClick("/")}> / </button>
          <button onClick={()=> handleClick("-")}> - </button>
          <button onClick={()=> handleClick("+")}> + </button>
          <button onClick={()=> delDigit()}> DEL </button>
        </div>
        <div className="digits">
          {digits()}
          <button onClick={()=> handleClick("0")} className='zero'> 0 </button>
          <button onClick={()=> handleClick(".")}> . </button>
          <button onClick={()=> totalResult()} className='equal'> = </button>
        </div>
      </div>
    </div>
  )
}
