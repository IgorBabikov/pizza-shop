import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/sort/slice';
import { selectSort } from '../../redux/sort/selectors';

import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

export const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectSort);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};
