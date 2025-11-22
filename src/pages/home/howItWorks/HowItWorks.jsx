import bookingIcon from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto text-secondary mb-24">
      <h2 className="text-3xl font-extrabold ">How It Works</h2>
      <section className="grid grid-cols-4 gap-5 mt-8">
        <div className="bg-white p-8 rounded-3xl">
          <img className="mb-6" src={bookingIcon} alt="booking icon" />
          <p className="font-bold mb-4">Booking Pick & Drop</p>
          <p className="font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl">
          <img className="mb-6" src={bookingIcon} alt="booking icon" />
          <p className="font-bold mb-4">Cash On Delivery</p>
          <p className="font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl">
          <img className="mb-6" src={bookingIcon} alt="booking icon" />
          <p className="font-bold mb-4">Delivery Hub</p>
          <p className="font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl">
          <img className="mb-6" src={bookingIcon} alt="booking icon" />
          <p className="font-bold mb-4">Booking SME & Corporate</p>
          <p className="font-medium text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </section>
    </div>
  );
};
export default HowItWorks;
