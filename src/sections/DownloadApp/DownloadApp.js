import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonAppStore from '../../components/ButtonAppStore/ButtonAppStore'
import ButtonGooglePlay from '../../components/ButtonGooglePlay/ButtonGooglePlay'
import './DownloadApp.css'

function DownloadApp() {
    return (
        <div className='downloadapp-wrapper'>
            <div className='section-wrapper'>
                <div className='downloadapp container'>
                    <h2>Start Your 7 Days Free Trial!</h2>
                    <p>SYDNEY is Just What Your Business Needs  adipiscing elit ut elit tellus luctus</p>
                    <div className='stores'>
                        <ButtonAppStore />
                        <ButtonGooglePlay />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp