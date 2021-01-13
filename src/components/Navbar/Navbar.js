import logo from './logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className='container flex fixed'>
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
    );
}

export default Navbar