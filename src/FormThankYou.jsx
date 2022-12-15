import Head from './Head'
export default function FormThankYou () {
    const handleClick = () => {
        location.reload()
    }
    return (
        <section className='thank-you'>
            <img src='src\assets\icon-complete.svg'></img>
            <h1>THANK YOU!</h1>
            <h2>We've added your card details</h2>
            <button className='form--submit_btn' aria-label='continue button' onClick={handleClick}>Continue</button>
        </section>
    )
}