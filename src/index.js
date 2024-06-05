import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './index.css';
import App from './App'; // Імпорт іншого App компонента
import reportWebVitals from './reportWebVitals';

import './style.css';
import Books from './views/books';
import WelcomePage from './views/welcome-page';
import SignIn from './views/sign-in';
import Plans from './views/plans';
import WelcomeBackPage from './views/welcome-back-page';
import SignUp from './views/sign-up';
import Home from './views/home';
import UserAccount from './views/user-account';
import NotFound from './views/not-found';

const MainApp = () => { // Змінено ім'я компонента
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/welcome-back-page" element={<WelcomeBackPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="*" />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();
