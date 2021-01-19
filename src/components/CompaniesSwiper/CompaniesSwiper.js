import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import './CompaniesSwiper.css'

// Documentation:
// https://swiperjs.com/react/
// https://swiperjs.com/demos/

// Issues:
// Pagination is on top of slider

// Setting up Swiper
SwiperCore.use([Navigation, Pagination, A11y]);

// Single slide
const slide = image => <SwiperSlide><img src={image} alt='' width='195px'></img></SwiperSlide>

// Component receives an array of images (company logos) and returns a Swiper element
// The breakpoints for responsiveness are defined here
function CompaniesSwiper(props) {
    return (
        <div className='companies-swiper'>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 6
                    },
                    767: {
                        slidesPerView: 4
                    }
                }}
            >
                { props.items.map( item => slide(item) ) }
            </Swiper>
        </div>
    )
}

export default CompaniesSwiper