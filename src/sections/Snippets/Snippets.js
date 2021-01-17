import CustomList from '../../components/CustomList/CustomList';
import snippets from './snippets.png';
import './Snippets.css'

const items = [
    'The text should be more aligned and in a small',
    'Contrary to popular belief, Lorem Ipsum is not simply',
    'All the Lorem Ipsum generators on the Internet tend',
    'Sed ut perspiciatis unde omnis iste natus error sit',
    'All the Lorem Ipsum generators on the Internet tend',
]

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
                    <CustomList items={items} />
                </div>
            </div>
        </div>
    );
}

export default Snippets