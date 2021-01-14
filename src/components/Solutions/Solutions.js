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
        <div className='section-wrapper'>
            <div className='container tc'>
                <h2>Our Solution For You</h2>
                <p>Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className='row'>
                    <div className='col'>
                        <div className='item'>
                            <div className='icon'>
                                <img src={paintbrush} alt='' width='32' height='32'></img>
                            </div>
                            <div className='description'>
                                <h3>Professional tools</h3>
                                <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <img src={shield} alt='' width='32' height='32'></img>
                            </div>
                            <div className='description'>
                                <h3>App integration</h3>
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
                                <h3>Fully customizable</h3>
                                <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <img src={hand} alt='' width='32' height='32'></img>
                            </div>
                            <div className='description'>
                                <h3>Easy to use</h3>
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
                                <h3>Saved to the cloud</h3>
                                <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <img src={megaphone} alt='' width='32' height='32'></img>
                            </div>
                            <div className='description'>
                                <h3>Maketing</h3>
                                <p>Ipsum pendisse ultrices gravida accumsan lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions