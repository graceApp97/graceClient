import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials.') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleLogin = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all feilds.', 'danger');
    } else {
      loginUser({
        email,
        password,
      });
    }
  };
  return (
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={loginImg} alt="sing up" />
            </figure>
            <Link to="/signup" className="signup-image-link">
              Create an account
            </Link>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Login</h2>
            <form className="register-form">
              <div className="form-group">
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  onChange={onChange}
                  value={password}
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="forget-Pass"
                  className="agree-term"
                />
                <label htmlFor="forget-Pass" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  <a href="forgetpassword.html">Forget Password</a>
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  onClick={handleLogin}
                  name="signin"
                  className="form-submit"
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
