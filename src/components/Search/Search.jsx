import { useSelector, useDispatch } from 'react-redux';
import { useRef, useCallback, useState } from 'react';
import { setSearch } from '../../redux/slices/sortSlice';
import debounce from 'lodash.debounce';

import style from './search.module.scss';


function Search() {
  const [value, setValue] = useState('')
  const { search } = useSelector((state) => state.sortSlice);

  const dispatch = useDispatch();
  const inputRef = useRef();

  const clearInput = () => {
    setValue('')
    dispatch(setSearch(''));
    inputRef.current.focus();
  };

  const updateSearch = useCallback(
    debounce((e) => {
      dispatch(setSearch(e.target.value))
    }, 500),
    []
  )

  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearch(e)
  }

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        onChange={onChangeInput}
        className={style.input}
        value={value}
        name="search"
        type="text"
        placeholder="Поиск пиццы..."
      />

      {search ? (
        <svg
          onClick={clearInput}
          className={style.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : null}
    </div>
  );
}

export default Search;
