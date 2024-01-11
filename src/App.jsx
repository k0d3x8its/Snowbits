import React from 'react'
import './App.css'
import ComingSoon from './Components/ComingSoon'

const App = () => {

  return (
    <div className="bg-gradient-to-b from-red-950 from-10% to-gray-900 to-70% min-h-screen text-center flex flex-col">
      <h1 className="font-bold text-6xl flex item-center justify-center">
          <span className="text-white pt-14 pl-4">
            <u>Snow</u>
          </span>
          <span className="text-avax-red pt-14">
            <u>Bits</u>
          </span>
      </h1>
      <ComingSoon />
    </div>
    
  )
}

export default App