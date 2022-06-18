import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/actions/sort';

import style from './search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.sort);

  return (
    <div className={style.root}>
      <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className={style.input}
        value={search}
        name="search"
        type="text"
        placeholder="Поиск пиццы..."
      />

      {search ? (
        <svg
          onClick={() => dispatch(setSearch(''))}
          className={style.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : null}
    </div>
  );
}

export default Search;
