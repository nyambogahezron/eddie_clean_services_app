import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "./data";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestimonialSection = () => {
  return (
    <div>
      <div className='title'>
        <h1> what our clients say about us</h1>
      </div>
      <div className='wrapper'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
            breakpoints={{
                0: {
                slidesPerView: 1,
                },
                640: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 3,
                },
            }}
        >
          {testimonials.map((testimonial) => {
            const { id, name, stars, image, text } = testimonial;

            return (
              <SwiperSlide key={id}>
                <div className='box'>
                  <FaQuoteLeft className='quote' />
                  <p>{text}</p>
                  <div className='content'>
                    <div className='info'>
                      <div className='name'>{name}</div>
                      <div className='stars'>
                        {Array(stars).fill(<FaStar />)}
                      </div>
                    </div>
                    <div className='image'>
                      <img
                        src={image ? image : "/images/user.png"}
                        alt={name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/user.png";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
