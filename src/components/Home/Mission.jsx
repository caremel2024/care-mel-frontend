// import React from 'react';
import { Link } from "react-router-dom";
import missionImage from "./../../assets/image/home/mission.svg"; // Update with the actual image path
// import Collaborate from "./Collaborate";
const Mission = () => {
  return (
    <div className="mt-20 p-5 lg:px-0 lg:w-[1000px] mx-auto md:text-center">
      <h2 className="header-text font-bold">
        Our Mission: Caring for Every Family
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:mt-6 rounded-lg py-4">
        <div className="rounded-lg overflow-hidden mt-5 w-full md:w-1/2">
          <img
            src={missionImage}
            alt="Caring Family"
            className="w-full h-[300px] md:h-auto  object-cover"
          />
        </div>
        <div className=" md:w-1/2 md:mt-0 flex flex-col md:text-[14px] lg:text-[20px]  md:leading-6 lg:leading-8">
          <p className=" font-medium  mb-4 text-start">
            We’re dedicated to making caregiving a positive experience for every
            family. Our team provides compassionate, personalized support,
            ensuring your loved ones feel respected and cared for.
          </p>
          <p className="font-medium mb-2 text-start">
            With a focus on quality and trust, we create care plans that fit
            each family’s unique needs, giving you peace of mind every step of
            the way.
          </p>
          <Link
            to="/about"
            className="text-[20px] md:text-[15px] text-center lg:text-[20px] open-sans mt-5 border border-primary bg-primary text-white hover:bg-white hover:text-primary font-bold rounded-full py-4 md:py-2 px-4 transition duration-300"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mission;
