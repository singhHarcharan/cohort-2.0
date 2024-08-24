import React from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount"} amount={"92,123.23"} orderCount={13} />
    </div>
    // <h1>Hello</h1>
  )
}

export default App
