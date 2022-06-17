import { Categories, Sort, PizzaBlock, Skeleton } from '.';
import { setFetchPizzas } from '../redux/actions/pizzas';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Home() {
  const {loading, pizzas} = useSelector(state => state.pizzas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFetchPizzas())
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
          {loading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
