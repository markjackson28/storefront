import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  selectCategory
} from '../../../Store/categorySlice';

let Categories = () => {
  // This is selecting state from slice
  const categories = useSelector(selectCategory);
  // console.log('**', categories.activeCategory);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        {categories && categories.categories.map((cat) => (
          <button 
          key={cat._id}
          onClick={() => {
            dispatch(setCategory(cat))
          }}
          >{cat.name}</button>
        ))}
      </>
      <>
        {categories && categories.activeCategory.name}  
      </>
    </div>
  )
}

export default Categories;
