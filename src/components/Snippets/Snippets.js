import snippets from './snippets.png';

function Snippets() {
    return (
        <div className='section-wrapper'>
            <div className='flex tc'>
                <div>
                    <img src={snippets} alt=''></img>
                </div>
                <div>
                    <h2>Simple, Intuitive And Easy To Use</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <ul>
                        <li>The text should be more aligned and in a small</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                        <li>All the Lorem Ipsum generators on the Internet tend</li>
                        <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                        <li>All the Lorem Ipsum generators on the Internet tend</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Snippets