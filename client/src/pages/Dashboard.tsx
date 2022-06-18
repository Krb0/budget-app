import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { useCookies } from 'react-cookie';

const Home = () => {
  const user = useSelector((state: any) => state.user);
  const { auth, logout, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth && !loading) {
      navigate('/login');
    }
  }, [auth, loading, user]);

  if (loading) return <div>loading...</div>;
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <button
        className="bg-blue-500 p-4 text-white rounded-md "
        onClick={() => logout()}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
