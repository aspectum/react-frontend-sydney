import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './analyzetools.png'
import './AnalyzeTools.css'
import { faPlus, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

// https://www.npmjs.com/package/react-collapsible
// Quite messy, maybe should make new component

function AnalyzeTools() {
    return (
        <div className='section-wrapper'>
            <div className='a-tools content'>
                <div className='image'>
                    <img src={image} alt=''></img>
                </div>
                <div className='description'>
                    <div className='margin-wrapper'>
                        <h2>Analyze Your Data With Our Analyze Tools</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div>
                            <Collapsible trigger={
                                <div>
                                    <span className='wrapper'>
                                        <span>Organize your data</span>
                                        <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                                        <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
                                    </span>
                                </div>
                            }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={
                                <div>
                                    <span className='wrapper'>
                                        <span>Always in sync</span>
                                        <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                                        <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
                                    </span>
                                </div>
                            }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={
                                <div>
                                    <span className='wrapper'>
                                        <span>Work with any team</span>
                                        <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                                        <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
                                    </span>
                                </div>
                            }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={
                                <div>
                                    <span className='wrapper'>
                                        <span>Business analytics</span>
                                        <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                                        <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
                                    </span>
                                </div>
                            }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyzeTools