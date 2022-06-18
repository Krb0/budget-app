import React from 'react';
import Ellipse from '../../../../assets/ellipse.svg';
const Quality = () => {
  return (
    <div className=" bg-[#cbeafc] w-full py-32 px-40 relative flex items-center justify-around mt-[5.5rem] ">
      <img
        src={Ellipse}
        className="absolute left-[50%] top-[0%] "
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="w-[225px]  ">
        <span className="font-bai font-[500] text-[1.6rem] block mb-4">
          We Building
          <br /> Social uniqueness
        </span>
        <span className="text-[#5F5F64] font-regular ">
          The marketing strategy lays out target markets and the value.
        </span>
      </div>
      <div className="w-[225px]  ">
        <span className="font-bai font-[500] text-[1.6rem] block mb-4">
          Social Media beyond probability
        </span>
        <span className="text-[#5F5F64] font-regular ">
          Essentially a formula for how a business is going to compete.
        </span>
      </div>
    </div>
  );
};

export default Quality;
