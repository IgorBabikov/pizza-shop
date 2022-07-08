import { useParams } from 'react-router-dom';
import { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {Spinner} from '../spinner/Spinner';

import style from './pizzaInfo.module.scss';

const PizzaInfo: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
  }>();

  const key = process.env.REACT_APP_KEY;
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizzaId() {
      try {
        const { data } = await axios.get(`https://62a54ce7430ba53411c504a9.mockapi.io/pizzas-list/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Не удалось получить информаю о пиццы');
        throw error;
      }
    }

    fetchPizzaId();
  }, []);

  if (!pizza) {
    return <Spinner />;
  }

  const { imageUrl, title } = pizza;

  return (
    <div className="container">
      <div className={style.inner}>
        <img className={style.img} src={imageUrl} alt={title} />

        <div className={style.info}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.descr}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab laboriosam animi illum
            amet vero, voluptas exercitationem deserunt natus similique id illo temporibus quibusdam
            dolor autem a nobis culpa, tempore blanditiis quod. Reiciendis est enim illo quam, cum
            dicta itaque, temporibus ut saepe doloribus, eius provident beatae atque explicabo
            impedit?
          </p>
        </div>
      </div>

      <Link to="/" className="button button--outline button--add go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default PizzaInfo