import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import signup from '../../assets/images/signup.jpg';

export default function Register(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already Exists.') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    designation: '',
    companyType: 'Insurance',
  });
  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    companyName,
    designation,
    companyType,
  } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSignup = e => {
    e.preventDefault();
    console.log(user);
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      phone === '' ||
      confirmPassword === '' ||
      companyName === '' ||
      designation === ''
    ) {
      setAlert('Please enter all fields.', 'danger');
    } else if (password !== confirmPassword) {
      setAlert('Password do not Match', 'danger');
    } else {
      register(user);
    }
  };

  const companys = ['Insurance', 'Loan', 'Education', 'Banking'];
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Registration</h2>
            <form method="POST" className="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-phone"></i>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="mobile No."
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CompanyName">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  onChange={onChange}
                  value={companyName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">
                  <i className="zmdi zmdi-graduation-cap"></i>
                </label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={designation}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyType">
                  <i className="zmdi zmdi-balance"></i>Company Type
                </label>
                <select
                  className="form-control exampleFormControlSelect1"
                  name="companyType"
                  onChange={onChange}
                  value={companyType}
                >
                  {companys.map((opt, index) => {
                    return <option key={`key${index}`}>{opt}</option>;
                  })}
                  {/* <option value="Insurance">
                    Insurance
                  </option>
                  <option value="Banking">Banking</option>
                  <option value="Loan">Loan</option>
                  <option value="Education">Education</option> */}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agreeTerm"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in{' '}
                  <a href="terms" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  className="form-submit"
                  onClick={handleSignup}
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={signup} alt="sing up" />
            </figure>
            <a href="index.html" className="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
