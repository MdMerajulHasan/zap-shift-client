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
    >
      <div>
        <img src={bannerImage1} />
        <section className="flex">
          <div className="flex">
            <button>Track Your Parcel</button>{" "}
            <span>
              <FiArrowUpRight />
            </span>
          </div>
          <button>Be A Rider</button>
        </section>
      </div>
      <div>
        <img src={bannerImage2} />
      </div>
      <div>
        <img src={bannerImage3} />
      </div>
    </Carousel>
  );
};
export default Banner;
