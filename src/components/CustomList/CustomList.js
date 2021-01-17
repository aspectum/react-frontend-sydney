import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './CustomList.css'

const list_item = text => <li><FontAwesomeIcon icon={faCheck} className='icon-check' /><span>{text}</span></li>

function CustomList(props) {
    return (
        <ul className='custom-list'>
            { props.items.map(text => list_item(text)) }
        </ul>
    )
}

export default CustomList