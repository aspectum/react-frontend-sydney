import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './CompaniesSwiper.css'

// https://swiperjs.com/react/
// https://swiperjs.com/demos/

// Pagination is on top of slider

const slide = image => <SwiperSlide><img src={image} alt='' width='195px'></img></SwiperSlide>

SwiperCore.use([Navigation, Pagination, A11y]);

function CompaniesSwiper(props) {
    return (
        <div className='companies-swiper'>
            <Swiper
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
            >
                { props.items.map( item => slide(item) ) }
            </Swiper>
        </div>
    )
}

export default CompaniesSwiper