import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={1}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img className='w-[426px]' src={slide1} alt="" />
      <h2 className=" text-4xl uppercase text-center -mt-16">Salads</h2>
      </SwiperSlide>
    <SwiperSlide><img className='w-[426px]' src={slide2} alt="" />
    <h2 className=" text-4xl uppercase text-center -mt-16">Pizzas</h2>
    </SwiperSlide>
    <SwiperSlide><img className='w-[426px]' src={slide3} alt="" />
    <h2 className=" text-4xl uppercase text-center -mt-16">Soups</h2>
    </SwiperSlide>
    <SwiperSlide><img className='w-[426px]' src={slide4} alt="" />
    <h2 className=" text-4xl uppercase text-center -mt-16">Desserts</h2>
    </SwiperSlide>
    <SwiperSlide><img className='w-[426px]' src={slide5} alt="" />
    <h2 className=" text-4xl uppercase text-center -mt-16">Salads</h2>
    </SwiperSlide>
 
  </Swiper>
  );
};

export default Category;