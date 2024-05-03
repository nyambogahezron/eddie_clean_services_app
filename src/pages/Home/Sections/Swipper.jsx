import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwipperCon = () => {
  const swiperStyle = {
    width: "100%",
    height: "300px",
  };

  const slideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    color: "white",
    backgroundColor: "#007BFF",
  };

  return (
    <Swiper
      style={swiperStyle}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Include Autoplay module
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }} // Autoplay configuration
    >
      <SwiperSlide style={slideStyle}>Slide 1</SwiperSlide>
      <SwiperSlide style={slideStyle}>Slide 2</SwiperSlide>
      <SwiperSlide style={slideStyle}>Slide 3</SwiperSlide>
      <SwiperSlide style={slideStyle}>Slide 4</SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default SwipperCon;
