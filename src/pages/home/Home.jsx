import Banner from "./banner/Banner";
import Brands from "./brands/Brands";
import HowItWorks from "./howItWorks/HowItWorks";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Brands></Brands>
      <Services></Services>
    </div>
  );
};
export default Home;
