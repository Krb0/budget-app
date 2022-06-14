import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Register = () => {
  const { data } = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  return <Form />;
};

export default Register;
