import Button from '../../components/Button/Button';
import screencap from './screencap.png';
import './Intro.css'

function Intro() {
    return (
        <div className='section-wrapper'>
            <div className='section-container'>
                <div className='intro tc container'>
                    <h1>Smart Tool Manage Your Business</h1>
                    <p>Sydney brings plenty of customization possibilities like access to all Google Fonts, full color control, layout control, logo upload, full screen slider, header image, sticky navigation and much more.</p>
                    <div>
                        <Button text='Start Free Trial' />
                        <Button className='btn-2' text='See Pricing' />
                    </div>
                    <div>
                        <img src={screencap} alt='screencap' width='100%'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro