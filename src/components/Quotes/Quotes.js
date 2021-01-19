import './Quotes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

/* Component returns a card with a quote text and the person who said it */
function Quotes(props) {
    return (
        <div className='quote'>
            <div className='card'>
                <p className='quote-symbol'><FontAwesomeIcon icon={faQuoteLeft} color='#7575DA' /></p>
                <p className='quote-text'>{props.quote}</p>
                <div className='person'>
                    <div className='portrait'>
                        <img src={props.person.portrait} alt='' width='60px' height='60px'></img>
                    </div>
                    <div className='who'>
                        <h3>{props.person.name}</h3>
                        <p>{props.person.job}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes