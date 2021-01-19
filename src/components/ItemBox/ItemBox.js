import './ItemBox.css'

// Component consists of an icon and some text on the right side
function ItemBox(props) {
    const Icon = props.icon; // This way I can do <ItemBox icon={Whatever} /> instead of <ItemBox icon={<Whatever />} />

    return (
        <div className='item-box'>
            <div className={`icon ${props.className}`}>
                <Icon style={{width: props.iconWidth, height: props.iconHeight}}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

ItemBox.defaultProps = {
    className: "",
    iconWidth: "32px",
    iconHeight: "32px"
}

export default ItemBox