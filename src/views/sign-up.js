import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import ContactForm7 from '../components/contact-form7';
import Footer15 from '../components/footer15';
import axios from 'axios'; // Додавання імпорту axios

import './sign-up.css';

const SignUp = () => {
  const handleSignUp = (formData) => {
    // Відправка даних реєстрації на сервер за допомогою Axios
    axios.post('/api/signup', formData)
      .then(response => {
        // Обробка успішної відповіді від сервера
        console.log(response.data);
        // Редірект на сторінку welcome-page.js після успішної реєстрації
        //props.history.push('/welcome-page');
      })
      .catch(error => {
        // Обробка помилок при відправці даних на сервер
        console.error('Помилка реєстрації:', error);
      });
  };
  

  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-up - Composed Frequent Lapwing</title>
        <meta property="og:title" content="Sign-up - Composed Frequent Lapwing" />
      </Helmet>
      <div className="sign-up-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name3" />
      </div>
      {/* Передача функції handleSignUp як пропс у компонент ContactForm7 */}
      <ContactForm7 onSubmit={handleSignUp} />
      <div className="sign-up-footer11">
        <Footer15 rootClassName="footer15-root-class-name3" />
      </div>
    </div>
  );
};

export default SignUp;
