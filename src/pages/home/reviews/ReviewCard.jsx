import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: reviewText, userName, user_photoURL } = review;
  return (
    <div className="bg-white p-8 rounded-3xl">
      <span className="text-[#c3dfe2]">
        <FaQuoteRight size={30} />
      </span>
      <p className="text-[#606060] mt-2">{reviewText}</p>
      <div className="border-b border-dashed border-[#03464d] my-6"></div>
      <div className="flex items-center gap-4">
        <img
          className="w-15 h-15 rounded-full"
          src={user_photoURL}
          alt="reviewer photo"
        />
        <div>
          <p className="text-xl font-extrabold text-secondary mb-2">
            {userName}
          </p>
          <p className="text-[#606060]">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
