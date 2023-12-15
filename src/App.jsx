import React from 'react'
import './App.css'
import ComingSoon from './Components/ComingSoon'
import avaxflakeCircuit from './assets/avaxflakeCircuit.png'



const App = () => {

  return (
    <div className="bg-gray-700 h-screen text center flex flex-col">
      <h1 className="font-bold text-6xl flex item-center justify-center">
          <span className="text-white pt-14 pl-4">
            <u>Snow</u>
          </span>
          <span className="text-avax-red pt-14">
            <u>Bits</u>
          </span>
      </h1>
      <div>
        <img 
          src={avaxflakeCircuit} 
          alt="avaxflake cicruit"
          className="object-contain h-96 w-96 mx-auto" 
        />
      </div>
      <ComingSoon />
    </div>
    
  )
}

export default App