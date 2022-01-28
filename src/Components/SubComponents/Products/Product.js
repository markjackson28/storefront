import { useSelector, useDispatch } from 'react-redux';
import {
  setProduct,
  selectCategory
} from '../../../Store/categorySlice';

let Products = () => {
  // This is selecting state from slice
  const categories = useSelector(selectCategory);
  console.log('**', categories.activeProduct && categories.activeProduct.name);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        {categories.activeCategory.productList && categories.activeCategory.productList.products.map((prod) => (
         <div>
           <button
           key={prod._id}
           onClick={() => {
            dispatch(setProduct(prod))
          }}
           >{prod.name}</button>
           <p>{prod.description}</p>
           <p>{prod.price}</p>
           <p>{prod.stock}</p>
         </div>
        ))}
      </>
      <>
        {categories.activeProduct && categories.activeProduct.name}  
      </>
    </div>
  )
}

export default Products;
