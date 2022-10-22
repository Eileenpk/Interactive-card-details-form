import cardBack from './assets/bg-card-back.png'
import cardFront from './assets/bg-card-front.png'
export default function Head() {
    
    return (
        <header>
            <div className="head--image_container_back "><img className='card-back' src={cardBack} alt="back of credit card" /></div>
            <div className="head--image_container_front ">
                <img className='card-front' src={cardFront} alt="front of credit card" /> 
                <div className="circle-large"></div>
                <div className="circle-small"></div>
                <div className='header--card_info_container'>
                    <p className='header--card_numbers'>0000 0000 0000 0000</p>
                    <p className='header--card_name'>jane appleseed</p>
                </div>
                
            </div>
        </header>
    )
}