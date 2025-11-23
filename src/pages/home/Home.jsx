import Banner from "./banner/Banner";
import Brands from "./brands/Brands";
import HowItWorks from "./howItWorks/HowItWorks";
import Reviews from "./reviews/Reviews";
import Services from "./services/Services";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Brands></Brands>
      <Services></Services>
      <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  );
};
export default Home;
