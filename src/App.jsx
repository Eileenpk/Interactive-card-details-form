import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Head from './Head'
import Form from './Form'

function App() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    month: '',
    year:'',
    cvc: '',
    name: ''
  })
  const [formattedCardNumber, setFormattedCardNumber] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
// code I'm proud of *** thank you stack overflow!! ***
  useEffect(() => {
    setFormattedCardNumber(prevFormat => {
         prevFormat = formData.cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
        return prevFormat
    })
  },[formData.cardNumber])
  
  const handleInput = (e) => {
    const {name, value } = e.target
		if (name === "month" || name === "year") e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2)
		if (name === "month" && value > 12) e.target.value = "12"
		if (name === "cvc") e.target.value = value.substring(0, 3)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: e.target.value
      }
    })
  }

  function containsOnlyNumbers(str) {
    const removedSpaces = str.replace(/\s/g, '')
    return /^\d+$/.test(removedSpaces);
}
const [onlyNumbers, setOnlyNumbers] = useState(true)
useEffect(()=> {
if(formData.cardNumber.length > 0) {
    setOnlyNumbers(containsOnlyNumbers(formData.cardNumber))
}
}, [formData.cardNumber])
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }
  return (
    <div className="App">
      <Head 
      formattedCardNumber={formattedCardNumber}
      formData={formData}
      />
      <Form 
        onlyNumbers={onlyNumbers}
        formSubmitted={formSubmitted}
        handleSubmit={handleSubmit}
        formattedCardNumber={formattedCardNumber}
        formData={formData}
        handleInput={handleInput}
      />
    </div>
  )
}

export default App
