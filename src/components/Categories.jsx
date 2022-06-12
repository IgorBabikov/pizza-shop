import { useState } from "react";

const categories = [
  { name: 'Все', type: 'all' },
  { name: 'Мясные', type: 'meat' },
  { name: 'Вегетарианская', type: 'vegetarian' },
  { name: 'Гриль', type: 'grill' },
  { name: 'Острые', type: 'sharp' },
  { name: 'Закрытые', type: 'closed' },
];



function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onAddIndex = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li onClick={() => onAddIndex(i)} className={activeIndex === i ? 'active': ''} key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
