/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../components/logo.png'
import './Footer.css'

function Footer() {
    return (
        <div className='section-wrapper' id='footer'>
            <div className='section-container'>
                <div className='footer'>
                    <div className='col-wide'>
                        <img src={logo} alt='logo' />
                        <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida lacus vel facilisis.</p>
                        <div className='social-media'>
                            <div className='ico ico_color'><FontAwesomeIcon icon={faFacebookF} /></div>
                            <div className='ico ico_color'><FontAwesomeIcon icon={faTwitter} /></div>
                            <div className='ico ico_color'><FontAwesomeIcon icon={faYoutube} /></div>
                            <div className='ico ico_color'><FontAwesomeIcon icon={faInstagram} /></div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Company</h3>
                        <p><a href='#'>Company</a></p>
                        <p><a href='#'>About</a></p>
                        <p><a href='#'>Teams</a></p>
                        <p><a href='#'>Privacy Policy</a></p>
                    </div>
                    <div className='col'>
                        <h3>Products</h3>
                        <p><a href='#'>Pricing</a></p>
                        <p><a href='#'>Feature</a></p>
                        <p><a href='#'>Blog</a></p>
                        <p><a href='#'>Documentation</a></p>
                    </div>
                    <div className='col-wide'>
                        <h3>Contact info</h3>
                        <p><span className='ico_color'><FontAwesomeIcon icon={faMapMarkerAlt} /></span> 7176 Blue Spring Lane Santa Monica, CA 90403</p>
                        <p><span className='ico_color'><FontAwesomeIcon icon={faPhoneAlt} /></span> +01 123 456 888</p>
                        <p><span className='ico_color'><FontAwesomeIcon icon={faEnvelope} /></span> Sydney.support@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer