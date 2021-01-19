import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonGooglePlay.css'

// A button for the app in Google Play. Currently not leading anywhere.
function ButtonGooglePlay() {
    return (
        <div className='button-google-play'>
            <div className='store_icon'>
                <FontAwesomeIcon icon={faGooglePlay} />
            </div>
            <div>
                <p style={{fontSize: '14px', fontWeight: '300'}}>Download on the</p>
                <p style={{fontSize: '22px', fontWeight: '600'}}>Google Play</p>
            </div>
        </div>
    )
}

export default ButtonGooglePlay