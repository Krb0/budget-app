import React from 'react';
import Card from '../../../../assets/card.png';
import Arrow from '../../../../assets/arrow.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="flex items-center flex-wrap justify-center ">
      <div className="flex flex-1  ">
        <div className=" flex flex-col gap-8">
          <h3 className="font-bai text-[5rem] font-bold text-[#223]">
            Banking <br />
            <span className="relative mr-4 ">
              <span className="absolute w-[105%]  h-[80%] mt-[15%] rounded-[100%] border-2 border-[#FF8A1F] " />
              <span className="relative z-10 ">more</span>
            </span>
            smart
          </h3>
          <p className="text-[1.15rem] text-[#535354] ">
            Meet the only spend management <br /> platform and corporate card.
          </p>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 group hover:bg-[#333] transition-colors duration-500 pr-4 w-fit "
          >
            <span className="bg-[#222223] p-2 ">
              <img src={Arrow} className="h-6 w-5" />
            </span>
            <span className="font-[500] group-hover:text-white ">
              Get your card
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex lg:flex-[1.5] justify-start   ">
        <div className="w-[85%]  ">
          <img src={Card} className="w-full h-full min-w-[500px] " />
        </div>
      </div>
    </main>
  );
};

export default Hero;
