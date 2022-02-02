import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setProduct,
  selectCategory
} from '../../../Store/categorySlice';
import { 
  setCart, 
  selectCart 
} from '../../../Store/cartSlice'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let Products = () => {
  // This is selecting state from slice
  const categories = useSelector(selectCategory);
  const cart = useSelector(selectCart);
  // console.log('**', categories.activeProduct && categories.activeProduct.name);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {categories.activeCategory.productList && categories.activeCategory.productList.products.map((prod) => (
        <Box sx={{ p: 1 }}>
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography>
                {prod.name}
                <br />
                Price: {prod.price}
                <br />
                Stock: {prod.stock}
              </Typography>
            </CardContent>
            <CardActions button onClick={() => { 
              dispatch(setCart(prod));
               }}>
              <Button size="small">Add to Cart</Button>
            </CardActions>
            <CardActions button onClick={() => { 
              handleOpen(); 
              dispatch(setProduct(prod));
               }}>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {categories.activeProduct && categories.activeProduct.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description: {categories.activeProduct && categories.activeProduct.description}
              <br />
              Price: {categories.activeProduct && categories.activeProduct.price}
              <br />
              Stock: {categories.activeProduct && categories.activeProduct.stock}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Products;
