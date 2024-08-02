import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import youtubeImg from "../public/images/youtube.png";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
    const handleClick = () => {
        window.open('https://www.youtube.com/@Hasanscode', '_blank', 'noopener,noreferrer');
    };

    const handleDownload = () => {
        // Creating an invisible anchor element to trigger the download
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Path to your PDF file in the public folder
        link.download = 'CV_Hasan.pdf'; // Name of the downloaded file
        link.click();
    };

    return (
        <div className='h-[88vh] bg-[url("/images/banner.jpg")] mt-[10vh] bg-cover bg-center '>
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
                        HI, I AM <span className="text-yellow-400 "> HASAN</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]  ">
                        I have completed a web development course from SMIT
                        (Saylani Mass It Training) Experienced MERN Stack Developer with
                        expertise in MongoDB, Express.js, React.js, and Node.js. Seeking
                        opportunities to expand my skills and contribute to innovative web
                        development projects.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-0 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button
                            onClick={handleDownload}
                            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
                        >
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black  " />
                        </button>
                        <button onClick={handleClick} className="flex items-center space-x-2">
                            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 text-[#55e6a5] transition-all duration-200 " />
                            <p className=" text-[20px] text-white font-semibold">
                                Watch My Videos
                            </p>
                        </button>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] ">
                    <Image
                        src={youtubeImg}
                        alt="User"
                        layout="fill"
                        className="object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

