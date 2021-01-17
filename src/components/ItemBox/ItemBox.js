import './ItemBox.css'

function ItemBox(props) {
    const Icon = props.icon; // This way I can do <ItemBox icon={Whatever} /> instead of <ItemBox icon={<Whatever />} />

    return (
        <div className='item-box'>
            <div className={`icon ${props.className}`}>
                <Icon />
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
}

export default ItemBox