import analyze from './analyze.svg'
import cloud from './cloud_arrows.svg'
import hand from './hand_dots.svg'
import './Tools.css'

function Tools() {
    return (
        <div className='section-wrapper'>
            <div className='flex'>
                <div>
                    <h2>Work Faster With Powerful Tools.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button>Start Free Trial</button>
                </div>
                <div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={analyze} alt='' width='36' height='36'></img>
                        </div>
                        <div className='description'>
                            <h3>Analyze Your Data</h3>
                            <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={cloud} alt='' width='36' height='36'></img>
                        </div>
                        <div className='description'>
                            <h3>Embedded Analytics</h3>
                            <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={hand} alt='' width='36' height='36'></img>
                        </div>
                        <div className='description'>
                            <h3>Easy and Intuitive</h3>
                            <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools