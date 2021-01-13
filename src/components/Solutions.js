import cloud from './cloud.svg'
import cog from './cog.svg'
import hand from './hand.svg'
import megaphone from './megaphone.svg'
import paintbrush from './paintbrush.svg'
import shield from './shield.svg'
import './Solutions.css'

// Icons obtained by copying the markup in original page and using https://jakearchibald.github.io/svgomg/

function Solutions() {
    return (
        <div className='container tc'>
            <h1 className='f1'>Our Solution For You</h1>
            <p>Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</p>
            <div className='row'>
                <div className='col'>
                    <div className='item'>
                        <div className='icon'>
                            <img src={paintbrush} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p className='f4'>Professional tools</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={shield} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p>App integration</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='item'>
                        <div className='icon'>
                            <img src={cog} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p>Fully customizable</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={hand} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p>Easy to use</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='item'>
                        <div className='icon'>
                            <img src={cloud} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p>Saved to the cloud</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={megaphone} alt='' width='32' height='32'></img>
                        </div>
                        <div className='description'>
                            <p>Maketing</p>
                            <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions