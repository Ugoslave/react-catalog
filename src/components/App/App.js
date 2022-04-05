import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import api from '../../utils/api';

import './App.css';


const App = () => {


  return (
    <>
      <div className="app">
        <Header />
        <section className="data-box">
          <ul className="rates-list">
            <Card />
          </ul>
        </section>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
