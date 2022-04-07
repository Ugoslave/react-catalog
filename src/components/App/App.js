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

  const handleButtonClick = () => {
    setCards(cards.filter((i) => i.quantity_available > 0));
  }

  return (
    <div className="app">
      <Header onClick={handleButtonClick} />
      <section className="cards">
        <ul className="cards-container">
          {cards.map((item) => {
            return (
              <Card
                key={item.product_id}
                card={item}
              />
            );
          })}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default App;
