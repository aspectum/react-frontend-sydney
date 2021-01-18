import CollapsibleList from '../../components/CollapsibleList/CollapsibleList'
import image from './analyzetools.png'
import './AnalyzeTools.css'


const items = [
    {
        title: 'Organize your data',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
        title: 'Always in sync',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
        title: 'Work with any team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
        title: 'Business analytics',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
]

function AnalyzeTools() {
    return (
        <div className='section-wrapper'>
            <div className='section-container'>
                <div className='a-tools content'>
                    <div className='image'>
                        <img src={image} alt=''></img>
                    </div>
                    <div className='description'>
                        <div className='margin-wrapper'>
                            <h2>Analyze Your Data With Our Analyze Tools</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <CollapsibleList items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyzeTools