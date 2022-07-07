import { useDispatch } from 'react-redux';
import { FC, memo } from 'react';

import { setSortCategory } from '../redux/sort/slice';

const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type CategoriesId = {
  categoryId: number
}

const Categories: FC<CategoriesId> = memo(({categoryId}) => {
  const dispatch = useDispatch();

  const handleCategory = (index: number) => {
    dispatch(setSortCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item, i) => (
          <li
            onClick={() => handleCategory(i)}
            className={categoryId == i ? 'active' : ''}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
