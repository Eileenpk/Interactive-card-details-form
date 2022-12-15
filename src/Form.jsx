export default function Form({formData, handleInput, formattedCardNumber, handleSubmit, formErrors}) {
    const {name, month, year, cvc} = formData
    
    return (
        <form aria-label="credit card form">
            <label htmlFor="name" className="form--name_label"
            >Cardholder Name</label>
            <input 
                className="form--name_input"
                name='name'
                value={name}
                id='name'
                aria-label="name"
                onChange={handleInput}
                placeholder='e.g. Jane Appleseed'
            />
            <div className="form--error">{formErrors.name}</div>
            <label htmlFor="cardNumber" className="form--cardNumber_label"
            >Card Number</label>
            <input 
                className="form--card_number_input"
                name='cardNumber'
                value={formattedCardNumber}
                id='cardNumber'
                aria-label="cardNumber"
                onChange={handleInput}
                placeholder='e.g. 1234 5678 9123 0000'
                maxLength={19}
            />
            <div className="form--error">{formErrors.cardNumber}</div>
            <div className="form--exp_container">
                <div className="form--month_container">
                    <label htmlFor="month" className="form--month_label"
                    >EXP.DATE</label>
                    <input 
                        className="form--month_input"
                        name='month'
                        value={month}
                        id='month'
                        aria-label="month"
                        onChange={handleInput}
                        placeholder='MM'
                        maxLength={2}
                    />
                  <div className="form--error">{formErrors.month}</div>
                </div>
            
                <div className="form--month_container">
                <label htmlFor="year" className="form--year_label"
                >MM/YY</label>
                    <input 
                        className="form--year_input"
                        name='year'
                        value={year}
                        id='year'
                        aria-label="year"
                        onChange={handleInput}
                        placeholder='YY'
                        maxLength={2}
                    />
                <div className="form--error">{formErrors.year}</div>
                </div>
                <div className="form--cvc_container">
                    <label htmlFor="cvc" className="form--cvc_label"
                        >CVC</label>
                    <input 
                        className="form--cvc_input"
                        name='cvc'
                        value={cvc}
                        id='cvc'
                        aria-label="cvc"
                        onChange={handleInput}
                        placeholder='e.g. 123'
                        maxLength={3}
                    />
                    <div className="form--error">{formErrors.cvc}</div>
                </div>
            </div>
            <button onClick={handleSubmit} className='form--submit_btn' aria-label="confirm button">Confirm</button>
        </form>
    )
}