import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../../assets/banner/banner1.png";
import bannerImage2 from "../../../assets/banner/banner2.png";
import bannerImage3 from "../../../assets/banner/banner3.png";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3500}
      showIndicators={false}
      showStatus={false}
      stopOnHover={true}
      showThumbs={false}
      className="bg-white w-11/12 mx-auto rounded-4xl mb-24"
    >
      <div className="relative">
        <img src={bannerImage1} />
        <section className="flex font-bold absolute bottom-17 left-20 gap-4">
          <div className="flex items-center">
            <button className="bg-primary text-button px-8 py-4 rounded-full">
              Track Your Parcel
            </button>
            <span className="bg-[#1F1F1F] rounded-full text-primary p-3">
              <FiArrowUpRight size={20} />
            </span>
          </div>
          <button className="px-8 py-4 rounded-xl border border-[#dadada]">
            Be A Rider
          </button>
        </section>
      </div>
      <div>
        <img src={bannerImage2} />
        <section className="flex font-bold absolute bottom-17 left-20 gap-4">
          <div className="flex items-center">
            <button className="bg-primary text-button px-8 py-4 rounded-full">
              Track Your Parcel
            </button>
            <span className="bg-[#1F1F1F] rounded-full text-primary p-3">
              <FiArrowUpRight size={20} />
            </span>
          </div>
          <button className="px-8 py-4 rounded-xl border border-[#dadada]">
            Be A Rider
          </button>
        </section>
      </div>
      <div>
        <img src={bannerImage3} />
        <section className="flex font-bold absolute bottom-17 left-20 gap-4">
          <div className="flex items-center">
            <button className="bg-primary text-button px-8 py-4 rounded-full">
              Track Your Parcel
            </button>
            <span className="bg-[#1F1F1F] rounded-full text-primary p-3">
              <FiArrowUpRight size={20} />
            </span>
          </div>
          <button className="px-8 py-4 rounded-xl border border-[#dadada]">
            Be A Rider
          </button>
        </section>
      </div>
    </Carousel>
  );
};
export default Banner;
