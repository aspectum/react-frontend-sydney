import './Button.css'

// Simple Button component
function Button(props) {
    return (
        <a 
            href={props.href}
            id={props.id}
            className={`button ${props.className}`}
        >
            {props.text}
        </a>
    )
}

Button.defaultProps = {
    href: "#",
    id: "",
    className: "",
}

export default Button