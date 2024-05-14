import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../assets/20210918-Beach_Cleanup_Ilhabela-01160.jpg'
import image2 from '../../assets/25 Ways to Volunteer in Your Community.jpg'
import image3 from '../../assets/long-term-volunteer-opportunities.jpg'
import image4 from '../../assets/20210918-Beach_Cleanup_Ilhabela-01160.jpg'
import image5 from '../../assets/product-5c35e8a4e96e8.[1600].jpeg'
import image6 from '../../assets/premed volunteering.webp'

const Slider = () => {
    return (
        <div className='my-8'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">

                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image1})`, backgroundPosition: 'center' }}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image2})`, backgroundPosition: 'center' }}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image3})`, backgroundPosition: 'center' }}>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image4})`, backgroundPosition: 'center' }}>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image5})`, backgroundPosition: 'center' }}>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${image6})`, backgroundPosition: 'center' }}>


                    </div>
                </SwiperSlide>
            </Swiper>
      </div>
    );
};

export default Slider;