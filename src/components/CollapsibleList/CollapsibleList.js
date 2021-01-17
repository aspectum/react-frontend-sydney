import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import './CollapsibleList.css'

// https://www.npmjs.com/package/react-collapsible

const list_item = (item) => {
    return (
        <>
            <Collapsible trigger={
                <span className='title-wrapper'>
                    <span>{item.title}</span>
                    <span className='plus'><FontAwesomeIcon icon={faPlus} color='#7575DA' /></span>
                    <span className='minus'><FontAwesomeIcon icon={faWindowMinimize} color='#7575DA' /></span>
                </span>
            }>
                {item.text}
            </Collapsible>
            <hr></hr>
        </>
    )
}


function CollapsibleList(props) {
    return (
        <div className='collapsible-list'>
            { props.items.map(item => list_item(item)) }
        </div>
    )
}

export default CollapsibleList