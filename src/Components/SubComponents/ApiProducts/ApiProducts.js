import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductApi, selectProduct } from '../../../Store/productSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';

const ApiProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  console.log('prodsss', products.apiProducts)
  
  useEffect(() => {
    dispatch(fetchProductApi())
  }, [dispatch])

  return (
    <>
      {products && products.apiProducts.map((product) => (
        <Box key={product.productName} sx={{ p: 1 }}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography>
              {product.productName}
              <br />
              Price: {product.productPrice}
              <br />
              Stock: {product.productStock}
            </Typography>
          </CardContent>
          {/* <CardActions button={prod ? 1 : 0} onClick={() => {
            dispatch(setCart(prod));
            dispatch(setStockQuantity({category: prod._category, name: prod.name}))
             }}>
            <Button size="small">Add to Cart</Button>
          </CardActions>
          <CardActions button={prod ? 1 : 0} onClick={() => { 
            handleOpen(); 
            dispatch(setProduct(prod));
             }}>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </Box>
      ))}
    </>
  );
};

export default ApiProducts;
