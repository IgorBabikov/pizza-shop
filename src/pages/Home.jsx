import { Categories, Sort, PizzaBlock, Skeleton } from '.';
import { getPizzas } from '../services/getData';
import { useEffect, useState } from 'react';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPizzas()
      .then((res) => {
        setPizzas(res)
        setIsLoading(false)
      })
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
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
