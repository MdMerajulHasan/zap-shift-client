import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
const Services = () => {
  return (
    <div className="w-11/12 mx-auto space-y-6 py-20 border-t border-b border-dashed border-[#03464d]">
      <div className="bg-white p-8 rounded-3xl flex justify-start items-center gap-12">
        <img src={liveTracking} alt="live-tracking image" />
        <div className="p-px py-15 border-r border-dashed border-[#03464d]"></div>
        <div>
          <h2 className="text-2xl font-extrabold ">Live Parcel Tracking</h2>
          <p className="font-medium text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl flex justify-start items-center gap-12">
        <img src={safeDelivery} alt="live-tracking image" />
        <div className="p-px py-15 border-r border-dashed border-[#03464d]"></div>
        <div>
          <h2 className="text-2xl font-extrabold ">100% Safe Delivery</h2>
          <p className="font-medium text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl flex justify-start items-center gap-12">
        <img src={safeDelivery} alt="live-tracking image" />
        <div className="p-px py-15 border-r border-dashed border-[#03464d]"></div>
        <div>
          <h2 className="text-2xl font-extrabold ">24/7 Call Center Support</h2>
          <p className="font-medium text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
