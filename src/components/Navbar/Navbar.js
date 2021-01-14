import React from 'react';
import logo from './logo.png'
import './Navbar.css'

// usar section-wrapper?

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            nav_scrolled: false
        }
    }


    handleScroll = () => {
        if (window.scrollY > 60) {
            if (!this.state.nav_scrolled) {
                this.setState({ nav_scrolled: true })
            }
        }
        else {
            if (this.state.nav_scrolled) {
                this.setState({ nav_scrolled: false })
            }
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className={`navbar wrapper ${this.state.nav_scrolled && 'scrolled'}`}>
                <div className='navbar container flex'>
                    <img src={logo} alt='logo' />
                    <nav>
                        <ul className='flex'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li><button>Start Free Trial</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar