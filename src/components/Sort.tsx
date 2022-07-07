import { useState, useEffect, useRef, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../redux/slices/sortSlice';
import {Sort as SortType} from '../redux/slices/sortSlice'


export const sortName: SortType[] = [
  { name: 'популярности (DESC)', type: 'rating' },
  { name: 'популярности (ASC)', type: '-rating' },
  { name: 'цене (DESC)', type: 'price' },
  { name: 'цене (ASC)', type: '-price' },
  { name: 'алфавиту', type: 'title' },
];

type SortPopupProps = {
  sortBy: SortType;
};

const Sort: FC<SortPopupProps> = memo(({sortBy}) => {
  const [sortPopup, setSortPopup] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const showSortPopup = () => {
    setSortPopup((prev) => !prev);
  };

  const addActiveSort = (obj: SortType) => {
    dispatch(setSortBy(obj));
    setSortPopup(false);
  };

  useEffect(() => {
    const handleClickBody = (e: any) => {
      const path = e.path || (e.composedPath && e.composedPath());

      if (sortRef.current && path && !path.includes(sortRef.current)) {
        setSortPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickBody);

    return () => document.body.removeEventListener('click', handleClickBody);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          style={{ transform: sortPopup ? 'rotate(180deg)' : '' }}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={showSortPopup}>{sortBy.name}</span>
      </div>
      {sortPopup && (
        <div className="sort__popup">
          <ul>
            {sortName.map((item) => (
              <li
                onClick={() => addActiveSort(item)}
                className={sortBy.type === item.type ? 'active' : ''}
                key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
