import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const createUser = (e: any) => {
    e.preventDefault();
    const email = emailRef!.current!.value;
    const password = passwordRef!.current!.value;

    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={createUser}>
        <div>
          <label>Email: </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Insert your email"
            required
          />
        </div>
        <div style={{ display: 'block' }}>
          <label>Password: </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Insert your password"
            required
          />
        </div>
        <button>Log in</button>
        <Link to="/signup">Don't have an account?</Link>
      </form>
    </div>
  );
};

export default Login;
