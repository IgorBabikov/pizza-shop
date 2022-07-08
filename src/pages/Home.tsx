import { useEffect, useRef, FC } from 'react';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setFilters } from '../redux/sort/slice';
import { fetchPizzas } from '../redux/pizzas/slice';
import { FilterSliceState } from '../redux/sort/types';
import { selectPizzas } from '../redux/pizzas/selectors';
import { selectSort } from '../redux/sort/selectors';


import { Categories, Sort, PizzaBlock, Skeleton, ErrorMessage, Pagination } from '../components';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const { pizzas, status } = useSelector(selectPizzas);
  const { categoryId, sortBy, search, currentPage } = useSelector(selectSort);


  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({ ...params } as unknown as FilterSliceState),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sortBy,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortBy, currentPage]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortBy, currentPage]);

  const getPizzas = () => {
    const category = categoryId > 0 ? String(`&category=${categoryId}`) : ''
    const sorting = sortBy.type.replace('-', '');
    const order = sortBy.type.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchPizzas({
        category,
        sorting,
        order,
        currentPage,
      }),
    );
  };

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  const items = pizzas
    .filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()))
    .map((item: any) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} />

          <Sort sortBy={sortBy}/>
        </div>

        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <ErrorMessage />
        ) : (
          <div className="content__items">{status === 'loading' ? skeleton : items}</div>
        )}
      </div>

      <Pagination />
    </div>
  );
}

export default Home;
