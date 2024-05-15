import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroImg3 from "../../../assets/images/img-1.jpg";
import HeroImg2 from "../../../assets/images/img-2.jpg";
import HeroImg1 from "../../../assets/images/img-3.jpg";

const SwiperContainer = () => {
  const swiperStyle = {
    width: "600px",
    height: "500px",
  };

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    color: "white",
    width: "100%",
    height: "100%",
  };

  return (
    <Swiper
      className='swipperContainer'
      style={swiperStyle}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }} // 3 seconds
    >
      <SwiperSlide style={slideStyle}>
        <img src={HeroImg3} alt='hero image' />
      </SwiperSlide>
      <SwiperSlide style={slideStyle}>
        <img src={HeroImg2} alt='hero image' />
      </SwiperSlide>
      <SwiperSlide style={slideStyle}>
        <img src={HeroImg1} alt='hero image' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperContainer;
