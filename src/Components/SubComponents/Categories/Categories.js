import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryList,
  selectCategory
} from '../../../Store/categorySlice';

let Categories = () => {
  const categories = useSelector(selectCategory);
  console.log(categories);
  const dispatch = useDispatch();
  // console.log(categories);
  return (
    <div>
      <p>Test</p>
      {categories && categories.categories.map(category => (
        <button
        key={category._id}
        onClick={dispatch(setCategoryList(category.name))}
        >
        <p>{category.name}</p>
        </button>
      ))}
    </div>
  )
}

export default Categories;
