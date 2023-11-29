import React from 'react'
import './App.css'
import ComingSoon from './Components/ComingSoon'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="bg-gray-700 h-screen text center">
      <h1 className="text-6xl font-bold underline flex items-center justify-center h-screen pb-96">Snowbits</h1>
      <ComingSoon />
    </div>
  )
}

export default App