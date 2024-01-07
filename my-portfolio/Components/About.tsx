import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
      <div className="grid  grid-col-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center ">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md:-[1rem] ">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white ">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10 ">
            <span className="w-[100px] h-[5px] md:block hidden rounded-sm bg-slate-400 "></span>
            <p className="text-[19px] text-slate-300 w-[80%] ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black  " />
          </button>
        </div>
        <div className="w-[500px] h-[500px] relative lg:w-[500px] lg:h-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 ">
          <Image
            src="/images/about.jpg"
            alt="User"
            layout="fill"
            objectFit="contain"
            className="relative w-[100%] h[100%] z-[11] object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default About;

//           

