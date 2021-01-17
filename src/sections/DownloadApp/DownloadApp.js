import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DownloadApp.css'

function DownloadApp() {
    return (
        <div className='downloadapp-wrapper'>
            <div className='section-wrapper'>
                <div className='downloadapp container'>
                    <h2>Start Your 7 Days Free Trial!</h2>
                    <p>SYDNEY is Just What Your Business Needs  adipiscing elit ut elit tellus luctus</p>
                    <div className='stores'>
                        <div className='button'>
                            <div className='store_icon'>
                                <FontAwesomeIcon icon={faApple} color='#FFFFFF' />
                            </div>
                            <div>
                                <p style={{fontSize: '14px', fontWeight: '300'}}>Download on the</p>
                                <p style={{fontSize: '22px', fontWeight: '600'}}>App Store</p>
                            </div>
                        </div>
                        <div className='button btn2'>
                            <div className='store_icon'>
                                <FontAwesomeIcon icon={faGooglePlay} />
                            </div>
                            <div>
                                <p style={{fontSize: '14px', fontWeight: '300'}}>Download on the</p>
                                <p style={{fontSize: '22px', fontWeight: '600'}}>Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp