import { useState, useEffect } from 'react'
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
  const [formattedCardNumber, setFormattedCardNumber] = useState('')
// code I'm proud of *** thank you stack overflow!! ***
  useEffect(() => {
    setFormattedCardNumber(prevFormat => {
         prevFormat = formData.cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
        return prevFormat
    })
  },[formData.cardNumber])
  
  const handleInput = (event) => {
    const {name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div className="App">
      <Head 
      formattedCardNumber={formattedCardNumber}
      formData={formData}
      />
      <Form 
        formattedCardNumber={formattedCardNumber}
        formData={formData}
        handleInput={handleInput}
      />
    </div>
  )
}

export default App
