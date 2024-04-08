import React, { useState } from 'react'
import Button from './components/Button'
import Form from './components/Form'
const App = () => {
  const [counter,setCounter]=useState(0)
  return (
    <div className='wrapper'>
    <span>Counter:{counter}</span>
    <Button setCounter={setCounter} />
    <Form/>
    </div>
  )
}

export default App