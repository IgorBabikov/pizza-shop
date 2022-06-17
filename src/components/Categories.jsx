import { useDispatch, useSelector } from 'react-redux';
import { setSortCategory } from '../redux/actions/sort';

const categoriesList = [
  { name: 'Все', type: 0 },
  { name: 'Мясные', type: 1 },
  { name: 'Вегетарианская', type: 2 },
  { name: 'Гриль', type: 3 },
  { name: 'Острые', type: 4 },
  { name: 'Закрытые', type: 5 },
];

function Categories() {
  const { category } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const handleCategory = (type) => {
    dispatch(setSortCategory(type));
  };

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((item) => (
          <li
            onClick={() => handleCategory(item.type)}
            className={category === item.type ? 'active' : ''}
            key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
