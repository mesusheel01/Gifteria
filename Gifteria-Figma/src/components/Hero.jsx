import React from 'react';
import image from '../assets/image.png';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mandy-50 p-4 space-y-8">
      <div className="text-center grid gap-5 space-y-4">
        <h1 className="text-2xl mt-14 md:text-4xl font-bold text-mandy-900 font-poller">
          <span className="block text-6xl text-mandy-600 font-poller">Gifteria</span> Plan your next surprise or gifts for your loved ones!
        </h1>

        <p className="text-lg md:text-xl font-poppins text-mandy-800">
          The only place to decide and plan from the pre-defined ideas as well as very attractive giftable products.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src={image}
          alt="Gift"
          className="w-[18rem] sm:w-[25rem] md:w-[30rem] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
