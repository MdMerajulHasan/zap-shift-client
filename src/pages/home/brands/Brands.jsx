import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
const Brands = () => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        We've helped thousands of sales teams
      </h2>

      <Marquee>
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
      </Marquee>
    </div>
  );
};
export default Brands;
