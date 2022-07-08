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

      dispatch(setFilters({ ...params } as unknown as FilterSliceState));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        categoryId,
        sortBy,
        search,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [currentPage, categoryId, sortBy, search]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [currentPage, categoryId, sortBy, search]);

  const getPizzas = () => {
    const page = search === '' ? `&page=${currentPage}` : '';
    const category = categoryId > 0 ? String(`&category=${categoryId}`) : '';
    const sorting = sortBy.type.replace('-', '');
    const order = sortBy.type.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchPizzas({
        page,
        category,
        sorting,
        order,
        search,
      }),
    );
  };

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  const items = pizzas.map((item: any) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} />

          <Sort sortBy={sortBy} />
        </div>

        {pizzas.length > 0 ? (
          <h2 className="content__title">Все пиццы</h2>
        ) : (
          <h2 className="content__title">Ничего не найдено</h2>
        )}

        {status === 'error' ? (
          <ErrorMessage />
        ) : (
          <div className="content__items">{status === 'loading' ? skeleton : items}</div>
        )}
      </div>

     {
      pizzas.length ?  <Pagination /> : null
     }
    </div>
  );
};

export default Home;
