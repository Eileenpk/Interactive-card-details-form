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
  

  // trying to add a space between every fourth number in formData. cardNumber
  //let num = [1,2,3,4,5,6,7,8,9,0]
  let num =123456789

  // for(let i = 0; i < num.length; i++) {
  //   if(i % 4 == 0) {
  //     console.log(num.charAt(i))
  //   }
  // }

  // index = 4
  // const addSpace = ' '
  //   let correctIndex = num.char(index % 4 == 0)
  //   if(correctIndex % 4 == 0) {
  //     num.splice(correctIndex, 0, addSpace)
  //     console.log(num)
  //   } 


  // const addSpace = num.map((number, index) => {
  //   const addSpace = ' '
  //   let correctIndex = index + 1
  //   if(correctIndex % 4 == 0) {
      
  //     num.splice(correctIndex, 0, addSpace)
  //     console.log(num)
  //   } 
  // })

  
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
      formData={formData}
      />
      <Form 
        formData={formData}
        handleInput={handleInput}
      />
    </div>
  )
}

export default App
