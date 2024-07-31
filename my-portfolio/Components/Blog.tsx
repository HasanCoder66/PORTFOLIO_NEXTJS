import Image from "next/image";
import React from "react";
import blog2 from "../public/images/blog2.jpg";
import { ChatBubbleLeftRightIcon, UserCircleIcon } from "@heroicons/react/20/solid";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]    ">
      <h1 className="heading">
        My
        <span className="text-yellow-400">Blog</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] h-[400px] relative">
            <Image
              //   src={blog2}
              src="/images/blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              {" "}
              December 5,2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4  ">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="h-[1.5rem] w-[1.5rem] mx-auto text-[#55e6a5] " />
                    <p className="text-white text-[11px]">By Ahsan</p>
                </div>
                <div className="flex space-x-3 items-center  ">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] "/>
                    <p className="text-white text-[11px]">Comments (4)</p>
                </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font-semibold ">Next js Full Stack Development</div>
          </div>
        </div>
        
        <div>
          <div className="w-[100%] h-[400px] relative">
            <Image
              //   src={blog2}
              src="/images/blog1.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              {" "}
              February 28,2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4  ">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="h-[1.5rem] w-[1.5rem] mx-auto text-[#55e6a5] " />
                    <p className="text-white text-[11px]">By Alisha</p>
                </div>
                <div className="flex space-x-3 items-center  ">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] "/>
                    <p className="text-white text-[11px]">Comments (40)</p>
                </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font-semibold ">Next js Full Stack Development</div>
          </div>
        </div>

        <div>
          <div className="w-[100%] h-[400px] relative">
            <Image
              //   src={blog2}
              src="/images/blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto ">
              {" "}
              August 5,2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4  ">
                <div className="flex items-center space-x-3">
                    <UserCircleIcon className="h-[1.5rem] w-[1.5rem] mx-auto text-[#55e6a5] " />
                    <p className="text-white text-[11px]">By Jhon</p>
                </div>
                <div className="flex space-x-3 items-center  ">
                    <ChatBubbleLeftRightIcon className="w-[1.5rem] h-[1.5rem] mx-auto text-[#55e6a5] "/>
                    <p className="text-white text-[11px]">Comments</p>
                </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font-semibold ">React js Frontend Development</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
