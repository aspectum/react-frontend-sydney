import Collapsible from 'react-collapsible'
import image from './analyzetools.png'

// https://www.npmjs.com/package/react-collapsible

function AnalyzeTools() {
    return (
        <div className='section-wrapper'>
            <div className='flex'>
                <div>
                    <img src={image} alt=''></img>
                </div>
                <div>
                    <h2>Analyze Your Data With Our Analyze Tools</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <Collapsible trigger='Organize your data'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Collapsible>
                        <Collapsible trigger='Always in sync'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Collapsible>
                        <Collapsible trigger='Work with any team'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Collapsible>
                        <Collapsible trigger='Business analytics'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Collapsible>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyzeTools