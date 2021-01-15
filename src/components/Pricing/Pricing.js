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
                        <a href='#' className='button btn2'>Get Started</a>
                    </div>
                    <div className='col col_team'>
                        <div className='stars'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.998 511.998">
                                <path d="M336.038 162.408l-50.358-14.845-29.681-43.306-29.681 43.306-50.358 14.845 32.016 41.61-1.445 52.482L256 238.909l49.469 17.591-1.447-52.482zM160.08 162.407l-50.359-14.845-29.68-43.307-29.681 43.306L0 162.407l32.017 41.611-1.445 52.482 49.469-17.591 49.466 17.591-1.443-52.483zM511.998 162.408l-50.36-14.845-29.681-43.307-29.68 43.307-50.359 14.845 32.016 41.61-1.442 52.482 49.466-17.591 49.469 17.591-1.447-52.482zM424.016 313.652l-50.358-14.845-29.68-43.308-29.68 43.308-50.359 14.845 32.015 41.61-1.444 52.481 49.469-17.59 49.468 17.59-1.446-52.481zM248.059 313.651L197.7 298.806l-29.68-43.308-29.68 43.308-50.358 14.845 32.014 41.611-1.444 52.481 49.468-17.59 49.469 17.59-1.445-52.482z"/>
                            </svg>
                        </div>
                        <h4>Team</h4>
                        <h1>$95</h1>
                        <strong>Per month</strong>
                        <hr></hr>
                        <p>10GB Storage</p>
                        <p>Unlimited Users</p>
                        <p>50 Domains</p>
                        <p>Lifetime Support</p>
                        <a href='#' className='button'>Get Started</a>
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
                        <a href='#' className='button btn2'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing