
export default function Form({formData, handleInput, formattedCardNumber}) {
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
                minLength={19}
            />

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
                        minLength={2}
                    />
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
                        minLength={2}
                    />
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
                </div>
            </div>
            
        </form>
    )
}