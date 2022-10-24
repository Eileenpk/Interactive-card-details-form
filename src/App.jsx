import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Head from './Head'
import Form from './Form'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year:'',
    cvc: ''
  })

  const handleInput = () => {
    console.log('input handled!')
  }

  return (
    <div className="App">
      <Head />
      <Form 
        formData={formData}
        handleInput={handleInput}
      />
    </div>
  )
}

export default App
