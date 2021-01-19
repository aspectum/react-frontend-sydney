import Button from '../../components/Button/Button'
import ItemBox from '../../components/ItemBox/ItemBox'
import { ReactComponent as Analyze } from './analyze.svg'
import { ReactComponent as CloudArrows } from './cloud_arrows.svg'
import { ReactComponent as HandDots } from './hand_dots.svg'
import './Tools.css'

function Tools() {
    return (
        <div className='section-wrapper' id='tools'>
            <div className='section-container'>
                <div className='tools'>
                    <div className='desc_section'>
                        <div className='desc_section_inner'>
                            <h2>Work Faster With Powerful Tools.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <Button text='Start Free Trial'/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='card card-pos-1'>
                            <ItemBox className='icon-alt' icon={Analyze} iconWidth='36px' iconHeight='36px' title='Analyze Your Data' desc='Click edit button to change this text lorem ipsum dolor sit amet tellus.' />
                        </div>
                        <div className='card card-pos-2'>
                            <ItemBox icon={CloudArrows} iconWidth='36px' iconHeight='36px' title='Embedded Analytics' desc='Click edit button to change this text lorem ipsum dolor sit amet tellus.' />
                        </div>
                        <div className='card card-pos-3'>
                            <ItemBox className='icon-alt' icon={HandDots} iconWidth='36px' iconHeight='36px' title='Easy and Intuitive' desc='Click edit button to change this text lorem ipsum dolor sit amet tellus.' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools