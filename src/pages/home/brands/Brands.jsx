// import Marquee from "react-fast-marquee";
import "swiper/css";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const Brands = () => {
  const brands = [amazon, amazonVector, casio, moonstar, star, startPeople];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        We've helped thousands of sales teams
      </h2>
      {/* Using marquee showing brand logos */}
      {/* <Marquee>
        <div className="mr-20">
          <img src={amazon} alt="amazon logo" />
        </div>
        <div className="mr-20">
          <img src={amazonVector} alt="amazonVector logo" />
        </div>
        <div className="mr-20">
          <img src={casio} alt="casio logo" />
        </div>
        <div className="mr-20">
          <img src={moonstar} alt="moonstar logo" />
        </div>
        <div className="mr-20">
          <img src={star} alt="star logo" />
        </div>
        <div className="mr-20">
          <img src={startPeople} alt="startPeople logo" />
        </div>
      </Marquee> */}

      {/* using swiper showing brand logos */}
      <Swiper
        className="w-11/12 mx-auto"
        slidesPerView={4}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {brands.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="brand logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Brands;
