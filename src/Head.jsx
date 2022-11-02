import cardBack from './assets/bg-card-back.png'
import cardFront from './assets/bg-card-front.png'
export default function Head({formData, formattedCardNumber}) {
    const {name, cardNumber, month, year, cvc} = formData
    return (
        <header>
            <div className='header--cards_image_container'>
                <div className="header--image_container_back "><img className='header--card_back' src={cardBack} alt="back of credit card" />
                <p className='header--security_numbers'>{!cvc ? '000' : cvc}</p>
                </div>
                <div className="header--image_container_front ">
                    <img className='header--card_front' src={cardFront} alt="front of credit card" /> 
                    <div className="header--circle_large"></div>
                    <div className="header--circle_small"></div>
                    <div className='header--card_info_container'>
                        <p className='header--card_numbers'>{!cardNumber ? '0000 0000 0000 0000' : formattedCardNumber}</p>
                        <div className='header--card_name_and_expiration_date_container'>
                            <p className='header--card_name'>{!name ? 'jane appleseed' : name}</p>
                            <p className='header--expiration_date'>{!month ? '00/' : `${month}/`}{!year ? '00' : `${year}`}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </header>
    )
}