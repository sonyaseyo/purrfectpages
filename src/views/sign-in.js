import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import ContactForm71 from '../components/contact-form71';
import Footer15 from '../components/footer15';
import './sign-in.css';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми, щоб уникнути перезавантаження сторінки

    try {
      // Відправляємо дані на сервер за допомогою POST-запиту
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Отримуємо результат від сервера
      const data = await response.json();

      // Обробляємо результат
      console.log('Ви увійшли успішно!', data);
    } catch (error) {
      // Обробка помилок, якщо щось пішло не так при авторизації
      console.error('Помилка авторизації:', error);
    }
  };

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
        <label>
          Електронна пошта:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Увійти</button>
      </form>
      <div className="sign-in-footer11">
        <Footer15 rootClassName="footer15-root-class-name4"></Footer15>
      </div>
    </div>
  );
};

export default SignIn;
