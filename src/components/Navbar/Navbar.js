/* eslint-disable jsx-a11y/anchor-is-valid */
// Disabling linting for href=#
import React from 'react';
import logo from './logo.png' // the image changes color slightly, but I don't know why
import './Navbar.css'

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            nav_scrolled: false
        }
    }

    handleScroll = () => { // Animating navbar movement once scrolled a bit
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
            <div className={`navbar ${this.state.nav_scrolled ? 'scrolled' : ''}`}>
                <div className='container flex'>
                    <img src={logo} alt='logo' />
                    <nav>
                        <ul className='flex'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a className='button' href='#'>Start Free Trial</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar