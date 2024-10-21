import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projetos: React.FC = () => {
  return (
    <section id="projects">
    <div className="projects-section">
      <h3 style={{color: '#9669FF'}}>Projetos</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
  );
};

export default Projetos;