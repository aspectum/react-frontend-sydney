import ButtonAppStore from '../../components/ButtonAppStore/ButtonAppStore'
import ButtonGooglePlay from '../../components/ButtonGooglePlay/ButtonGooglePlay'
import './DownloadApp.css'

function DownloadApp() {
    return (
        <div className='section-wrapper' id='downloadapp'>
            <div className='section-container'>
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