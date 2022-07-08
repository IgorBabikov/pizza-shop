import { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setAddPizzas } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';
import { selectCartById } from '../redux/cart/selectors';
import { selectSort } from '../redux/sort/selectors';
import { setSearch } from '../redux/sort/slice';

const typePizzaName = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

export const PizzaBlock: FC<PizzaBlockProps> = ({ id, imageUrl, title, price, types, sizes }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const { search } = useSelector(selectSort);
  const findPizza = useSelector(selectCartById(id));

  const count = findPizza ? findPizza.count : 0;

  const dispatch = useDispatch();

  const onClickAdd = () => {
    const items: CartItem = {
      id,
      imageUrl,
      title,
      price,
      type: typePizzaName[activeType],
      size: sizes[activeSize],
      count: 0,
    };

    dispatch(setAddPizzas(items));
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        {search !== '' ? (
          <svg
            className="pizza-block__svg"
            onClick={() => dispatch(setSearch(''))}
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

        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt={title} />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((item, i) => (
              <li
                className={activeType === item ? 'active' : ''}
                onClick={() => setActiveType(item)}
                key={item}>
                {typePizzaName[item]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((item, i) => (
              <li
                className={activeSize === i ? 'active' : ''}
                onClick={() => setActiveSize(i)}
                key={item}>
                {item} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {count > 0 ? <i>{count}</i> : null}
          </button>
        </div>
      </div>
    </div>
  );
};
