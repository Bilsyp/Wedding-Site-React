import React from "react";
import CountDown from "./CountDown";
const Hero = () => {
  return (
    <section className='Hero flex text-center justify-center items-center'>
      <div className='Hero_Content '>
        <h2 className=' font-sacra font-bold  text-gray-100 '>
          Welcome To My Sites
        </h2>
        <CountDown />
        <button className='mt-8 bg-pink-500 font-semibold rounded-xl duration-150 py-2 px-10 text-gray-100 hover:bg-shadows hover:scale-110'>
          Notification
        </button>
      </div>
    </section>
  );
};

export default Hero;
