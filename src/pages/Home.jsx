import { Categories, Sort, PizzaBlock, Skeleton } from '.';
import { setFetchPizzas } from '../redux/actions/pizzas';
import { setFilters } from '../redux/slices/sortSlice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { loaded, pizzas } = useSelector((state) => state.pizzas);
  const { category, sortBy, search, currentPage } = useSelector((state) => state.sortSlice);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category,
        sortBy,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [category, sortBy, currentPage]);

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [category, sortBy, currentPage]);

  const fetchPizzas = () => {
    dispatch(setFetchPizzas(category, sortBy, currentPage));
  };

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

      <Pagination />
    </div>
  );
}

export default Home;
