import { FC } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './HomePage';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};
