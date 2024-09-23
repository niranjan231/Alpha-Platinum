import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "./data";
import "./Card1Carosal.css";
// import Catogery from './Catogery';
import Catogery from './Catogery';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  const navigate = useNavigate();
  const handleShowCatgry=()=>{
navigate("/catogery")
  }
    console.log(data)
  return (
    <div className='Carosal-1212'>
    <h1 className='card-carosal-h1'>Category</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} 
    >
        {
          data.map((item)=>{
            return <SwiperSlide onClick={handleShowCatgry}><img className='card-carosal-img' src={item.image}></img></SwiperSlide>
          })
        }
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
    </div>
  );
};