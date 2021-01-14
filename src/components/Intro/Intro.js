/* eslint-disable jsx-a11y/anchor-is-valid */
import screencap from './screencap.png';
import './Intro.css'

function Intro() {
    return (
        <div className='section-wrapper'>
            <div className='intro tc container'>
                <h1>Smart Tool Manage Your Business</h1>
                <p>Sydney brings plenty of customization possibilities like access to all Google Fonts, full color control, layout control, logo upload, full screen slider, header image, sticky navigation and much more.</p>
                <div>
                    <a href='#' className='button'>Start Free Trial</a>
                    <a href='#' className='button btn-2'>See Pricing</a>
                </div>
                <div>
                    <img src={screencap} alt='screencap' width='100%'></img>
                </div>
            </div>
        </div>
    );
}

export default Intro