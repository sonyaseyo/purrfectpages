import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
//import { Redirect } from 'react-router-dom'; // Імпортуємо Redirect
import Navbar4 from '../components/navbar4';
import ContactForm71 from '../components/contact-form71';
import Footer15 from '../components/footer15';
import axios from 'axios';

import './sign-in.css';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToWelcome, setRedirectToWelcome] = useState(false); // Стан для редіректу

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Ви увійшли успішно!', response.data);
      setRedirectToWelcome(true); // Встановлюємо redirectToWelcome на true після успішної авторизації
    } catch (error) {
      console.error('Помилка авторизації:', error.response.data);
    }
  };

  // Якщо redirectToWelcome true, редіректуємо на welcome-back-page
  //if (redirectToWelcome) {
  //  return <Redirect to="/welcome-back-page" />;
  //}

  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-in - Composed Frequent Lapwing</title>
        <meta
          property="og:title"
          content="Sign-in - Composed Frequent Lapwing"
        />
      </Helmet>
      <div className="sign-in-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name4"></Navbar4>
      </div>
      <form onSubmit={handleSubmit}>
        <ContactForm71 setEmail={setEmail} setPassword={setPassword} />
      </form>
      <div className="sign-in-footer11">
        <Footer15 rootClassName="footer15-root-class-name4"></Footer15>
      </div>
    </div>
  );
};

export default SignIn;
