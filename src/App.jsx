import React from 'react'
import './App.css'
import ComingSoon from './ComingSoon'

const App = () => {
  return (
    <div id="root" className="bg-gray-700 h-screen">
      <h1 className="text-6xl text-center font-bold underline">Snowbits</h1>
      <ComingSoon />
    </div>
  )
}

export default App