import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { setSortCategory, selectSort } from '../redux/slices/sortSlice';


const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: FC = () => {
  const { categoryId } = useSelector(selectSort);
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
            className={categoryId === i ? 'active' : ''}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
