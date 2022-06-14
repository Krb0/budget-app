import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser, saveUser } from '../store/user/user.slice';

const useAuth = () => {
  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const logout = () => {
    setCookie('token', '', { path: '/' });
    dispatch(clearUser());
    setAuth(false);
  };///////////////////////////////////////////////////////////////////////////////////
   
  useEffect(() => {
    if (cookies.token) {
      getUser(cookies.token).then((data) => {
        if (data) {
          if (data) {
            setAuth(true);
            dispatch(saveUser(data.user));
            setCookie('token', data.token, { path: '/' });
          }
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return { auth, logout, loading };
};

export default useAuth;

export async function getUser(tokens: any) {
  const res = await fetch('http://localhost:5000/users/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokens}`,
    },
  });
  const { data } = await res.json();
  return data;
}
