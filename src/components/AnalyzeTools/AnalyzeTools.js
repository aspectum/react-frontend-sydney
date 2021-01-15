import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from './analyzetools.png'
import './AnalyzeTools.css'
import { faPlus, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

// https://www.npmjs.com/package/react-collapsible

function collapsible_header(header_text) {
    return (
        <div>
            <span className='wrapper'>
                <span>{header_text}</span>
                <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
            </span>
        </div>
    )
}

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
                            <Collapsible trigger={collapsible_header('Organize your data')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={collapsible_header('Always in sync')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={collapsible_header('Work with any team')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Collapsible>
                            <hr></hr>
                            <Collapsible trigger={collapsible_header('Business analytics')}>
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