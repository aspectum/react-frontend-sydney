import ItemBox from '../../components/ItemBox/ItemBox';
import { ReactComponent as Cloud } from './cloud.svg'
import { ReactComponent as Cog } from './cog.svg'
import { ReactComponent as Hand } from './hand.svg'
import { ReactComponent as Megaphone } from './megaphone.svg'
import { ReactComponent as Paintbrush } from './paintbrush.svg'
import { ReactComponent as Shield } from './shield.svg'
import './Solutions.css'

// Icons obtained by copying the markup in original page and using https://jakearchibald.github.io/svgomg/

function Solutions() {
    return (
        <div className='section-wrapper'>
            <div className='section-container'>
                <div className='solutions container'>
                    <div className='tc'>
                        <h2>Our Solution For You</h2>
                        <p>Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <ItemBox icon={Paintbrush} title='Professional tools' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                            <ItemBox className='icon-alt' icon={Shield} title='App integration' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                        </div>
                        <div className='col'>
                            <ItemBox className='icon-alt' icon={Cog} title='Fully customizable' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                            <ItemBox icon={Hand} title='Easy to use' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                        </div>
                        <div className='col'>
                            <ItemBox icon={Cloud} title='Saved to the cloud' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                            <ItemBox className='icon-alt' icon={Megaphone} title='Marketing' desc='Ipsum pendisse ultrices gravida accumsan lacus.' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solutions