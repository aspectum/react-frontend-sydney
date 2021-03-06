/* eslint-disable jsx-a11y/anchor-is-valid */
// Disabling linting for href='#'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';
import logo from '../logo.png' // the image changes color slightly, but I don't know why
import './Navbar.css'

// Navbar component
class Navbar extends React.Component {

    // State tracks if page scrolled enough for animation and
    // if menu button was clicked (small screens)
    constructor() {
        super()
        this.state = {
            nav_scrolled: false,
            menu_open: false
        }
    }

    // Animating navbar movement once scrolled a bit
    handleScroll = () => {
        if (window.scrollY > 60) { // amount of px scrolled
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

    // Handling the menu opening when clicking button (for small screens)
    handleMenuBtnClick = () => {
        if (!this.state.menu_open) {
            this.setState({ menu_open: true })
        }
        if (this.state.menu_open) {
            this.setState({ menu_open: false })
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <nav className={`navbar ${this.state.nav_scrolled ? 'scrolled' : ''}`}>
                <div className='container'>
                    <img src={logo} alt='logo' />
                    <div className='menu-btn' onClick={this.handleMenuBtnClick}>
                        <FontAwesomeIcon icon={faBars} className='icon-check' />
                    </div>
                    <div className={`menu ${this.state.menu_open ? 'menu-open' : ''}`}>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li id='btn'><Button id='navbar-btn' className='btn-2' text='Start Free Trial' /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar