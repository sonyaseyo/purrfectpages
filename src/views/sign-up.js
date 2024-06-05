import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import ContactForm7 from '../components/contact-form7';
import Footer15 from '../components/footer15';
import './sign-up.css';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log('Користувач зареєстрований!', data);
    } catch (error) {
      console.error('Помилка реєстрації:', error);
    }
  };

  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-up - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Sign-up - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="sign-up-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name3"></Navbar4>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Електронна пошта:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Зареєструватися</button>
      </form>
      <div className="sign-up-footer11">
        <Footer15 rootClassName="footer15-root-class-name3"></Footer15>
      </div>
    </div>
  );
};

export default SignUp;
