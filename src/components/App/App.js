import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import api from '../../utils/api';

import './App.css';


const App = () => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getItems()
      .then((res) => setCards(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(cards);

  return (
    <div className="app">
      <Header />
      <section className="cards">
        <ul className="cards-container">
          <Card />
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default App;
