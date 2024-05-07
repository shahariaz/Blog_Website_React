import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-32 mx-auto  bg-black">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 ">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing thier stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials
        </p>
        <div className="">
          <Link
            to="/"
            className="font-medium hover:text-orange-500 inline-flex items-center "
          >
            Learn More
            <FaArrowRight className="text-white mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
