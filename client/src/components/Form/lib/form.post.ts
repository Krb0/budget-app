import { LegacyRef } from 'react';
import { getUser } from '../../../hooks/useAuth';
import { saveUser } from '../../../store/user/user.slice';

const handleSubmit = (
  emailRef: React.RefObject<HTMLInputElement>,
  passRef: React.RefObject<HTMLInputElement>,
  setCookies: any,
  dispatch: any,
  path: string
) => {
  if (emailRef?.current?.value && passRef?.current?.value) {
    fetch('http://localhost:5000/users/' + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        getUser(res.token).then((data) => {
          setCookies('token', res.token, { path: '/' });
          dispatch(saveUser(data.user));
        });
      });
  }
};
export default handleSubmit;
