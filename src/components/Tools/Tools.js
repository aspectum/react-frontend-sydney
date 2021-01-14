import analyze from './analyze.svg'
import cloud from './cloud_arrows.svg'
import hand from './hand_dots.svg'
import './Tools.css'

function Tools() {
    return (
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
                        <p className='f4'>Analyze Your Data</p>
                        <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <img src={cloud} alt='' width='36' height='36'></img>
                    </div>
                    <div className='description'>
                        <p className='f4'>Embedded Analytics</p>
                        <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon'>
                        <img src={hand} alt='' width='36' height='36'></img>
                    </div>
                    <div className='description'>
                        <p className='f4'>Easy and Intuitive</p>
                        <p>Click edit button to change this text lorem ipsum dolor sit amet tellus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools