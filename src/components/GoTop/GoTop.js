import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './GoTop.css'

// Component of go to top button
class GoTop extends React.Component {

    // State is if page scrolled enough to show button
    constructor() {
        super()
        this.state = {
            scrolled: false
        }
    }

    // Sets the state when scrolled enough
    handleScroll = () => {
        if (window.scrollY > 600) { // amount of px before shows button
            if (!this.state.scrolled) {
                this.setState({ scrolled: true })
            }
        }
        else {
            if (this.state.scrolled) {
                this.setState({ scrolled: false })
            }
        }
    }

    // Method to scroll up when clicked
    handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className={`go-top ${this.state.scrolled ? 'showing' : ''}`} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
        )
    }
}

export default GoTop