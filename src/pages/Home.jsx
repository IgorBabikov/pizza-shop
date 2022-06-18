import { Categories, Sort, PizzaBlock, Skeleton } from '.';
import { setFetchPizzas } from '../redux/actions/pizzas';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const dispatch = useDispatch();

  const { loaded, pizzas } = useSelector((state) => state.pizzas);
  const { category, sortBy, search, currentPage } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(setFetchPizzas(category, sortBy, currentPage));
  }, [category, sortBy, currentPage]);

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const items = pizzas
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />

          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{!loaded ? skeleton : items}</div>
      </div>

      <Pagination/>
    </div>
  );
}

export default Home;
