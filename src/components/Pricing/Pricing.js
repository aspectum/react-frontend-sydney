import Button from '../Button/Button'
import { ReactComponent as Stars } from './stars.svg'
import './Pricing.css'

function Pricing() {
    return (
        <div className='section-wrapper'>
            <div className='pricing'>
                <h2>Get In Reasonable Pricing Plan</h2>
                <p>Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className='row'>
                    <div className='col col_personal'>
                        <h4>Personal</h4>
                        <h1>$35</h1>
                        <strong>Per month</strong>
                        <hr></hr>
                        <p>5GB Storage</p>
                        <p>500 Users</p>
                        <p>15 Domains</p>
                        <p>1 Year Support</p>
                        <Button className='btn-3' text='Get Started'/>
                    </div>
                    <div className='col col_team'>
                        <div className='stars'>
                            <Stars />
                        </div>
                        <h4>Team</h4>
                        <h1>$95</h1>
                        <strong>Per month</strong>
                        <hr></hr>
                        <p>10GB Storage</p>
                        <p>Unlimited Users</p>
                        <p>50 Domains</p>
                        <p>Lifetime Support</p>
                        <Button text='Get Started'/>
                    </div>
                    <div className='col col_company'>
                        <h4>Company</h4>
                        <h1>$49</h1>
                        <strong>Per month</strong>
                        <hr></hr>
                        <p>100GB Storage</p>
                        <p>Unlimited Users</p>
                        <p>20 Domains</p>
                        <p>Lifetime Support</p>
                        <Button className='btn-3' text='Get Started'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing