import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/actions/sort';

import styles from './pagination.module.scss';

function Pagination() {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={0}
    />
  );
}

export default Pagination;
