import { useSelector, useDispatch } from 'react-redux';
import { useRef, useCallback, useState, FC, ChangeEvent } from 'react';
import { setSearch } from '../../redux/sort/slice';
import { selectSort } from '../../redux/sort/selectors';
import debounce from 'lodash.debounce';

import style from './search.module.scss';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const { search } = useSelector(selectSort);

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setValue('');
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  const updateSearch = useCallback(
    debounce((e) => {
      dispatch(setSearch(e.target.value));
    }, 500),
    [],
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e);
  };

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
};
