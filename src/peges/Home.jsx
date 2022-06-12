import { Categories, Sort, PizzaBlock } from './';
import { getPizzas } from '../services/getData';
import { useEffect, useState } from 'react';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((res) => setPizzas(res));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />

          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((item) => (
            <PizzaBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
