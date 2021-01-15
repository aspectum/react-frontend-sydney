import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import snippets from './snippets.png';
import './Snippets.css'

function Snippets() {
    return (
        <div className='section-wrapper'>
            <div className='snippets container'>
                <div className='screenshot'>
                    <img src={snippets} alt=''></img>
                </div>
                <div className='description'>
                    <h2>Simple, Intuitive And Easy To Use</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>The text should be more aligned and in a small</span></li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>Contrary to popular belief, Lorem Ipsum is not simply</span></li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>All the Lorem Ipsum generators on the Internet tend</span></li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>Sed ut perspiciatis unde omnis iste natus error sit</span></li>
                        <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>All the Lorem Ipsum generators on the Internet tend</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Snippets