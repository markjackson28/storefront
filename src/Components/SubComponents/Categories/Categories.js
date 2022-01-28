import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryList,
  selectCategory
} from '../../../Store/categorySlice';

let Categories = () => {
  const categories = useSelector(selectCategory);
  // console.log('**', categories && categories.categories.map(cat => console.log(cat)));
  // const dispatch = useDispatch();
  return (
    <div>
      <>
        {categories && categories.categories.map((cat) => (
          <p key={cat._id}>{cat.name}</p>
        ))}
      </>
    </div>
  )
}

export default Categories;
