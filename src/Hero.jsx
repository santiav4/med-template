import Nav from "./Nav";

import { BsCheckLg } from "react-icons/bs";
const Hero = () => {
    return (
        //Here goes hero image covering also the nav
        //also the brands at the end
        <div className=" bg-hero7 md:bg-hero6 bg-right md:bg-cover md:h-[500px]  bg-no-repeat pb-6 md:px-4 border-b ">
            <Nav />
            <div className=" w-[70%] md:h-[100%] px-6 md:flex md:flex-col md:justify-center lg:justify-start lg:mt-12 text-white">
                <div className=" flex items-center text-xs md:text-lg mt-10 mb-2">
                    <BsCheckLg size={16} />
                    <p className=" ml-2 text-white font-semibold text-base">
                        100% Trusted Platform
                    </p>
                </div>
                <h1 className=" mb-2 text-2xl md:text-4xl md:mt-6 font-bold">
                    Lorem ipsum dolor sit amet elit
                </h1>
                <p className="  mb-4 text-sm md:text-lg md:my-4 md:mb-10 text-white font-semibold">
                    Lorem ipsum dolor sit amet.
                </p>
                <button className="flex justify-center  items-center bg-[#26456D] hover:bg-[#01AEC6] transition ease-in-out delay-75 text-white w-[125px] h-[40px] md:h-[60px] md:text-lg rounded-xl ">
                    <p className="font-semibold text-center text-white">
                        Get Started
                    </p>
                    {/* <div>
                        <BsCheckLg />
                    </div> */}
                </button>
            </div>
        </div>
    );
};

export default Hero;
