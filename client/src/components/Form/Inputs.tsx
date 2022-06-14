import React, { LegacyRef } from 'react';

interface Props {
  form: number;
  emailRef: LegacyRef<HTMLInputElement>;
  passRef: LegacyRef<HTMLInputElement>;
}

const Inputs = ({ form, emailRef, passRef }: Props) => {
  return (
    <div className="overflow-x-hidden w-full mt-2 mb-4 ">
      <div
        className="w-full flex transition-transform duration-500"
        style={{
          transform: form === 0 ? 'translateX(0%)' : 'translateX(-100%)',
        }}
      >
        <div className="flex flex-col gap-4 min-w-full items-flex-start ">
          <input
            className="outline-none px-4"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col gap-4 min-w-full items-flex-start ">
          <input
            className="outline-none px-4"
            type="password"
            placeholder="Enter your password"
            ref={passRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
