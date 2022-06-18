import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Inputs from './Inputs';
import Button from './Button';
import handleSubmit from './lib/form.post';

const Form = ({ login }: { login?: boolean }) => {
  const { data } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies();
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [form, setForm] = useState(0);
  useEffect(() => {
    if (data && cookies.token) {
      navigate('/dashboard');
    }
  }, [data, cookies]);
  return (
    <div className="border-[#dadada] rounded-lg border-[1px] flex flex-col w-[300px] items-center pb-4 pt-2 px-4 center ">
      {form === 1 && (
        <span
          className="self-start cursor-pointer mt-2 "
          onClick={() => {
            setForm(0);
          }}
        >
          <FaArrowLeft />
        </span>
      )}
      <h3 className="font-semibold text-[#444] text-[1.1rem] mb-4">
        {login ? 'Log in to your account' : ' Sign up to your account'}
      </h3>
      <Inputs form={form} emailRef={emailRef} passRef={passRef} />
      <Button
        form={form}
        setForm={setForm}
        handleSubmit={() =>
          handleSubmit(
            emailRef,
            passRef,
            setCookies,
            dispatch,
            login ? 'login' : 'register'
          )
        }
        login={login}
      />
      <Link
        to={login ? '/signup' : '/login'}
        className="text-[#777] font-[400] px-4 self-start mt-4 "
      >
        {login ? "Don't have an account?" : 'Already have an account?'}
      </Link>
    </div>
  );
};

export default Form;
