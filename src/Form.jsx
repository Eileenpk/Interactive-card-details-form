import {useState, useEffect} from 'react'
export default function Form({formData, handleInput, formattedCardNumber, handleSubmit, formSubmitted, onlyNumbers}) {
    const {name, cardNumber, month, year, cvc} = formData
    return (
        <form >
            <label htmlFor="name" className="form--name_label"
            aria-labelledby="name">Cardholder Name</label>
            <input 
                className="form--name_input"
                name='name'
                value={name}
                id='name'
                aria-label="name"
                onChange={handleInput}
                placeholder='e.g. Jane Appleseed'
            />
            {formSubmitted && name.length <= 0 && <div className="form--error">Name can't be blank</div>}
            <label htmlFor="cardNumber" className="form--cardNumber_label"
            aria-labelledby="cardNumber">Card Number</label>
            <input 
                className="form--card_number_input"
                name='cardNumber'
                value={formattedCardNumber}
                id='cardNumber'
                aria-label="cardNumber"
                onChange={handleInput}
                placeholder='e.g. 1234 5678 9123 0000'
            />
            {formSubmitted && cardNumber.length !== 19 && <div className="form--error">Card number length must be 16</div>}
            {formSubmitted && !onlyNumbers && <div className="form--error">Wrong format, numbers only</div>}
            <div className="form--exp_container">
                <div className="form--month_container">
                    <label htmlFor="month" className="form--month_label"
                    aria-labelledby="month">EXP.DATE</label>
                    <input 
                        className="form--month_input"
                        name='month'
                        value={month}
                        id='month'
                        aria-label="month"
                        onChange={handleInput}
                        placeholder='MM'
                    />
                    {formSubmitted && month.length !== 2 && <div className="form--error">Can't be blank</div>}
                </div>
            
                <div className="form--month_container">
                <label htmlFor="year" className="form--year_label"
                aria-labelledby="year">MM/YY</label>
                    <input 
                        className="form--year_input"
                        name='year'
                        value={year}
                        id='year'
                        aria-label="year"
                        onChange={handleInput}
                        placeholder='YY'
                    />
                    {formSubmitted && year.length !== 2 && <div className="form--error">Can't be blank</div>}
                </div>
                <div className="form--cvc_container">
                    <label htmlFor="cvc" className="form--cvc_label"
                        aria-labelledby="cvc">CVC</label>
                    <input 
                        className="form--cvc_input"
                        name='cvc'
                        value={cvc}
                        id='cvc'
                        aria-label="cvc"
                        onChange={handleInput}
                        placeholder='e.g. 123'
                        minLength={3}
                    />
                    {formSubmitted && cvc.length !== 3 && <div className="form--error">Can't be blank</div>}
                </div>
            </div>
            <button onClick={handleSubmit} className='form--submit_btn'>Confirm</button>
        </form>
    )
}