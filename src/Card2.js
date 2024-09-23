import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data2 from './data2';
import "./Card2.css";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card3 from './Card3';

export default () => {
const [detale , setDetale] = useState([]);
const [show , setShow] = useState(false)
const BackHome=()=>{
  setShow(false)
}
// const detalepage=()=>{

// }
// const navigate = useNavigate()
const detalepage=(Crad2)=>{
  setDetale([{...Crad2}])
  setShow(true)
  // navigate("/card3")
}
  return (
    <>
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
          data2.map((item2)=>{
            return <SwiperSlide className='card22-11'>
              <div item2={item2} key={item2.id} className='card2-1'>
              <p>75% OFF</p>
              <img className='card-carosal-img2' src={item2.image}></img>
              <h4>Rs {item2.price}</h4>
              <button onClick={()=>detalepage(item2)}><FaCartPlus />Add Cart</button>
              </div>
            </SwiperSlide>
          })
        }
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
    {
      show && <Card3 BackHome={BackHome} detale={detale}/>
    }
    </>
  );
};