import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonAppStore.css'

// A button for the app in the App Store. Currently not leading anywhere.
function ButtonAppStore() {
    return (
        <div className='button-app-store'>
            <div className='store_icon'>
                <FontAwesomeIcon icon={faApple} />
            </div>
            <div>
                <p style={{fontSize: '14px', fontWeight: '300'}}>Download on the</p>
                <p style={{fontSize: '22px', fontWeight: '600'}}>App Store</p>
            </div>
        </div>
    )
}

export default ButtonAppStore