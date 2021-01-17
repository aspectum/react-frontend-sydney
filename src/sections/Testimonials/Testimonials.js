import CompaniesSwiper from '../../components/CompaniesSwiper/CompaniesSwiper';
import Quotes from '../../components/Quotes/Quotes';

import logo_1 from './company_logo_1.png'
import logo_2 from './company_logo_2.png'
import logo_3 from './company_logo_3.png'
import logo_4 from './company_logo_4.png'
import logo_5 from './company_logo_5.png'
import logo_6 from './company_logo_6.png'
import logo_7 from './company_logo_7.png'
import logo_8 from './company_logo_8.png'
import portrait_1 from './portrait1.png'
import portrait_2 from './portrait2.jpg'
import './Testimonials.css';

const companies = [ logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8 ]

function Testimonials() {
    return (
        <div className='section-wrapper'>
            <div className='testimonials container'>
                <h3 style={{fontSize: '26px', fontWeight: '500'}}>More than 2,2 million people across 55,000 companies choose Sydney</h3>
                <CompaniesSwiper items={companies} />
                <div className='flex'>
                    <Quotes 
                        quote='Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                        person={{
                            name: 'Amanda Lee',
                            job: 'Ceo & Founder Crix',
                            portrait: portrait_2
                        }}
                    />
                    <Quotes 
                        quote='Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                        person={{
                            name: 'Adam Cheise',
                            job: 'Head Of Sales, Intel',
                            portrait: portrait_1
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials