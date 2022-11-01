import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            className="rounded-lg shadow-2xl w-4/5 h-full  "
            src={person}
            alt=""
          />
          <img
            className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl"
            src={parts}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-orange-500 font-bold">About Us</p>
          <h1 className="text-5xl font-bold my-5">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-orange-600 border-none rounded-md text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
